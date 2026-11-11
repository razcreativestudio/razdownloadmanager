# RAZ Download Manager — Update History
Dokumentasi riwayat pembaruan dan perubahan harian proyek RAZ Download Manager.

---

## [2026-11-11] — Ikon Tombol Tema RAZ Studio & Katalog "Bahasa Indo Oke"
*Waktu: 11 November 2026 15:58 WIB*

### Aktivitas & Pembaruan:
1. **Perancangan & Pembuatan Ikon Khusus Tema RAZ Creative Studio**:
   - `crates/app/src/icons.rs`:
     - Menambahkan fungsi gradasi warna khusus `raz_gradient()` untuk seluruh tombol toolbar dan ikon opsi:
       - **Add URL**: Emas bercahaya signature RAZ (`#FFF59D` $\rightarrow$ `#FFD700`).
       - **Add Torrent**: Amber emas mewah (`#FFE082` $\rightarrow$ `#FFB300`).
       - **Resume**: Emerald neon modern dinamis (`#A7FFEB` $\rightarrow$ `#00E676`).
       - **Stop**: Coral ruby elegan (`#FF8A80` $\rightarrow$ `#FF5252`).
       - **Stop All**: Sunset coral tegas (`#FFAB91` $\rightarrow$ `#FF6E40`).
       - **Delete**: Ruby crimson (`#FF8A80` $\rightarrow$ `#E53935`).
       - **Delete Completed**: Emas champagne dengan centang sukses (`#FFE082` $\rightarrow$ `#FFB300`).
       - **Options**: Platinum gold gear (`#FFF8E1` $\rightarrow$ `#FFD700`).
       - **Scheduler**: Jam alarm emas mewah (`#FFE082` $\rightarrow$ `#FFA000`).
       - **Start Queue**: Antrean cyan cyber modern (`#80E8FF` $\rightarrow$ `#00B4D8`).
       - **Stop Queue**: Burnt coral queue (`#FFAB91` $\rightarrow$ `#E64A19`).
       - **Drag Handle (DragOut)**: Emas murni berkilau (`#FFF59D` $\rightarrow$ `#FFD700`).
       - Seluruh ikon halaman opsi dan helper dialog diselaraskan dengan palet emas RAZ.
     - Mengatur `Icon::stops()` dan `Icon::image()` agar tema `raz` selalu menggunakan set ikon signature ini secara native.
   - `crates/app/src/themeicons.rs`:
     - Mengatur pewarnaan ikon kategori bilah sisi (sidebar: `cat-all`, `cat-compressed`, `cat-documents`, `cat-music`, `cat-programs`, `cat-video`, `cat-torrents`, `cat-unfinished`, `cat-finished`, `cat-queues`) agar diwarnai dengan aksen emas signature (`c.accent`, `#FFD700`).
   - `crates/app/assets/themes/raz.toml`:
     - Mengintegrasikan `icon-set = "metro"` untuk mengganti ikon Silk XP lama menjadi ikon vektor modern yang tajam dan presisi.

2. **Katalog Bahasa Baru: "Bahasa Indo Oke" (`i18n/id-oke.tsv`)**:
   - Membuat katalog bahasa baru `id-oke.tsv` dengan gaya copywriting santai, tech-savvy, dan bersahabat ala website resmi RAZ Creative Studio:
     - Menggunakan kata ganti dan kosakata kasual-modern: "lo", "gue", "gaskeun", "ngunduh", "lanjutin", "stop", "kenceng", "list unduhan", dll.
     - Menjaga seluruh format placeholder parameter `{n}`, `{folder}`, dan konteks pesan tetap utuh 100%.
   - Membuat katalog pendamping `i18n/en-gb.tsv` untuk English (UK).
   - Menambahkan file bahasa installer Inno Setup: `tools/installer/languages/id-oke.isl` dan registrasi di `tools/installer/languages.iss`.

