# RAZ Download Manager — Update History
Dokumentasi riwayat pembaruan dan perubahan harian proyek RAZ Download Manager.

---

## [2026-11-11] — Implementasi Aset Rasio 1:1 (razdm-logo11.svg) & 16:9 (razdm-logo.svg) Transparan
*Waktu: 11 November 2026*

### Aktivitas & Pembaruan:
1. **Penghapusan Background Hitam (*Transparent Logo Clean-up*)**:
   - Menghapus elemen `<rect ... fill="url(#bgGlow)">` dan `<circle ... fill="url(#centerAmbient)">` berlatar belakang gelap dari kedua master SVG:
     - `website/razdm-logo11.svg` (Rasio 1:1 Square, 1600x1600 px) -> Menghasilkan SVG transparan murni.
     - `website/razdm-logo.svg` (Rasio 16:9 Landscape, 1600x900 px) -> Menghasilkan SVG transparan murni.
2. **Pemisahan Penggunaan Rasio Aset Sesuai Standar**:
   - **Rasio 1:1 (`website/razdm-logo11.svg`)**:
     - Desktop app icon: `crates/app/assets/icons/app/razdm-*.png` (16, 20, 24, 32, 48, 64, 128, 256 px) & `razdm.ico` multi-layer.
     - Browser extension icons: `extension/icons/icon-*.png` (16, 32, 48, 128 px).
     - Website favicons & web app icons: `website/favicon.ico`, `website/assets/favicon-32.png`, `apple-touch-icon.png`, `logo-64.png`, `logo-256.webp`.
     - Dokumentasi: `docs/images/logo.png`.
     - Website Splash Screen Loader & Benchmark Lane: `website/img/raz-logo11.svg`.
   - **Rasio 16:9 (`website/razdm-logo.svg`)**:
     - Navbar header branding & footer: `website/img/raz-logo.svg`.
     - Social share & OpenGraph: `website/assets/logo-640.png`, `website/assets/social.png`.
3. **Kompilasi Ulang Binary & Installer Windows**:
   - Menjalankan pipeline kompilasi release dengan resource icon transparan baru disematkan ke binary executable.
   - Hasil installer dan distribusi baru di `target/dist/`:
     - `RAZDownloadManager-1.0.0-setup.exe` (15,8 MB) — SHA-256: `1ff247d9406e86bd6fab27b3c10cbffaf47e40e2c63a854d7e09e36275e75dea`
     - `RAZDownloadManager-1.0.0-portable.zip` (18,6 MB) — SHA-256: `207959b1e092a80708cd4b4b6941b3ab6eb8b5445155caa11955802377e3bcf2`
     - `RAZDownloadManager-1.0.0-x64.zip` (18,6 MB) — SHA-256: `317168409490b2a259ef3f5b00d900cbc9fbade122e3d5eee74da9e92526ea06`
   - Sinkronisasi nilai hash SHA-256 di `website/index.html` dan `website/download.html`.

---

## [2026-11-11] — Rilis Website Baru dm.it-raz.com & Standar Visual webraz (Dark & Gold Luxury)
*Waktu: 11 November 2026*

### Aktivitas & Pembaruan:
1. **Pembaruan Remote GitHub & Domain Resmi**:
   - Git remote origin repository dikonfigurasi ke `https://github.com/razcreativestudio/razdownloadmanager.git`.
   - Domain resmi `https://dm.it-raz.com` disinkronkan ke seluruh codebase Rust (`crates/app/src/help.rs`, `crates/ipc/src/api.rs`, `crates/mcp/src/main.rs`, `crates/tools/src/gallery.rs`, `tools/website/build.py`).
