#!/usr/bin/env python3
"""
=============================================================================
RAZ Download Manager — Website Release Synchronizer
File: tools/website/sync_release.py
Deskripsi: Otomatisasi pemutakhiran nomor versi, tautan unduhan, dan checksum SHA-256
           pada seluruh berkas HTML dan JavaScript website ketika rilis baru diterbitkan.
Standar: RAZ Enterprise Architecture Standard
Pengembang: RAZ Creative Studio
=============================================================================
"""

import os
import re
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent.parent
WEBSITE = ROOT / "website"
CARGO_TOML = ROOT / "Cargo.toml"


def get_version() -> str:
    """Mendapatkan nomor versi dari argumen CLI atau Cargo.toml."""
    if len(sys.argv) > 1 and sys.argv[1].strip():
        ver = sys.argv[1].strip().lstrip("v")
        if ver:
            return ver
    content = CARGO_TOML.read_text(encoding="utf-8")
    m = re.search(r'(?m)^version\s*=\s*"([^"]+)"', content)
    if not m:
        sys.exit("Error: Tidak dapat menemukan versi di Cargo.toml")
    return m.group(1)


def get_checksums(version: str) -> dict[str, str]:
    """Membaca SHA256SUMS.txt jika ada di target/dist atau dist."""
    sums = {}
    candidates = [
        ROOT / "target" / "dist" / "SHA256SUMS.txt",
        ROOT / "dist" / "SHA256SUMS.txt",
    ]
    for path in candidates:
        if path.exists():
            for line in path.read_text(encoding="utf-8").splitlines():
                parts = line.strip().split()
                if len(parts) >= 2:
                    sha, filename = parts[0], parts[1]
                    if filename.endswith("-setup.exe"):
                        sums["setup"] = sha
                    elif filename.endswith("-portable.zip"):
                        sums["portable"] = sha
                    elif filename.endswith("-x64.zip"):
                        sums["zip"] = sha
            if sums:
                break
    return sums


def update_file(path: Path, replacers: list[tuple[str, str]]) -> bool:
    """Mengganti teks dalam berkas jika berkas ada."""
    if not path.exists():
        return False
    text = path.read_text(encoding="utf-8")
    original = text
    for pattern, replacement in replacers:
        text = re.sub(pattern, replacement, text)
    if text != original:
        path.write_text(text, encoding="utf-8")
        return True
    return False


