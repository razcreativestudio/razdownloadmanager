# RAZ Download Manager — Log Implementasi Bertahap
Dokumen ini mencatat setiap detail perubahan kode, refactoring, dan langkah implementasi teknis.

---

## Tahap 1: Setup Workspace & Dokumen Arsitektur
* **Status**: Selesai
* **Waktu**: 2026-11-10 12:13 WIB
* **Deskripsi**:
  - Direktori `backup/` dibuat untuk pengamanan file sebelum dimodifikasi.
  - 5 dokumen arsitektur standar RAZ dibuat: `RAZProjectPlan.md`, `RAZProjectStructure.md`, `RAZGuide.md`, `RAZUpdateHistory.md`, dan `RAZImplementation.md`.

---

## Tahap 2: Rebranding Binary & Cargo Manifests
* **Status**: Selesai
* **Waktu**: 2026-11-10 12:20 WIB
* **Target File**:
  - `Cargo.toml`
  - `crates/app/Cargo.toml`
  - `crates/cli/Cargo.toml`
  - `crates/nmhost/Cargo.toml`
  - `crates/mcp/Cargo.toml`
  - `crates/debrid/Cargo.toml`
  - `crates/remote/Cargo.toml`
  - `crates/torrent/Cargo.toml`
  - `crates/tools/Cargo.toml`
* **Langkah Teknis**:
  - Seluruh file asli dicadangkan ke `backup/`.
  - Mengubah target binary:
    - `crates/app`: `razdownloadmanager`
    - `crates/cli`: `razdownloadmanager-cli`
    - `crates/nmhost`: `razdownloadmanager-nmhost`
    - `crates/mcp`: `razdownloadmanager-mcp`
  - Menyesuaikan metadata deskripsi paket dan authors.

---

## Tahap 3: Rebranding Core Crates & Komunikasi IPC
* **Status**: Selesai
* **Waktu**: 2026-11-10 12:35 WIB
* **Target File**:
  - `crates/ipc/src/lib.rs` (Migrasi folder data dari `%APPDATA%\misterdownloadmanager` ke `%APPDATA%\razdownloadmanager`, dukungan env `RAZ_DATA_DIR`).
  - `crates/ipc/src/browsers.rs` (`HOST_MANIFEST = "com.razdownloadmanager.host.json"`).
  - `crates/ipc/src/extension.rs` (`FIREFOX_ID = "integration@razdownloadmanager.com"`).
  - `crates/nmhost/src/main.rs` (`HOST_NAME = "com.razdownloadmanager.host"`, pemanggilan binary `razdownloadmanager.exe`).
  - `crates/tools/src/lib.rs` & `gallery.rs`: User-Agent diperbarui ke `RAZDownloadManager/x.y`.
  - `crates/torrent/src/lib.rs`: Identitas klien torrent diperbarui ke `RAZDownloadManager/x.y`.
  - `crates/debrid/src/lib.rs`: User-Agent diperbarui.
  - `crates/mcp/src/lib.rs` & `crates/mcp/src/main.rs`: Nama server MCP dan instruksi AI diperbarui ke `razdownloadmanager`.

---

## Tahap 4: Rebranding Desktop GUI & Platform Integration
* **Status**: Selesai
* **Waktu**: 2026-11-10 12:45 WIB
* **Target File**:
  - `crates/app/src/main.rs`: `MAIN_TITLE = "RAZ Download Manager <ver>"`, `renderer::run("razdownloadmanager", ...)`.
  - `crates/app/src/crashui.rs`: Judul dan string dialog crash report diupdate ke RAZ Download Manager.
  - `crates/app/src/help.rs`: URL repositori, domain situs (`razdownloadmanager.com`), dan dialog About disesuaikan.
  - `crates/app/src/extension.rs`: Helper exe diarahkan ke `razdownloadmanager-nmhost.exe`.
  - `crates/app/src/app.rs`: Seluruh label menu dialog dan context menu diselaraskan.
  - `crates/app/src/secrets.rs`: Nama Credential Manager target disesuaikan menjadi `"RAZ Download Manager"`.
  - `crates/app/src/win32.rs`: Registry key HKCU/HKLM `com.razdownloadmanager.host`, ProgID torrent, dan mutex `RAZDownloadManager.Running`.
  - `crates/app/src/unix.rs`: Desktop autostart `razdownloadmanager.desktop` dan launch agent macOS disesuaikan.
  - `crates/app/build.rs`: Metadata Windows Resource (.exe ProductName & FileDescription) diupdate.