2. **Rancang Bangun Website Baru (`website/`) Mengikuti Standar `webraz`**:
   - Mengadopsi sistem tema dark/light, luxury gold accent (`#FFD700`, `--gold-gradient`), dan glassmorphism cards dari `C:\laragon\www\webraz\webraz`.
   - **Modul CSS Modular**:
     - `website/css/style.css`: Token desain, container, navigasi, typography, dan footer.
     - `website/css/RAZHero.css`: Interactive particle network grid, floating tech badges.
     - `website/css/RAZMainAnimations.css`: Animasi shimmer emas dan transisi halus.
     - `website/css/RAZMainTheme.css` & `website/css/RAZDM.css`: Override tema gelap dan terang lengkap untuk seluruh komponen download manager.
     - `website/css/RAZModal.css`: Komponen modal custom enterprise & toast notification.
   - **Modul JavaScript Interaktif**:
     - `website/js/RAZModal.js`: Custom modal dialog & toast system (mematuhi aturan 100% Anti-Native Alert).
     - `website/js/RAZMainLang.js`: Sistem bilingual ID/EN lengkap dengan gaya bahasa modern santai, tech-savvy, dan ramah awam.
     - `website/js/script.js`: Splash screen loader, theme toggle, mobile drawer menu, interactive canvas hero particle, live benchmark race simulator, app tour showcase tab switcher, FAQ accordion, dan clipboard checksum handler.
   - **Halaman Lengkap Siap Pakai**:
     - `website/index.html`: Beranda utama lengkap dengan Hero, Speed Highlight 5.4×, Live Benchmark Race vs IDM, Showcase Tour, Feature Grid, Matriks Perbandingan, Download Center, FAQ, dan Footer Ekosistem RAZ.
     - `website/download.html`: Pusat unduhan lengkap installer .exe, portable .zip, x64 .zip, petunjuk 3 langkah, dan SHA-256 hash list.
     - `website/benchmark.html`: Halaman laporan pengujian saintifik lengkap dengan analisis 3 skenario unduhan dan metodologi pengujian.
     - `website/idm-alternative.html`: Halaman edukasi perbandingan mendalam mengapa beralih dari IDM ke RAZ DM, eliminasi lisensi palsu/trial expired, dan panduan migrasi antrean.
     - `website/404.html`: Halaman 404 modern beraksen emas.

---

## [2026-11-11] — Implementasi Logo, Icon, dan Favicon Baru (razdm-logo.svg)
*Waktu: 11 November 2026*

### Aktivitas & Pembaruan:
1. **Pembuatan Aset Visual dari `website/razdm-logo.svg`**:
   - Seluruh icon, logo, dan favicon dirender langsung dari master vector SVG `website/razdm-logo.svg` menggunakan engine `resvg` dan `tiny_skia` untuk hasil rasterisasi yang tajam dan presisi tinggi.
   - **Desktop Application (`crates/app/assets/icons/app/`)**:
     - `razdm-16.png`, `razdm-20.png`, `razdm-24.png`, `razdm-32.png`, `razdm-48.png`, `razdm-64.png`, `razdm-128.png`, `razdm-256.png`.
     - Multi-resolution Windows icon `razdm.ico` (memuat semua ukuran 16px hingga 256px).
     - Salinan kompatibilitas `mdm-*.png` dan `mdm.ico` turut diselaraskan.
   - **Website & Documentation**:
     - Favicon multi-size: `website/favicon.ico` (16, 32, 48, 64 px).
     - PNG Favicon: `website/assets/favicon-32.png`.
     - Apple Touch Icon: `website/assets/apple-touch-icon.png` (256x256).
     - Website Header & Alternative Logo: `website/assets/logo-64.png`, `website/assets/logo-256.webp`, `website/assets/logo-640.png`.
     - Dokumentasi: `docs/images/logo.png`.
   - **Browser Extension (`extension/icons/`)**:
     - `icon-16.png`, `icon-32.png`, `icon-48.png`, `icon-128.png`.
     - Extension ZIP bundles dikemas ulang dengan icon baru.
2. **Kompilasi & Pembuatan Ulang Installer Windows**:
   - Menjalankan pipeline kompilasi release (`RAZDownloadManager.exe` dengan icon resource baru disematkan).
   - Inno Setup 6 berhasil mengemas installer baru di `target/dist/`:
     - `RAZDownloadManager-1.0.0-setup.exe` (16,0 MB) — SHA-256: `0949a52abbcd7bb7a0081b87162a0ebb34610f9d9787225ec429697d657d6258`
     - `RAZDownloadManager-1.0.0-portable.zip` (18,7 MB) — SHA-256: `082778ac92aaf672da111ec515153db5b523286c3eac838ae9b6fc5117e8e8af`
     - `RAZDownloadManager-1.0.0-x64.zip` (18,7 MB) — SHA-256: `c6680f296fd4c68042be6707bdb6d8a5303a2d2eac8b99f23b665df2a7bb96b4`
     - `SHA256SUMS.txt`

---

## [2026-11-11] — Refactoring Identifier 'mdm' ke 'razdm' & Pembaruan Installer
*Waktu: 11 November 2026*