def main():
    version = get_version()
    print(f"[*] Menyelaraskan berkas website ke versi rilis: v{version}")
    checksums = get_checksums(version)
    if checksums:
        print(f"[*] Checksum ditemukan: {len(checksums)} berkas terdeteksi.")
    else:
        print("[*] Info: SHA256SUMS.txt tidak ditemukan; mempertahankan hash yang sudah ada.")

    updated_count = 0

    # 1. Update website/download.html
    dl_replacers = [
        (r'RAZ Download Manager v1\.\d+\.\d+', f'RAZ Download Manager v{version}'),
        (r'Versi 1\.\d+\.\d+ •', f'Versi {version} •'),
        (r'Download v1\.\d+\.\d+', f'Download v{version}'),
        (r'v1\.\d+\.\d+/RAZDownloadManager-1\.\d+\.\d+-setup\.exe', f'v{version}/RAZDownloadManager-{version}-setup.exe'),
        (r'v1\.\d+\.\d+/RAZDownloadManager-1\.\d+\.\d+-portable\.zip', f'v{version}/RAZDownloadManager-{version}-portable.zip'),
        (r'v1\.\d+\.\d+/RAZDownloadManager-1\.\d+\.\d+-x64\.zip', f'v{version}/RAZDownloadManager-{version}-x64.zip'),
        (r'RAZDownloadManager-1\.\d+\.\d+-setup\.exe', f'RAZDownloadManager-{version}-setup.exe'),
        (r'RAZDownloadManager-1\.\d+\.\d+-portable\.zip', f'RAZDownloadManager-{version}-portable.zip'),
        (r'RAZDownloadManager-1\.\d+\.\d+-x64\.zip', f'RAZDownloadManager-{version}-x64.zip'),
        (r'Checksum SHA-256 \(v1\.\d+\.\d+\)', f'Checksum SHA-256 (v{version})'),
    ]
    if "setup" in checksums:
        dl_replacers.append((r'data-hash="[a-f0-9]{64}"(\s*>.*?Donlot Installer)', f'data-hash="{checksums["setup"]}"\\1'))
    if update_file(WEBSITE / "download.html", dl_replacers):
        print(f"  [+] website/download.html dimutakhirkan.")
        updated_count += 1

    # 2. Update website/index.html
    idx_replacers = [
        (r'"softwareVersion":\s*"1\.\d+\.\d+"', f'"softwareVersion": "{version}"'),
        (r'Donlot Installer \(v1\.\d+\.\d+\)', f'Donlot Installer (v{version})'),
        (r'Versi 1\.\d+\.\d+ Resmi', f'Versi {version} Resmi'),
        (r'v1\.\d+\.\d+/RAZDownloadManager-1\.\d+\.\d+-setup\.exe', f'v{version}/RAZDownloadManager-{version}-setup.exe'),
        (r'v1\.\d+\.\d+/RAZDownloadManager-1\.\d+\.\d+-portable\.zip', f'v{version}/RAZDownloadManager-{version}-portable.zip'),
        (r'v1\.\d+\.\d+/RAZDownloadManager-1\.\d+\.\d+-x64\.zip', f'v{version}/RAZDownloadManager-{version}-x64.zip'),
    ]
    if update_file(WEBSITE / "index.html", idx_replacers):
        print(f"  [+] website/index.html dimutakhirkan.")
        updated_count += 1

    # 3. Update website/js/RAZMainLang.js
    lang_replacers = [
        (r"'hero-btn-download':\s*'Donlot Installer \(v1\.\d+\.\d+\)'", f"'hero-btn-download': 'Donlot Installer (v{version})'"),
        (r"'hero-btn-download':\s*'Download Installer \(v1\.\d+\.\d+\)'", f"'hero-btn-download': 'Download Installer (v{version})'"),
        (r"'dl-title-2':\s*'Versi 1\.\d+\.\d+ Resmi'", f"'dl-title-2': 'Versi {version} Resmi'"),
        (r"'dl-title-2':\s*'Official Version 1\.\d+\.\d+'", f"'dl-title-2': 'Official Version {version}'"),
    ]
    if update_file(WEBSITE / "js" / "RAZMainLang.js", lang_replacers):
        print(f"  [+] website/js/RAZMainLang.js dimutakhirkan.")
        updated_count += 1

    # 4. Update halaman pendukung (benchmark, idm-alternative, faq, security, help)
    for doc in ["benchmark.html", "idm-alternative.html"]:
        doc_path = WEBSITE / doc
        replacers = [
            (r'Download v1\.\d+\.\d+', f'Download v{version}'),
            (r'Versi:\s*1\.\d+\.\d+', f'Versi: {version}'),
        ]
        if update_file(doc_path, replacers):
            print(f"  [+] website/{doc} dimutakhirkan.")
            updated_count += 1

    for faq in [WEBSITE / "faq.html", WEBSITE / "faq" / "index.html"]:
        replacers = [(r'Donlot v1\.\d+\.\d+ Resmi', f'Donlot v{version} Resmi')]
        if update_file(faq, replacers):
            print(f"  [+] {faq.relative_to(ROOT)} dimutakhirkan.")
            updated_count += 1

    sec = WEBSITE / "security.html"
    sec_replacers = [
        (r'Versi:\s*1\.\d+\.\d+', f'Versi: {version}'),
        (r'RAZDownloadManager-1\.\d+\.\d+-setup\.exe', f'RAZDownloadManager-{version}-setup.exe'),
    ]
    if update_file(sec, sec_replacers):
        print(f"  [+] website/security.html dimutakhirkan.")
        updated_count += 1

    for hlp in [WEBSITE / "help.html", WEBSITE / "help" / "index.html"]:
        hlp_replacers = [
            (r'informasi versi 1\.\d+\.\d+', f'informasi versi {version}'),
            (r'Versi:\s*1\.\d+\.\d+', f'Versi: {version}'),
        ]
        if update_file(hlp, hlp_replacers):
            print(f"  [+] {hlp.relative_to(ROOT)} dimutakhirkan.")
            updated_count += 1

    print(f"[✓] Sinkronisasi selesai: {updated_count} berkas disesuaikan.")


if __name__ == "__main__":
    main()