---

## Tahap 5: Rebranding Browser Extension
* **Status**: Selesai
* **Waktu**: 2026-11-10 12:48 WIB
* **Target File**:
  - `extension/manifest.firefox.json` (ID gecko disesuaikan ke `integration@razdownloadmanager.com`).
  - `extension/background.js` (HOST dihubungkan ke `com.razdownloadmanager.host`).
  - `extension/popup.html` & `popup.js`: Label antarmuka popup browser diperbarui.
  - `extension/video.js`: Notifikasi tombol unduhan video disesuaikan.
  - `extension/_locales/*/messages.json`: Seluruh 50+ bahasa terjemahan ekstensi diperbarui dari "Mister Download Manager" ke "RAZ Download Manager".

---

## Tahap 6: Rebranding Kamus Bahasa & Dokumentasi
* **Status**: Selesai
* **Waktu**: 2026-11-10 13:00 WIB
* **Target File**:
  - `i18n/*.tsv`: Seluruh 86 file kamus bahasa aplikasi desktop diperbarui.
  - `README.md`, `PRODUCT.md`, `DESIGN.md`, `CLAUDE.md`.
  - `website/` (HTML, CSS, JS, Markdown).
  - `tools/installer/mdm.iss` & `tools/installer/languages/*.isl`: Skrip installer Inno Setup Windows disesuaikan untuk menghasilkan `RAZDownloadManager-<ver>-setup.exe`.

---

## Tahap 7: Kompilasi Binary Release & Build Installer Windows
* **Status**: Selesai
* **Waktu**: 2026-11-11 11:17 WIB
* **Target**:
  - Toolchain: Rust `stable-x86_64-pc-windows-msvc` (1.99.1) & Inno Setup 6 (`ISCC.exe` 6.7.1).
  - Binary release: `RAZDownloadManager.exe`, `RAZDownloadManager-nmhost.exe`, `RAZDownloadManager-cli.exe`, `RAZDownloadManager-mcp.exe`.
  - Paket installer: `RAZDownloadManager-1.0.0-setup.exe`.
  - Paket portabel & zip: `RAZDownloadManager-1.0.0-portable.zip`, `RAZDownloadManager-1.0.0-x64.zip`.
* **Hasil Output (`target/dist/`)**:
  - `RAZDownloadManager-1.0.0-setup.exe` (16,3 MB)
  - `RAZDownloadManager-1.0.0-portable.zip` (18,6 MB)
  - `RAZDownloadManager-1.0.0-x64.zip` (18,6 MB)
  - `SHA256SUMS.txt` (termasuk verifikasi hash sha256).
* **Validasi**:
  - CLI binary test (`RAZDownloadManager-cli.exe --help`) berfungsi normal.

---

## Tahap 8: Refactoring Identifier 'mdm' ke 'razdm' & Installer Baru
* **Status**: Selesai
* **Waktu**: 2026-11-11 11:53 WIB
* **Target File & Aksi**:
  - `crates/app/assets/icons/app/`: dibuat salinan icon berawalan `razdm-*.png` dan `razdm.ico`.
  - `crates/app/build.rs`: referensi icon executable Windows dialihkan ke `razdm.ico`.
  - `crates/app/src/main.rs`, `app.rs`, `winui.rs`, `help.rs`, `remote/src/http.rs`: pemanggilan icon dialihkan ke `razdm-*.png`.
  - `crates/engine/src/naming.rs` & `state.rs`: format part file diubah ke `.razdm.part` dan `.razdm.json` dengan auto-migration backward compatibility untuk file lama `.mdm.*`.
  - `crates/cli/src/lib.rs`: petunjuk perintah resume diupdate ke `.razdm.json`.
  - `extension/background.js`: context menu ID diubah ke `razdm-link`, `razdm-selected`, `razdm-all`.
  - `extension/video.js`: komponen web button diubah ke `<razdm-video-button>`, global state diubah ke `__razdmVideoButton`.
  - `extension/page.js`: global state diubah ke `__razdmPage`.
  - `crates/remote/web/app.js`: local storage auth token diubah ke `razdm-token`.
  - `crates/crash/src/logs.rs` & `crates/nmhost/src/main.rs`: log file diubah menjadi `razdm.log`.
  - `tools/installer/razdm.iss` & `build.ps1`: skrip installer Inno Setup diselaraskan.
  - `Cargo.toml`: optimasi `lto = "thin"` untuk stabilitas memori compiler Windows.

