# RAZ Download Manager — Panduan Penggunaan & Setup (Guide)
**Tanggal**: 10 November 2026  
**Versi**: 1.0.0 (RAZ Edition)

---

## 1. Pengenalan
**RAZ Download Manager** adalah aplikasi pengelola unduhan (Download Manager) modern, cepat, dan ringan berbasis Rust. Aplikasi ini dilengkapi dengan dukungan multi-koneksi paralel, integrasi browser otomatis via Native Messaging, dukungan BitTorrent, remote control nirkabel, dan integrasi AI melalui Model Context Protocol (MCP).

---

## 2. Persyaratan Sistem
* **Sistem Operasi**: Windows 10/11 (64-bit), Linux (x86_64 / aarch64), macOS 11+.
* **Perangkat Lunak Tambahan (untuk Developer)**:
  * Rust Toolchain (1.80+ atau edisi 2024).
  * Node.js & npm (untuk build ekstensi browser & website).
  * Git.

---

## 3. Komponen Binary Utama
Setelah dibuild, proyek ini menghasilkan binary berikut:
1. `razdownloadmanager.exe`: Aplikasi desktop utama (GUI).
2. `razdownloadmanager-cli.exe`: Perintah baris (CLI) untuk server, otomasi, atau skrip tanpa antarmuka grafis.
3. `razdownloadmanager-nmhost.exe`: Host perantara antara browser Chrome/Edge/Firefox dan aplikasi desktop.
4. `razdownloadmanager-mcp.exe`: Server Model Context Protocol untuk integrasi dengan asisten AI.

---

## 4. Lokasi Penyimpanan Data
* **Windows**: `%APPDATA%\razdownloadmanager\`
  * `downloads.json`: Daftar unduhan dan statusnya.
  * `config.toml`: Preferensi pengguna dan pengaturan jaringan.
  * `crash.log`: Log sistem jika terjadi masalah.
* **Linux**: `~/.config/razdownloadmanager/`
* **macOS**: `~/Library/Application Support/razdownloadmanager/`

---

## 5. Cara Instalasi Ekstensi Browser
1. Buka halaman ekstensi di browser berbasis Chromium (Google Chrome, Microsoft Edge, Brave) melalui `chrome://extensions/`.
2. Aktifkan **Developer mode** di pojok kanan atas.
3. Klik **Load unpacked** dan pilih folder `extension/` di dalam direktori proyek ini.
4. Pastikan aplikasi desktop `razdownloadmanager.exe` sudah berjalan atau host native messaging telah didaftarkan.