3. **Urutan Prioritas Pemilihan Bahasa (`crates/app/src/langpick.rs` & `i18n/languages.tsv`)**:
   - Mengatur daftar urutan bahasa pada jendela pemilihan bahasa (Language Picker) agar mematuhi hierarki prioritas:
     1. **Baris 1 (Teratas)**: Bahasa Indo Oke (`id-oke`) — Flag ID
     2. **Baris 2**: Bahasa Indonesia (`id`) — Flag ID
     3. **Baris 3**: English US (`en`) — Flag US
     4. **Baris 4**: Bahasa Melayu Malaysia (`ms`) — Flag MY
     5. **Baris 5**: English England / UK (`en-gb`) — Flag GB
     6. **Baris Selanjutnya**: Bahasa-bahasa dunia lainnya diurutkan secara alfabetis.
   - Berhasil lulus verifikasi kompilasi penuh `cargo check -p razdm-app`.

---

## [2026-11-11] — Kompilasi Ekstensi Browser & Implementasi Direct Download (Bebas Webstore)
*Waktu: 11 November 2026 15:15 WIB*

### Aktivitas & Pembaruan:
1. **Kompilasi Otomatis Paket Ekstensi Browser Direct**:
   - Memperbarui skrip `tools/extension/pack.ps1` agar mengompilasi dan mengemas ekstensi browser untuk Chromium dan Firefox, serta langsung mendistribusikannya ke `website/assets/extension/` dan `target/dist/`.
   - Menghasilkan dua paket rilis resmi:
     - `razdm-extension-chrome.zip` (~190 KB): Paket ekstensi Chromium untuk Google Chrome, Microsoft Edge, Brave Browser, Opera, dan Vivaldi (Manifest V3 dengan public key terdaftar).
     - `razdm-extension-firefox.xpi` (~192 KB): Paket ekstensi Gecko untuk Mozilla Firefox, Librewolf, Waterfox, Zen Browser (ID `integration@razdownloadmanager.com`).
2. **Pembaruan Logika In-App Extension (`crates/ipc/src/extension.rs`)**:
   - Mengarahkan tautan instalasi ekstensi dari Chrome Web Store dan Mozilla Add-ons langsung menuju halaman unduhan web resmi (`https://dm.it-raz.com/download.html#extension`).
   - Memastikan native messaging host (`razdm-nmhost`) tetap sinkron mengenali ID ekstensi lokal/unpacked (`oogbclbbninliongijffeeggalppliok`) dan Firefox ID.
   - Sinkronisasi dan update skema otomatis (`docs/automation-api.schema.json`).
   - Seluruh 41 unit test pada crate `razdm-ipc` lulus 100%.
3. **Pusat Unduhan Ekstensi di Website (`website/download.html` & `website/index.html`)**:
   - Menambahkan section khusus `#extension` di `website/download.html` lengkap dengan kartu unduhan direct untuk Chromium (.zip) dan Firefox (.xpi).
   - Menyediakan panduan instalasi langkah demi langkah (*step-by-step*) yang jelas dan ramah pemula:
     - Chromium: Ekstrak $\rightarrow$ `chrome://extensions` $\rightarrow$ Aktifkan *Developer mode* $\rightarrow$ Klik *Load unpacked*.
     - Firefox: Unduh $\rightarrow$ `about:addons` $\rightarrow$ Klik ikon gerigi $\rightarrow$ *Install Add-on From File...*
   - Memperbarui pill bar navigasi peramban di `website/index.html` agar langsung mengarah ke `download.html#extension`.
   - Memperbarui bagian FAQ (Q5 & A5) di HTML dan terjemahan multilingual (`website/js/RAZMainLang.js`).
4. **Verifikasi Integritas & Checksum SHA-256**:
   - `razdm-extension-chrome.zip`: `f7997dd118be24a857ea87ecd1f30f0b2bb91f2ccab97e5c728005e4e0b8f164`
   - `razdm-extension-firefox.xpi`: `03df4319e5b6f30fe62cbd208c8f7f72fb9b833ec396115108ccddb165cb49f6`
   - Sinkronisasi `target/dist/SHA256SUMS.txt` dan tombol salin checksum di halaman web.

---