---

## Tahap 9: Penggantian Total Logo, Icon, dan Favicon dari `razdm-logo.svg`
* **Status**: Selesai
* **Waktu**: 2026-11-11 12:10 WIB
* **Sumber**: `website/razdm-logo.svg`
* **Aset yang Dihasilkan**:
  - `crates/app/assets/icons/app/`: `razdm-16.png` s.d `razdm-256.png` dan `razdm.ico` multi-layer.
  - `website/`: `favicon.ico`, `assets/favicon-32.png`, `assets/apple-touch-icon.png`, `assets/logo-64.png`, `assets/logo-256.webp`, `assets/logo-640.png`.
  - `docs/images/logo.png`.
  - `extension/icons/`: `icon-16.png`, `icon-32.png`, `icon-48.png`, `icon-128.png`.
* **Kompilasi Ulang Installer di `target/dist/`**:
  - `RAZDownloadManager-1.0.0-setup.exe` (16,0 MB)
  - `RAZDownloadManager-1.0.0-portable.zip` (18,7 MB)
  - `RAZDownloadManager-1.0.0-x64.zip` (18,7 MB)
  - `SHA256SUMS.txt`

---

## Tahap 10: Pembaruan Domain dm.it-raz.com, GitHub Remote, & Rancang Bangun Website Baru (Standar webraz)
* **Status**: Selesai
* **Waktu**: 2026-11-11 12:35 WIB
* **Target & Perubahan**:
  - **Git Remote & Codebase Links**:
    - Git remote origin dialihkan ke `https://github.com/razcreativestudio/razdownloadmanager.git`.
    - Domain resmi dialihkan dari `razdownloadmanager.com` ke `https://dm.it-raz.com` di seluruh crates (`crates/app/src/help.rs`, `crates/ipc/src/api.rs`, `crates/mcp/src/main.rs`, `crates/tools/src/gallery.rs`, `tools/website/build.py`).
  - **Arsitektur & Style Website Baru (`website/`)**:
    - Mengadopsi standar visual luxury dark & gold, responsive typography (`Inter` + `Poppins`), dan komponen interaktif dari website `C:\laragon\www\webraz\webraz`.
    - Modul CSS Baru (`website/css/`):
      - `style.css`: Variabel CSS, glassmorphism token, tombol CTA, navigasi, dan footer.
      - `RAZHero.css`: Interactive particle network grid, floating tech badges.
      - `RAZMainAnimations.css`: Shimmer text effect, reveal animations.
      - `RAZMainTheme.css` & `RAZDM.css`: Sistem tema adaptif (Dark/Light mode).
      - `RAZModal.css`: Dialog modal kustom & notifikasi toast (Anti-Native Alert).
    - Modul JavaScript Baru (`website/js/`):
      - `RAZModal.js`: Custom modal engine & toast notifications.
      - `RAZMainLang.js`: Sistem bilingual (ID/EN) dengan tone modern tech-savvy & ramah awam.
      - `script.js`: Splash screen loader, tema switcher, live canvas, benchmark simulator, app tour showcase, dan FAQ accordion.
  - **Halaman Website Lengkap**:
    - `website/index.html`: Landing page utama dengan hero canvas, live race simulator, app tour, feature matrix, perbandingan vs IDM, pusat unduhan, dan FAQ.
    - `website/download.html`: Pusat unduhan installer .exe, portable .zip, x64 .zip, panduan 3 langkah, dan daftar checksum SHA-256.
    - `website/benchmark.html`: Laporan benchmark saintifik RAZ DM vs IDM 6.42, analisis 3 skenario, dan metodologi pengujian.
    - `website/idm-alternative.html`: Analisis mendalam perbandingan vs IDM, eliminasi pop-up lisensi palsu/trial, dan panduan migrasi antrean download.
    - `website/404.html`: Halaman error 404 premium.