### Aktivitas & Pembaruan:
1. **Refactoring Naming Asset Icon & Resource**:
   - Menambahkan dan mengalihkan seluruh asset icon dari prefix `mdm-*.png` dan `mdm.ico` menjadi `razdm-*.png` dan `razdm.ico` di `crates/app/assets/icons/app/`.
   - Mengalihkan referensi file icon executable Windows di `crates/app/build.rs` ke `assets/icons/app/razdm.ico`.
   - Mengalihkan pemanggilan icon in-app di `crates/app/src/main.rs`, `crates/app/src/app.rs`, `crates/app/src/winui.rs`, `crates/app/src/help.rs`, dan `crates/remote/src/http.rs`.
2. **Refactoring Ekstensi File Unduhan & State Resume**:
   - Mengubah suffix part file menjadi `.razdm.part` dan resume file menjadi `.razdm.json` di `crates/engine/src/naming.rs`, `crates/engine/src/state.rs`, dan `crates/cli/src/lib.rs`.
   - Menambahkan mekanisme auto-migration backward compatibility otomatis: jika ditemukan file lama `.mdm.part` atau `.mdm.json`, sistem otomatis merename menjadi `.razdm.*` sehingga unduhan lama tetap dapat dilanjutkan.
3. **Refactoring Browser Extension & Web Remote**:
   - Mengubah context menu ID di browser extension (`extension/background.js`) dari `mdm-*` ke `razdm-link`, `razdm-selected`, dan `razdm-all`.
   - Mengubah nama custom web component video sniffer (`extension/video.js`) dari `<mdm-video-button>` ke `<razdm-video-button>`.
   - Mengubah global property injection dari `__mdmPage` dan `__mdmVideoButton` menjadi `__razdmPage` dan `__razdmVideoButton`.
   - Mengubah storage token remote web dari `mdm-token` menjadi `razdm-token` di `crates/remote/web/app.js`.
4. **Refactoring Logger & Skrip Installer**:
   - Mengubah nama file log aplikasi utama dari `mdm.log` menjadi `razdm.log` di `crates/crash/src/logs.rs` dan `crates/nmhost/src/main.rs`.
   - Membuat salinan skrip installer Inno Setup beridentitas `tools/installer/razdm.iss` dan menyesuaikan `tools/installer/build.ps1`.
   - Menghasilkan bundle zip extension `razdm-chromium.zip`, `razdm-firefox.xpi`, dan `razdm-chrome-store.zip` di `tools/extension/pack.ps1`.
5. **Optimasi Build & Kompilasi Ulang Installer**:
   - Menyesuaikan profil Cargo release `lto = "thin"` untuk mengatasi memory exhaustion LLVM pada lingkungan build Windows.
   - Hasil installer dan binary baru di `target/dist/`:
     - `RAZDownloadManager-1.0.0-setup.exe` (16,1 MB)
     - `RAZDownloadManager-1.0.0-portable.zip` (18,8 MB)
     - `RAZDownloadManager-1.0.0-x64.zip` (18,8 MB)
     - `SHA256SUMS.txt`
   - Seluruh binary executable dan CLI berhasil divalidasi 100%.

---

## [2026-11-11] — Kompilasi Binary Release & Pembuatan Windows Installer
*Waktu: 11 November 2026*

### Aktivitas & Pembaruan:
1. **Penyiapan Toolchain Kompilasi**:
   - Memasang Rust toolchain stable (`stable-x86_64-pc-windows-msvc`, rustc/cargo 1.99.1) dan Inno Setup 6 (`ISCC.exe` 6.7.1) via Chocolatey package manager.
2. **Penyelarasan Naming Binary Executable Windows**:
   - Mengonfigurasi `crates/app/Cargo.toml`, `crates/nmhost/Cargo.toml`, `crates/cli/Cargo.toml`, dan `crates/mcp/Cargo.toml` agar menghasilkan nama binary PascalCase Windows yang seragam: `RAZDownloadManager.exe`, `RAZDownloadManager-nmhost.exe`, `RAZDownloadManager-cli.exe`, dan `RAZDownloadManager-mcp.exe`.
   - Menyelaraskan referensi binary launcher di `crates/app/src/extension.rs` dan `crates/nmhost/src/main.rs`.