## [2026-11-11] — Rancang Bangun Tema Baru "RAZ Studio" & Konfigurasi Sebagai Tema Default
*Waktu: 11 November 2026 14:24 WIB*

### Aktivitas & Pembaruan:
1. **Pembuatan Tema Resmi "RAZ Studio" (`crates/app/assets/themes/raz.toml`)**:
   - Ciri khas visual:
     - **Obsidian Dark Luxury**: Latar belakang deep charcoal navy (`#12151b`), surface elevated (`#191d24`), header (`#15181f`).
     - **RAZ Signature Gold Accent**: Aksen emas berkilau (`#FFD700`, hover `#FFE033`, pressed `#E6C200`).
     - **Tombol Mewah**: Tombol aksi utama (accent) berwarna emas elegan dengan teks obsidian kontras tinggi (`#0d0f12`), tombol reguler berbingkai halus (`#313849`).
     - **Bilah Progres Emas Radiatif**: *Segment bar* unduhan dengan gradasi 13 lapis emas berkilau (`#fff4b8` hingga `#704c00`).
     - **Varian Terang (Light Mode)**: Latar champagne mewah (`#f6f8fa`) dipadu aksen emas tembaga (`#c99700`).
2. **Konfigurasi Sebagai Tema Default Aplikasi**:
   - `crates/app/src/settings.rs`: Mengubah default `theme` dari `"classic"` menjadi `"raz"`.
   - `crates/app/src/theme.rs`: Mengatur `select()` agar saat parameter kosong atau `"raz"`, otomatis mengaktifkan `palette::raz()`.
   - `crates/app/src/palette.rs`: Mendaftarkan tema bawaan `pub fn raz() -> &'static Theme` ke dalam daftar `builtins()`.
   - `crates/app/src/app.rs`: Menempatkan opsi `RAZ Studio` pada posisi teratas di menu **View → Theme** sebagai tema utama.
3. **Kompilasi Ulang Binary & Installer**:
   - Berhasil dikompilasi dengan Inno Setup (Exit Code: 0).
   - Checksum rilis terbaru di `target/dist/`:
     - `RAZDownloadManager-1.0.0-setup.exe` (15,8 MB) — SHA-256: `525cbc03e061b09e33a7df78e511896a6933a426435078b62583d589624d7fac`
     - `RAZDownloadManager-1.0.0-portable.zip` (18,6 MB) — SHA-256: `e18f762181d9ba42aac3245c6ceb6af07529d35df95a1f8922b888d95bae2d4b`
     - `RAZDownloadManager-1.0.0-x64.zip` (18,6 MB) — SHA-256: `09a08986e00f2f626a8c452ccebdb8f62abf13dfc276253f10689017a896d9fb`
   - Sinkronisasi checksum pada halaman `website/download.html`.

---

## [2026-11-11] — Pembaruan Label "Support RAZ DM" & Rebranding Lengkap Menu / About Dialog
*Waktu: 11 November 2026 14:04 WIB*

### Aktivitas & Pembaruan:
1. **Rebranding Menu & About Dialog**:
   - Menu Help: Mengubah label `Support &MDM` menjadi `Support RAZ &DM`.
   - Dialog About: Mengubah link `Support MDM on GitHub Sponsors` menjadi `Support RAZ DM on GitHub Sponsors`.
   - Mengubah URL sponsor menuju organisasi resmi `https://github.com/razcreativestudio`.
2. **Sinkronisasi Seluruh Katalog Bahasa (86 Bahasa)**:
   - Memperbarui 86 file katalog `i18n/*.tsv` (misal Bahasa Indonesia: `Dukung RAZ &DM` & `Dukung RAZ DM di GitHub Sponsors`).
   - Memperbarui seluruh file `extension/_locales/*/messages.json` untuk teks `popup_support`.
   - Memperbarui dokumentasi petunjuk (`docs/getting-started.md`, `ROADMAP.md`, `CHANGELOG.md`, `.github/FUNDING.yml`).
