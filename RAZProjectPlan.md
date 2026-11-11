# RAZ Download Manager — Master Project Plan
**Tanggal**: 10 November 2026  
**Status**: Selesai (Rebranding Completed)  
**Versi Target**: 1.0.0 (RAZ Edition)

---

## 1. Visi & Tujuan Proyek
Mentransformasikan seluruh ekosistem *Mister Download Manager* (MDM) menjadi **RAZ Download Manager** (RAZ DM). Perubahan mencakup rebranding total pada identitas visual, penamaan binary, manifest extension browser, native messaging host, direktori konfigurasi sistem, string antarmuka, serta dokumentasi standar enterprise RAZ.

---

## 2. Rencana Tahapan Eksekusi (Roadmap)

### Fase 1: Inisialisasi & Setup Standar RAZ
- [x] Inisialisasi repositori dan konfigurasi workspace.
- [x] Pembuatan sistem backup terpusat di folder `backup/`.
- [x] Pembuatan dokumen inti: `RAZProjectPlan.md`, `RAZProjectStructure.md`, `RAZGuide.md`, `RAZUpdateHistory.md`, dan `RAZImplementation.md`.

### Fase 2: Rebranding Konfigurasi & Nama Binary (Cargo & Build)
- [x] Backup dan perbarui `Cargo.toml` root (metadata, workspace descriptions).
- [x] Backup dan perbarui `crates/app/Cargo.toml`:
  - Ubah nama binary dari `misterdownloadmanager` -> `razdownloadmanager`.
  - Ubah deskripsi aplikasi.
- [x] Backup dan perbarui `crates/cli/Cargo.toml`:
  - Ubah nama binary dari `misterdownloadmanager-cli` -> `razdownloadmanager-cli`.
- [x] Backup dan perbarui `crates/nmhost/Cargo.toml`:
  - Ubah nama binary dari `misterdownloadmanager-nmhost` -> `razdownloadmanager-nmhost`.
- [x] Backup dan perbarui `crates/mcp/Cargo.toml`:
  - Ubah nama binary dari `misterdownloadmanager-mcp` -> `razdownloadmanager-mcp`.

### Fase 3: Integrasi Sistem & Native Messaging Host
- [x] Pembaruan ID host browser: `com.misterdownloadmanager.host` -> `com.razdownloadmanager.host`.
- [x] Pembaruan path konfigurasi sistem (%APPDATA%, ~/.config): `misterdownloadmanager` -> `razdownloadmanager` (disertai migrasi otomatis jika ada data lama).
- [x] Penyesuaian kode native messaging di `crates/nmhost` dan integrasi platform di `crates/app/src/windows.rs` serta `crates/app/src/unix.rs`.
- [x] Penyesuaian User-Agent default: `MisterDownloadManager/x.y` -> `RAZDownloadManager/x.y`.

### Fase 4: Rebranding Browser Extension
- [x] Backup dan perbarui `extension/manifest.json`, `extension/manifest.firefox.json`, `extension/manifest.safari.json`.
- [x] Update koneksi native host di `extension/background.js`.
- [x] Update string dan pesan di seluruh bahasa `extension/_locales/*/messages.json`.
- [x] Update judul popup dan tampilan antarmuka extension.

### Fase 5: Rebranding UI Desktop & Transkrip Bahasa
- [x] Penyesuaian judul window dan teks dialog di `crates/app/src/main.rs`, `crates/app/src/app.rs`, `crates/app/src/chrome.rs`.
- [x] Pembaruan string terjemahan utama di `i18n/*.tsv` (86 bahasa).
- [x] Penyesuaian link bantuan dan update (`help.rs`).

### Fase 6: Sinkronisasi Dokumentasi & Installer
- [x] Pembaruan `README.md` sebagai *Single Source of Truth*.
- [x] Pembaruan skrip installer Inno Setup Windows (`tools/installer/mdm.iss`).
- [x] Pencatatan lengkap di `RAZUpdateHistory.md` dan `RAZImplementation.md`.
- [x] Validasi kebersihan workspace dan integritas kode.

### Fase 7: Build & Rilis Windows Installer
- [x] Penyiapan toolchain Rust (`stable-x86_64-pc-windows-msvc`) & Inno Setup 6 (`ISCC.exe`).
- [x] Penyelarasan binary naming Windows (`RAZDownloadManager.exe`, `RAZDownloadManager-nmhost.exe`, `RAZDownloadManager-cli.exe`, `RAZDownloadManager-mcp.exe`).
- [x] Eksekusi pipeline `tools/installer/build.ps1` berhasil 100%.
- [x] Verifikasi artefak distribusi di `target/dist/` (Setup Installer `.exe`, Portable `.zip`, x64 `.zip`, dan `SHA256SUMS.txt`).

### Fase 8: Refactoring Lanjutan 'mdm' ke 'razdm'
- [x] Penyelarasan naming asset icons: `razdm-*.png` dan `razdm.ico`.
- [x] Refactoring ekstensi part/state: `.razdm.part` dan `.razdm.json` disertai auto-migration.
- [x] Refactoring browser extension & web remote property: `razdm-link`, `__razdmPage`, `<razdm-video-button>`.
- [x] Penyelarasan skrip Inno Setup `tools/installer/razdm.iss` dan packaging extension `razdm-*.zip`.

### Fase 9: Transformasi Visual Logo, Icon, dan Favicon dari `razdm-logo.svg`
- [x] Rasterisasi multi-resolusi master logo `website/razdm-logo.svg` ke seluruh hierarki icon aplikasi desktop (16px hingga 256px + multi-layer `.ico`).
- [x] Penyelarasan favicon web (`website/favicon.ico`, `favicon-32.png`, `apple-touch-icon.png`, `logo-*.png/webp`).
- [x] Rebuild installer final v1.0.0 di `target/dist/`.

### Fase 10: Rancang Bangun Website Baru dm.it-raz.com (Standar Visual webraz)
- [x] Konfigurasi remote Git origin ke `https://github.com/razcreativestudio/razdownloadmanager.git`.
- [x] Sinkronisasi domain resmi ke `https://dm.it-raz.com`.
- [x] Adopsi token desain, style, tema Dark/Light, dan komponen interaktif `C:\laragon\www\webraz\webraz` (`css/style.css`, `RAZHero.css`, `RAZMainTheme.css`, `RAZModal.css`, `RAZDM.css`).
- [x] Integrasi modul JS `RAZModal.js` (Anti-Native Alert), `RAZMainLang.js` (Bilingual ID/EN), dan `script.js` (Live Benchmark Race Simulator & App Tour).
- [x] Pembuatan landing page `website/index.html`, `download.html`, `benchmark.html`, `idm-alternative.html`, dan `404.html`.