3. **Eksekusi Pipeline Build Installer (`tools/installer/build.ps1`)**:
   - Melakukan kompilasi release seluruh workspace (`cargo build --release -p mdm-app -p mdm-nmhost -p mdm-cli -p mdm-mcp`) dengan remapping path prefix untuk build yang bersih dan reproducible.
   - Mengemas ekstensi browser untuk Chromium dan Firefox (`tools/extension/pack.ps1`).
   - Mengompilasi installer Windows Setup menggunakan Inno Setup 6 (`ISCC.exe`) dengan kompresi lzma2 ultra-64 solid.
   - Membuat paket portabel ZIP (`RAZDownloadManager-1.0.0-portable.zip`) lengkap dengan folder `data/` dan petunjuk portabel.
   - Membuat paket ZIP standalone x64 (`RAZDownloadManager-1.0.0-x64.zip`).
   - Menghasilkan daftar checksum kriptografis SHA-256 (`SHA256SUMS.txt`).
4. **Verifikasi Output di `target/dist/`**:
   - `RAZDownloadManager-1.0.0-setup.exe` (16,3 MB) — SHA256: `96fe624509c82ffa62ec2e46ed7206b1a59a02b866f57afc38dc696a7a1a9bf9`
   - `RAZDownloadManager-1.0.0-portable.zip` (18,6 MB) — SHA256: `6a88f70974fb47f562e294b3cb0c76e64fc244625c9a37b51fcbf5668d9c004f`
   - `RAZDownloadManager-1.0.0-x64.zip` (18,6 MB) — SHA256: `fe2e87cef3bd5661e3563e5be85bbeebfd6adba743febd42d52cb2b86d4f27b0`
   - Uji verifikasi CLI (`RAZDownloadManager-cli.exe --help`) berjalan sukses 100%.

---

## [2026-11-10] — Transformasi Menyeluruh ke RAZ Download Manager

### Aktivitas & Pembaruan:
1. **Repository Setup & Workspace Sync**:
   - Melakukan sinkronisasi kode sumber ke workspace lokal `RAZ Download Manager`.
   - Mengonfigurasi remote Git origin dan branch tracking `main`.
2. **Setup Standar RAZ Enterprise**:
   - Membuat direktori backup terpusat di `backup/` sesuai protokol mutlak sistem (seluruh file yang diedit telah dicadangkan).
   - Membuat 5 dokumen inti arsitektur: `RAZProjectPlan.md`, `RAZProjectStructure.md`, `RAZGuide.md`, `RAZImplementation.md`, dan `RAZUpdateHistory.md`.
3. **Rebranding Binary & Manifest Cargo**:
   - `Cargo.toml`: Versi dinaikkan ke `1.0.0`, author `RAZ Team`.
   - `crates/app`: Binary `razdownloadmanager`.
   - `crates/cli`: Binary `razdownloadmanager-cli`.
   - `crates/nmhost`: Binary `razdownloadmanager-nmhost`.
   - `crates/mcp`: Binary `razdownloadmanager-mcp`.
   - `crates/app/build.rs`: Metadata Windows Resource (.exe ProductName & FileDescription) disesuaikan.
4. **IPC & Native Messaging**:
   - ID host browser diubah ke `com.razdownloadmanager.host`.
   - Direktori data diubah ke `%APPDATA%\razdownloadmanager` dengan otomatis memigrasikan data lama jika tersedia.
   - Variabel environment override: `RAZ_DATA_DIR` (dengan fallback kompatibilitas `MDM_DATA_DIR`).
   - Identitas User-Agent di engine unduhan, torrent client, dan debrid diperbarui ke `RAZDownloadManager/<version>`.
5. **Ekstensi Browser**:
   - Firefox ID disesuaikan menjadi `integration@razdownloadmanager.com`.
   - `background.js` dihubungkan ke `com.razdownloadmanager.host`.
   - Seluruh 50+ file terjemahan `extension/_locales/*/messages.json` diperbarui ke `RAZ Download Manager`.
6. **Antarmuka Desktop & Kamus Terjemahan**:
   - Judul window utama: `RAZ Download Manager <version>`.
   - Judul crash reporter dan drop target diperbarui.
   - Menu bar, toolbar, dan dialog About diselaraskan.
   - 86 file kamus bahasa `i18n/*.tsv` telah diperbarui menyeluruh.
7. **Installer & Website**:
   - Skrip Inno Setup `tools/installer/mdm.iss` diperbarui untuk build `RAZDownloadManager-<version>-setup.exe`.
   - Halaman `website/`, panduan `docs/`, dan `README.md` disinkronkan.