3. **Kompilasi Ulang Binary & Installer Inno Setup**:
   - Kompilasi release penuh berhasil (Exit Code: 0).
   - Checksum rilis baru di `target/dist/`:
     - `RAZDownloadManager-1.0.0-setup.exe` (15,8 MB) — SHA-256: `5af76bcf64c4ddd2e3f3f2352e53970120e467dff8691227a2d8b8ffe0566208`
     - `RAZDownloadManager-1.0.0-portable.zip` (18,6 MB) — SHA-256: `41b056d17e5becc9205587c02ef9f3014f2f1f8e89ba89c8a558e214a4596535`
     - `RAZDownloadManager-1.0.0-x64.zip` (18,6 MB) — SHA-256: `72e69ea49f9c50448a775c0de852a87167f25284613a19dbd945a9a97a7a8733`
   - Sinkronisasi nilai hash SHA-256 di `website/download.html`.

---

## [2026-11-11] — Refactoring Crate Package Names (mdm-* -> razdm-*) & Rilis Bersih Installer v1.0.0
*Waktu: 11 November 2026 13:28 WIB*

### Aktivitas & Pembaruan:
1. **Refactoring Nama Seluruh Crate Workspace (`mdm-*` -> `razdm-*`)**:
   - Memperbarui atribut `[package] name` pada 14 crate `Cargo.toml` dari awalan `mdm-` menjadi `razdm-`:
     - `razdm-app`, `razdm-cli`, `razdm-crash`, `razdm-debrid`, `razdm-engine`, `razdm-extract`, `razdm-geo`, `razdm-ipc`, `razdm-labserver`, `razdm-mcp`, `razdm-nmhost`, `razdm-remote`, `razdm-tools`, `razdm-torrent`.
   - Mengatur workspace dependency aliases pada root `Cargo.toml` agar dependensi internal tetap kompatibel dan tidak memicu error kompilasi:
     - Setiap `mdm-<crate>` dan `razdm-<crate>` merujuk ke package `razdm-<crate>`.
   - Menambahkan alias import `use razdm_mcp as mdm_mcp;` pada `crates/mcp/src/main.rs` dan `use razdm_cli as mdm_cli;` pada `crates/cli/src/main.rs`.
2. **Kompilasi Rilis Terminal Bersih**:
   - Terminal kompilasi Cargo kini 100% menampilkan:
     - `Compiling razdm-app v1.0.0`
     - `Compiling razdm-nmhost v1.0.0`
     - `Compiling razdm-cli v1.0.0`
     - `Compiling razdm-mcp v1.0.0`
     - `Compiling razdm-ipc v1.0.0`, `razdm-tools v1.0.0`, `razdm-torrent v1.0.0`, dll.
   - Tidak ada lagi jejak teks kompilasi `Compiling mdm-*`.
3. **Pembaruan Build Script Installer (`tools/installer/build.ps1`)**:
   - Mengubah target build flag: `-p razdm-app -p razdm-nmhost -p razdm-cli -p razdm-mcp`.
   - Mengatur path remapping `--remap-path-prefix=$root=razdm`.
   - Menambahkan flag pembatas thread `-j 2` untuk menjaga alokasi RAM LLVM stabil dan mencegah OOM (*Out Of Memory*).
4. **Hasil Distribusi & Installer Akhir (`target/dist/`)**:
   - `RAZDownloadManager-1.0.0-setup.exe` (15,8 MB) — SHA-256: `300d5f1e02c9e42441b7b0c454ebca9957a90f40c491886a0d06ac3d848f7d1e`
   - `RAZDownloadManager-1.0.0-portable.zip` (18,6 MB) — SHA-256: `ed5965697e82ded3459f0295361322f4a13def90fc36ccb331c9fd22a698169b`
   - `RAZDownloadManager-1.0.0-x64.zip` (18,6 MB) — SHA-256: `f38e9bff564118c3c66953525350fbeae0f1ad1c0b3563dc63a03e0d63b2ecdc`
   - SHA-256 Checksum pada halaman `website/download.html` telah diperbarui dan diverifikasi secara presisi.

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
