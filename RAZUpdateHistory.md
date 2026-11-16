# RAZ Download Manager — Update History
Dokumentasi riwayat pembaruan dan perubahan harian proyek RAZ Download Manager.

---

## [2026-11-16] — Pembaruan Tangkapan Layar Dialog Proses Donlot Multi-Thread (Dark & Light Mode) di Website dan README.md
*Waktu: 16 November 2026 16:50 WIB*

### Aktivitas & Pembaruan:
1. **Pembaruan Tangkapan Layar Dialog Progres Unduhan (Multi-Thread Engine)**:
   - Memproses tangkapan layar dialog proses donlotan multi-thread versi terbaru untuk kedua tema (Dark & Light) dengan rincian segmen koneksi live dan bendera server lokasi:
     - `docs/images/downloading-dark.png` & `docs/images/downloading.png` &rarr; Dialog progres donlotan tema Obsidian Dark untuk `README.md`.
     - `docs/images/downloading-light.png` &rarr; Dialog progres donlotan tema Windows Light untuk `README.md`.
     - `website/assets/screens/progress-dark.webp` & `progress-dark.png` &rarr; Aset resolusi tinggi di website.
     - `website/assets/screens/progress-light.webp` & `progress-light.png` &rarr; Aset resolusi tinggi di website.
     - `website/assets/help/catch-progress-dark.webp`, `catch-progress.webp`, `first-progress-dark.webp`, `first-progress.webp` &rarr; Aset Pusat Bantuan website & dokumentasi offline.

2. **Pembaruan Tabel Antarmuka `README.md`**:
   - Menjadikan baris `⚡ Proses & Segmen Donlot` simetris: Mode Gelap vs Mode Terang.
   - Menyandingkan `✅ Dialog Donlotan Selesai` dengan `🎬 Tombol Unduh Video di Browser`.

3. **Pembaruan Website & Pusat Bantuan (`website/help.html`, `website/index.html`, `website/js/RAZMainLang.js`)**:
   - `website/help.html`: Menampilkan dialog progres donlot multi-thread dalam grid responsif dual-mode berdampingan.
   - `website/index.html`: Menyediakan tab tur interaktif `Proses Donlot (Mode Gelap)` dan `Proses Donlot (Mode Terang)`.
   - `website/js/RAZMainLang.js`: Dukungan lokalisasi bilingual (Indonesia & Inggris).

---

## [2026-11-16] — Pembaruan Tangkapan Layar Dialog Donlot Video dari Halaman (Dark & Light Mode) di Website dan README.md
*Waktu: 16 November 2026 16:42 WIB*

### Aktivitas & Pembaruan:
1. **Pembaruan Tangkapan Layar Dialog Donlot Video (yt-dlp Engine)**:
   - Memproses tangkapan layar dialog "Donlot video dari halaman" versi terbaru untuk kedua tema (Dark & Light):
     - `docs/images/video-dark.png` &rarr; Dialog donlot video tema Obsidian Dark untuk dokumentasi `README.md`.
     - `docs/images/video-light.png` &rarr; Dialog donlot video tema Windows Light untuk dokumentasi `README.md`.
     - `website/assets/screens/video-dark.webp` & `video-dark.png` &rarr; Aset resolusi tinggi di website.
     - `website/assets/screens/video-light.webp` & `video-light.png` &rarr; Aset resolusi tinggi di website.
     - `website/assets/help/video-qualities-dark.webp` & `video-qualities.webp` &rarr; Aset Pusat Bantuan website.
     - `docs/images/help/video-qualities-dark.webp` & `video-qualities.webp` &rarr; Aset bantuan offline.

2. **Pembaruan Tabel Antarmuka `README.md`**:
   - Menambahkan baris perbandingan simetris: `🎬 Donlot Video dari Halaman (Mode Gelap)` dan `🎬 Donlot Video dari Halaman (Mode Terang)`.

3. **Pembaruan Website & Pusat Bantuan (`website/help.html`, `website/index.html`, `website/js/RAZMainLang.js`)**:
   - `website/help.html`: Menampilkan pratinjau responsif dual-mode (Dark & Light) berdampingan untuk jendela pemilihan resolusi & format video.
   - `website/index.html`: Memperbarui tab tur interaktif menjadi `Donlot Video Web (Mode Gelap)` dan menambahkan `Donlot Video Web (Mode Terang)`.
   - `website/js/RAZMainLang.js`: Menambahkan dukungan bilingual (Indonesia & Inggris) untuk kedua tab tersebut.

---

## [2026-11-16] — Pembaruan Tangkapan Layar Tombol Unduh Video Browser (Video Sniffer) di Website dan README.md
*Waktu: 16 November 2026 16:35 WIB*

### Aktivitas & Pembaruan:
1. **Pembaruan Aset Tangkapan Layar Tombol Unduh Video**:
   - Memproses tangkapan layar tombol melayang browser resmi dengan logo 3D RAZ dan label "Unduh video":
     - `docs/images/video-button.png` &rarr; Berkas PNG resolusi tajam untuk dokumentasi `README.md`.
     - `docs/images/help/video-button.webp` &rarr; Berkas WebP terkompresi optimal untuk dokumentasi offline.
     - `website/assets/help/video-button.webp` &rarr; Menggantikan gambar panduan video sniffer di pusat bantuan website (`website/help.html`).
     - `website/assets/screens/video-button.webp` & `video-button.png` &rarr; Menambah aset pratinjau tur interaktif peramban di portal web.

2. **Pembaruan Dokumentasi `README.md`**:
   - Menambahkan tangkapan layar langsung tombol unduh video di bawah poin fitur `🎬 Video Sniffer & Grabber`.
   - Menambahkan baris pratinjau antarmuka khusus `🎬 Tombol Unduh Video di Browser (Video Sniffer)` pada tabel tangkapan layar resmi.

3. **Pembaruan Halaman Bantuan & Portal Website (`website/help.html` & `website/index.html`)**:
   - Memperbarui teks deskripsi langkah 3 pada `website/help.html` agar selaras dengan tombol melayang "Unduh video" berlogo RAZ.
   - Menambahkan tab tur interaktif baru `Tombol Unduh Video Browser` di `website/index.html` lengkap dengan dukungan bilingual Indonesia & Inggris di `website/js/RAZMainLang.js`.

---

## [2026-11-16] — Pembaruan Tangkapan Layar Dialog Konfigurasi / Opsi (Dark & Light Mode) di Website dan README.md
*Waktu: 16 November 2026 16:18 WIB*

### Aktivitas & Pembaruan:
1. **Pembaruan Tangkapan Layar Dialog Konfigurasi di `README.md`**:
   - Memperbarui gambar pengaturan antarmuka ke versi paling mutakhir dengan navigasi samping modern:
     - `docs/images/settings.png` &rarr; Dialog Konfigurasi Mode Gelap (Obsidian Gold).
     - `docs/images/settings-light.png` &rarr; Dialog Konfigurasi Mode Terang (Light Mode) dengan tab amber presisi.
   - Mengatur baris tabel antarmuka `README.md` berpasangan simetris untuk Dark & Light mode.

2. **Pembaruan Aset Dialog Opsi Website (`website/assets/screens/`)**:
   - Memperbarui `options-dark.webp` dan `options-light.webp` dengan tangkapan layar beresolusi tajam.
   - Menambahkan tab preview tur interaktif di `website/index.html` untuk **Konfigurasi (Mode Gelap)** dan **Konfigurasi (Mode Terang)** serta string bilingual di `RAZMainLang.js`.

---

## [2026-11-16] — Pembaruan Tangkapan Layar Tampilan Utama (Layar Utama Dark & Light Mode Terbaru) di Website dan README.md
*Waktu: 16 November 2026 16:10 WIB*

### Aktivitas & Pembaruan:
1. **Pembaruan Tangkapan Layar Layar Utama di `README.md`**:
   - Memperbarui gambar layar utama ke versi paling mutakhir dengan daftar unduhan live dan dukungan torrent:
     - `docs/images/main-raz.png` &rarr; Layar Utama Mode Gelap (Obsidian Black & Gold) versi terbaru.
     - `docs/images/main-raz-light.png` &rarr; Layar Utama Mode Terang (Light Mode) dengan perbaikan kontras sidebar dan pill amber yang tajam.
   - Mengatur tata letak tabel antarmuka `README.md` berpasangan simetris untuk Dark & Light mode.

2. **Pembaruan Aset Layar Utama Website (`website/assets/screens/`)**:
   - Memperbarui `main-dark.webp` dan `main-light.webp` dengan tangkapan layar 1024px terbaru berkualitas tinggi.
   - Menambahkan tab preview tur interaktif di `website/index.html` untuk **Layar Utama (Mode Gelap)** dan **Layar Utama (Mode Terang)** beserta string bilingual di `RAZMainLang.js`.

---

## [2026-11-16] — Penambahan Tangkapan Layar Dialog Tambah Torrent & Proses Donlot Potongan (Dark & Light Mode)
*Waktu: 16 November 2026 15:58 WIB*

### Aktivitas & Pembaruan:
1. **Penambahan Tangkapan Layar BitTorrent di `README.md`**:
   - Menambahkan dua baris perbandingan visual khusus untuk fitur BitTorrent & Magnet Link di tabel antarmuka `README.md`:
     - `docs/images/torrent-dark.png` &rarr; Dialog Tambah Torrent dalam Mode Gelap (Obsidian Gold).
     - `docs/images/torrent-light.png` &rarr; Dialog Tambah Torrent dalam Mode Terang (Light Mode presisi tinggi).
     - `docs/images/torrent-progress-dark.png` &rarr; Proses Donlot & Visualisasi Potongan File (*Pieces*) Mode Gelap.
     - `docs/images/torrent-progress-light.png` &rarr; Proses Donlot & Visualisasi Potongan File (*Pieces*) Mode Terang.
   - Memperlihatkan fitur pemilihan folder target, penguraian magnet URI otomatis, dan seleksi centang file individual di dalam berkas torrent, serta pemantauan potongan blok data hijau live.

2. **Integrasi Tangkapan Layar BitTorrent di Beranda Website (`website/index.html` & `website/js/RAZMainLang.js`)**:
   - Menambahkan tab preview interaktif untuk **BitTorrent (Mode Gelap)** (`assets/screens/add-torrent-dark.webp`), **BitTorrent (Mode Terang)** (`assets/screens/add-torrent-light.webp`), dan **Visualisasi Potongan Torrent** (`assets/screens/torrent-progress-dark.webp`).
   - Melengkapi string multibahasa Indonesia dan Inggris di `RAZMainLang.js`.

3. **Penyempurnaan Halaman Panduan BitTorrent (`website/help.html`)**:
   - Memperbarui seksi Panduan BitTorrent & Magnet Link agar menyajikan perbandingan visual dual-mode (Dark & Light) untuk dialog penambahan file dan dialog proses pemantauan potongan blok data (*pieces*) dalam kartu grid responsif.

---

## [2026-11-16] — Perbaikan dan Peningkatan Presisi Kontras Tampilan Mode Terang (Light Theme) pada Sidebar & Tabel Utama
*Waktu: 16 November 2026 14:20 WIB*

### Aktivitas & Pembaruan:
1. **Perbaikan Kontras & Keterbacaan Teks Sidebar Kategori (`crates/app/src/chrome.rs`)**:
   - Memperbaiki bug kritis di mana teks item yang dipilih (*selected*) dan di-*hover* menggunakan `Color32::WHITE`, yang menyebabkan teks menjadi 100% tidak terlihat (putih di atas putih/abu-abu terang) saat aplikasi dialihkan ke Mode Terang (*Light Mode*).
   - Menambahkan deteksi dinamis status tema via `crate::theme::dark()`.
   - Mengatur warna teks item terpilih dan *hovered* pada Light Mode menjadi `Color32::from_rgb(15, 23, 42)` (slate-900 / hitam tegas) dan teks item unselected menjadi `Color32::from_rgb(51, 65, 85)` (slate-700 / arang kontras tinggi, lolos standar WCAG AAA rasio kontras > 7:1).
   - Mengubah warna judul seksi kategori ("PUSTAKA", "TIPE FILE", "ANTREAN") menjadi `Color32::from_rgb(71, 85, 105)` (slate-600) untuk keterbacaan yang tajam.
   - Mengatur warna lencana hitungan unduhan (*count badge*) menjadi `Color32::from_rgb(180, 83, 9)` (amber emas saat terpilih) dan `Color32::from_rgb(100, 116, 139)` (slate saat normal).

2. **Penyempurnaan Pill & Ikon Sidebar di Mode Terang**:
   - Mengganti latar belakang pill terpilih yang sebelumnya putih transparan tipis menjadi latar hangat bernuansa amber-50 `rgba(254, 243, 199, 210)` dengan border aksen amber emas `rgba(217, 119, 6, 180)`.
   - Mengatur hover pill pada Light Mode dengan tint elegan `rgba(0, 0, 0, 14)`.
   - Menyesuaikan ikon antrean (*queue*) dengan warna emas pekat `Color32::from_rgb(217, 119, 6)` agar tidak pudar di latar terang.
   - Menyesuaikan ikon unduhan selesai (*completed*) dengan warna hijau segar `Color32::from_rgb(22, 163, 74)` dan ikon belum selesai (*incomplete*) dengan `Color32::from_rgb(100, 116, 139)`.

3. **Penyelarasan Palet Tema Global (`crates/app/assets/themes/raz.toml`)**:
   - Menambahkan konfigurasi `"list.frame" = "#d0d7de"` dan `"list.grid" = "#e8ebef"` pada seksi `[light]` agar garis kisi tabel dan bingkai luar daftar unduhan tampil presisi, halus, dan bersih seperti aplikasi Windows 11 modern, menghilangkan garis abu-abu tebal yang sebelumnya kaku.
   - Menambahkan konfigurasi `"list.frame" = "#242a37"` pada seksi `[dark]` untuk konsistensi garis bingkai tema gelap obsidian.

4. **Peningkatan Kontras Dialog Opsi/Pengaturan (`crates/app/src/options.rs`)**:
   - Menambahkan penyesuaian dinamis pada navigasi samping (*sidepanel tabs*) jendela Opsi/Pengaturan, di mana pada Light Mode teks tab aktif menggunakan warna amber tua `Color32::from_rgb(180, 83, 9)` dengan pill hangat dan indikator aksen emas, serta teks tab non-aktif menggunakan slate-600 untuk kenyamanan mata pengguna.

---

## [2026-11-16] — Penyesuaian & Sinkronisasi Seluruh Tautan Menu Bantuan Desktop & Routing Website
*Waktu: 16 November 2026 13:42 WIB*

### Aktivitas & Pembaruan:
1. **Penyelarasan Menu Bantuan Aplikasi Desktop (`crates/app/src/help.rs`)**:
   - Menghilangkan kode bahasa `"id"` dari `SITE_LANGS` agar URL bantuan tidak lagi men-generate folder prefix `/id/` yang tidak perlu, melainkan langsung mengarah ke root domain resmi `https://dm.it-raz.com/help/`.
   - Memastikan seluruh pemanggilan menu bantuan dari aplikasi desktop (`Isi bantuan`, `Tutorial`, `Penjadwal dan antrean`, `Donlotan video`, `Beranda`, `Laporkan masalah`, dan `Dukung RAZ DM`) merujuk ke URL aktif yang tepat.

2. **Dukungan Kompatibilitas Biner v1.0.0 (Backward Compatibility)**:
   - Membuat file stub pengalihan (instant redirect) di direktori `website/id/` dan `website/id/help/`:
     - `website/id/index.html` &rarr; mengalihkan langsung ke `/index.html`.
     - `website/id/help/index.html` &rarr; mengalihkan langsung ke `/help.html`.
     - `website/id/help/queues-and-scheduler.html` &rarr; mengalihkan langsung ke `/help.html#scheduler`.
     - `website/id/help/video.html` &rarr; mengalihkan langsung ke `/help.html#media`.
     - `website/help/queues-and-scheduler.html` &rarr; mengalihkan langsung ke `/help.html#scheduler`.
     - `website/help/video.html` &rarr; mengalihkan langsung ke `/help.html#media`.
   - Dengan stub ini, aplikasi v1.0.0 yang sudah terpasang dan sedang berjalan di komputer pengguna dapat langsung membuka semua link menu Bantuan tanpa kendala error 404.

3. **Konfigurasi Routing LiteSpeed Server (`website/.htaccess`)**:
   - Menambahkan berkas `.htaccess` dengan aturan rewrite Apache/LiteSpeed untuk meneruskan URL `/id/help/*`, `/help/*`, dan `/faq/*` secara elegan dan mempertahankan anchor target `#hash`.

4. **Navigasi Tab Otomatis Berbasis Hash di `website/help.html`**:
   - Menambahkan event listener `hashchange` dan routing hash otomatis di `help.html` sehingga saat link dengan anchor dibuka (misal: `#scheduler` atau `#media` atau `#tutorials`), tab filter chip kategori langsung aktif dan halaman melakukan *smooth scroll* ke seksi terkait.

---

## [2026-11-16] — Pembuatan Ekosistem Halaman Lengkap Website (Help Hub, Tutorials, FAQ, Privacy, Terms, Security & License) Bergaya RAZ Enterprise
*Waktu: 16 November 2026 13:12 WIB*

### Aktivitas & Pembaruan:
1. **Pusat Bantuan & Tutorial Lengkap (`website/help.html` & `website/help/index.html`)**:
   - Membangun halaman Pusat Bantuan interaktif menggunakan tema Obsidian Dark Glassmorphism dengan aksen emas (`#FFD700`).
   - Menyertakan bilah pencarian instan (Live Client-Side Search) dan tombol filter kategori chip (Memulai, Ekstensi Browser, Video & Audio, Torrent, Penjadwal, Shortcut, Troubleshooting).
   - Menyajikan 7 panduan langkah demi langkah bergambar dengan ilustrasi tangkapan layar beresolusi tinggi di `website/assets/help/`:
     - Panduan donlot file pertama & penangkapan otomatis.
     - Cara pemasangan ekstensi browser (Chrome, Edge, Firefox, Brave, Opera, Vivaldi) via `.crx` dan `.xpi`.
     - Download video web & audio resolusi hingga 4K UHD via panel melayang (yt-dlp & FFmpeg).
     - BitTorrent & magnet link langsung tanpa software eksternal.
     - Penjadwal donlot malam hari (Night Scheduler) & auto-shutdown.
     - Melanjutkan donlotan putus (Resume) & pembaruan alamat tautan kadaluarsa (Refresh address).
     - Mode portabel mandiri di flashdisk USB.
   - Tabel pintasan tombol keyboard lengkap (`<kbd>` shortcuts) dan panduan troubleshooting (SmartScreen, ekstensi tidak tersambung, integrasi AI MCP).

2. **Halaman FAQ Dedikasi (`website/faq.html` & `website/faq/index.html`)**:
   - Menghadirkan halaman Tanya Jawab Komprehensif dengan akordeon interaktif dan bilah pencarian real-time.
   - Mengelompokkan seluruh 24+ pertanyaan penting ke dalam 5 kategori terstruktur:
     1. Fondasi & Legalitas (100% gratis GPL-3.0, bukan crack IDM, komparasi fitur, zero telemetry).
     2. Sistem & Instalasi (Windows 10/11, Linux, macOS, alasan tidak support Win 7/8, portable mode, impor data dari IDM).
     3. Integrasi Peramban (dukungan browser Chromium & Gecko, cara instalasi ekstensi, deteksi clipboard).
     4. Kecepatan & Mesin Donlot (akselerasi 64 multi-thread, dynamic re-splitting, resume, speed limiter, kepatuhan non-DRM).
     5. Otomasi & AI Assistant (Model Context Protocol MCP Server, CLI, pelaporan bug GitHub).

3. **Halaman Legal & Keamanan (`privacy.html`, `terms.html`, `security.html`, `license.html`)**:
   - **`privacy.html`**: Kebijakan privasi tegas dengan prinsip Zero-Telemetry, penyimpanan lokal (Credential Manager/Keychain), dan transparansi koneksi jaringan.
   - **`terms.html`**: Ketentuan penggunaan software bebas di bawah lisensi GNU GPL v3.0, tanggung jawab file unduhan, dan batasan garansi.
   - **`security.html`**: Standar keamanan rilis otomatis via GitHub Actions, verifikasi hash SHA-256 via PowerShell, sanitasi path traversal, dan formulir pelaporan celah keamanan privat di GitHub Security Advisories.
   - **`license.html`**: Pernyataan resmi lisensi GNU GPL-3.0 dan tabel atribusi lengkap komponen pihak ketiga (Lucide icons, Tango, yt-dlp, FFmpeg, Apache ECharts, Inter & Poppins fonts).

4. **Komponen CSS Khusus `website/css/RAZHelp.css`**:
   - Membuat modular stylesheet khusus (`RAZHelp.css`) untuk mengatur kartu tutorial, step numbers, step image wrappers, summary alert boxes, shortcut tables, kbd tags, doc layouts, dan dukungan tema terang/gelap (`data-theme`).

5. **Sinkronisasi Navigasi Header & Footer Seluruh Halaman**:
   - Memperbarui menu header navigasi dan kolom "Bantuan & Dokumentasi" pada footer di seluruh halaman (`index.html`, `download.html`, `benchmark.html`, `idm-alternative.html`, `404.html`) agar seluruh link internal saling terhubung secara mulus tanpa broken links atau dead-ends.
   - Memperbarui berkas `website/llms.txt` dengan sitemap URL resmi `dm.it-raz.com`.

---

## [2026-11-16] — Penghapusan Blok Atribusi Silsilah Proyek pada Footer Website
*Waktu: 16 November 2026 12:46 WIB*

### Aktivitas & Pembaruan:
1. **Penghapusan Elemen Footer Attribution di Website**:
   - Menghapus blok keterangan "Apresiasi & Silsilah Proyek" (`.footer-attribution`) dari seluruh halaman website (`index.html`, `download.html`, `benchmark.html`, dan `idm-alternative.html`) agar tampilan footer tetap bersih, rapi, dan berfokus penuh pada identitas produk RAZ Download Manager.
   - Dokumentasi silsilah proyek dan apresiasi kontributor tetap tersimpan rapi pada `README.md` repositori GitHub sebagai pusat dokumentasi resmi open-source.

---

## [2026-11-16] — Integrasi Tangkapan Layar Resmi v1.0.0 ke Website Tour & README.md
*Waktu: 16 November 2026 12:30 WIB*

### Aktivitas & Pembaruan:
1. **Konversi & Integrasi Tangkapan Layar Resmi v1.0.0**:
   - Memproses dan mengoptimasi 4 screenshot asli RAZ Download Manager v1.0.0 ke format PNG beresolusi tinggi dan WebP terkompresi:
     - **Tampilan Utama**: `docs/images/main-raz.png` & `website/assets/screens/main-dark.webp`
     - **Proses Donlot Live (Multi-Thread Segment)**: `docs/images/downloading.png` & `website/assets/screens/progress-dark.webp`
     - **Dialog Donlotan Selesai**: `docs/images/completed.png` & `website/assets/screens/completed-dark.webp`
     - **Konfigurasi & Pengaturan Lengkap**: `docs/images/settings.png` & `website/assets/screens/options-dark.webp`

2. **Pembaruan Galeri Pratinjau di `README.md`**:
   - Menambahkan seksi khusus `## 📸 Tangkapan Layar & Antarmuka (Preview)` di `README.md` dengan tabel galeri 2x2 yang menampilkan keempat tangkapan layar utama secara rapi dan profesional.
   - Memperbarui tabel paket donlot di `README.md` dengan menyertakan opsi paket ekstensi `razdm-extension-chrome.crx`.

3. **Pembaruan Tur Antarmuka di `website/index.html`**:
   - Menghubungkan 4 tab pratinjau antarmuka di bagian Product Tour secara langsung ke tangkapan layar baru:
     - Tab 1: **Layar Utama Modern** (default active)
     - Tab 2: **Setiap Koneksi Terpantau Live** (proses donlot segmen)
     - Tab 3: **Dialog Donlotan Selesai** (dialog aksi selesai)
     - Tab 4: **Konfigurasi & Opsi Lengkap** (dialog pengaturan sistem)
     - Tab 5 & 6: **BitTorrent & Sniffer Video Web**
   - Menambahkan dukungan lokalisasi teks tab tur di `website/js/RAZMainLang.js` (Bahasa Indo Oke & English).

---

## [2026-11-16] — Fix Layout Komparasi Tabel, 3-Kolom Grid Fitur, Card Donlot CRX & Cache-Busting CSS
*Waktu: 16 November 2026 11:45 WIB*

### Aktivitas & Pembaruan:
1. **Perbaikan Tabel Komparasi (`.compare-table`)**:
   - Memperbaiki bug di mana selector `.status-yes` dan `.status-no` memiliki `display: inline-flex;` yang merusak model rendering `display: table-cell` pada tag `<td>`, menyebabkan sel-sel kolom IDM dan RAZ menumpuk di kolom yang sama.
   - Mengembalikan `display: table-cell !important;` pada seluruh elemen `th` dan `td`, serta mengatur ikon indikator dengan `margin-right: 8px; vertical-align: middle;` sehingga tabel komparasi 4 kolom tampil presisi dan rapi.

2. **Perbaikan Grid Fitur Unggulan 3x3 (`.features-grid`)**:
   - Memperbaiki styling `.features-grid` dengan `display: grid !important; grid-template-columns: repeat(3, 1fr) !important;` baik di `RAZDM.css` maupun `style.css` agar 9 kartu fitur tampil dalam formasi 3 baris x 3 kolom yang seimbang di layar desktop dan tidak menumpuk vertikal menjadi 1 kolom lebar.

3. **Penambahan Kartu Donlot Ekstensi Chromium `.crx` Resmi**:
   - Mem-package berkas biner ekstensi resmi Chromium `razdm-extension-chrome.crx` (~198 KB) dengan SHA-256 `938bfe673f6954f557b609eb348d948f86b69bd60480639c3b2f0093197eb079` langsung ke `website/assets/extension/`.
   - Menambahkan kartu donlot `.crx` langsung di halaman `download.html`, sehingga kini tersedia 3 opsi ekstensi:
     1. **Chromium (.crx)**: Donlot file `.crx` langsung untuk drag-and-drop di Chrome/Edge/Brave/Opera.
     2. **Chromium (.zip)**: Metode *Load unpacked* resmi yang bebas dari blokir keamanan Chrome.
     3. **Firefox (.xpi)**: File `.xpi` untuk Mozilla Firefox, Zen, dan Librewolf.
   - Ketiga kartu ekstensi disusun dalam grid 3 kolom (`.download-grid.three-col`) dengan tombol donlot yang sejajar sempurna di bagian bawah.
   - Menambahkan hash `razdm-extension-chrome.crx` ke daftar checksum SHA-256.

4. **Cache-Busting Aset CSS (`?v=1.0.2`)**:
   - Menambahkan parameter versi `?v=1.0.2` pada seluruh tag `<link rel="stylesheet">` di `index.html`, `download.html`, `benchmark.html`, `idm-alternative.html`, dan `404.html` untuk memastikan browser pengguna selalu memuat CSS terbaru tanpa tertahan cache lawas.

---

## [2026-11-16] — Pembersihan Berkas Usang, Perbaikan Layout & Responsivitas Website (Header, Grid, Kartu, Ekstensi & Footer)
*Waktu: 16 November 2026 11:20 WIB*

### Aktivitas & Pembaruan:
1. **Perbaikan Breakpoint Navigasi Header & Pencegahan Teks Patah**:
   - Menambahkan breakpoint responsif `@media (max-width: 1060px)` di `website/css/style.css` untuk transisi menu hamburger desktop ke tablet/layar sempit.
   - Menambahkan aturan `white-space: nowrap;` pada `.nav-link` dan `.cta-button` agar item navigasi tidak terlipat menjadi dua baris dan tidak merusak layout header.
   - Menyelaraskan ukuran box model `.cta-primary` dengan menambahkan `border: 2px solid transparent; box-sizing: border-box; justify-content: center;` sehingga tingginya presisi 57px, identik dengan `.cta-secondary`.

2. **Perataan Grid Kartu & Pencegahan Kartu Yatim (Orphan Card)**:
   - Memperbaiki `.metric-grid` di `website/css/RAZDM.css` dari `auto-fit` tak tentu menjadi grid 4 kolom di desktop, 2x2 kolom di tablet (<=992px), dan 1 kolom di ponsel (<=520px) sehingga tidak ada kartu kecepatan yang terasing sendirian di baris kedua.
   - Menambahkan kelas khusus `.features-grid` (3x3 kolom) untuk 9 kartu fitur unggulan di `index.html` dengan proteksi rentang penuh di tablet dan stack rapi di ponsel.
   - Menambahkan kelas khusus `.download-grid.three-col` untuk kartu donlot Windows (Installer, Portable, Binaries) dan `.download-grid.two-col` untuk ekstensi peramban.
   - Menambahkan kelas `.steps-grid` pada panduan instalasi 3 langkah di `download.html`.
   - Mengatur `.dl-card { height: 100%; display: flex; flex-direction: column; }` dan `.dl-actions { margin-top: auto; }` sehingga seluruh tombol aksi dan salin checksum di baris yang sama berada di ketinggian horizontal yang presisi.

3. **Perbaikan Kontainer Tabel Komparasi & Kotak Checksum Mobile**:
   - Memperbaiki `.table-responsive` dengan `width: 100%; max-width: 100%; -webkit-overflow-scrolling: touch;` dan `.compare-table { min-width: 680px; }` agar tidak meledakkan lebar body halaman pada layar ponsel (375px).
   - Memperbaiki `.checksum-box` dengan ellipsis overflow di desktop dan tata letak vertikal fleksibel di mobile sehingga hash SHA-256 sepanjang 64 karakter tidak terpotong atau merusak padding.

4. **Penyempurnaan Penjelasan Panduan Ekstensi Browser**:
   - Menjelaskan secara transparan alasan mengapa Google Chrome/Chromium memblokir drag-and-drop langsung berkas `.crx` offline (kebijakan keamanan Web Store / `CRX_REQUIRED_PROOF_MISSING`).
   - Menyediakan panduan resmi, aman, dan jelas untuk metode **Load unpacked** menggunakan berkas `.zip` di Chromium (Chrome, Edge, Brave, Opera) dan instalasi langsung berkas `.xpi` di Firefox.
   - Memastikan tombol donlot kedua ekstensi berada di bagian bawah kartu secara simetris dan sejajar.

5. **Penerapan Istilah Bahasa Indo Oke & Atribusi Silsilah MDM di Seluruh Halaman**:
   - Mengganti seluruh sisa kata *unduh* / *unggah* yang tersisa di `website/` menjadi istilah santai kekinian: *Donlot, Ngedonlot, Donlotan, Terdonlot, Mendonlot, Aplot, Aplotan*.
   - Menambahkan blok apresiasi resmi dan atribusi silsilah (*Lineage & Open Source Attribution*) pada footer seluruh halaman (`index.html`, `download.html`, `benchmark.html`, `idm-alternative.html`) yang mengakui fondasi awal dari proyek **Mister Download Manager**, menyampaikan rasa terima kasih kepada para kontributor MDM, serta menegaskan lisensi open source GPL-3.0.

6. **Pembersihan Berkas Usang / Dead Code (Clean Workspace)**:
   - Menghapus berkas usang yang tidak terpakai dari website lama: `website/styles.css` (99 KB), `website/main.js` (33 KB), `website/bench.js`, dan `website/bench/results.json`.
   - Seluruh berkas cadangan disimpan dengan aman di folder `backup/`.

---

## [2026-11-16] — Fix Jalur Direktori FTP Auto-Deploy: Ubah Default Target ke Root `./`
*Waktu: 16 November 2026 10:20 WIB*

### Aktivitas & Pembaruan:
1. **Perbaikan Parameter `server-dir` di `.github/workflows/RAZDeployWebsite.yml`**:
   - Mengubah default `server-dir` dari `public_html/` menjadi `./`.
   - Hal ini menyelesaikan issue di mana akun FTP subdomain IDwebhost (`dm.it-raz.com`) sudah otomatis mengarah ke root foldernya sendiri saat login, sehingga penambahan `public_html/` sebelumnya menyebabkan berkas terunggah ke subfolder `dm.it-raz.com/public_html/` dan memunculkan *directory index* di root.
   - Dengan nilai `./`, seluruh berkas website langsung mendarat di root utama subdomain `https://dm.it-raz.com/`.

---

## [2026-11-16] — Pembuatan Workflow GitHub Actions Auto-Deploy Website ke IDwebhost
*Waktu: 16 November 2026 10:00 WIB*

### Aktivitas & Pembaruan:
1. **Pembuatan Workflow `.github/workflows/RAZDeployWebsite.yml`**:
   - Menambahkan alur kerja CI/CD otomatis (*GitHub Actions*) untuk menyinkronkan/mengunggah berkas di folder `website/` langsung ke server hosting IDwebhost setiap kali ada perubahan berkas (`push` ke branch `main`) atau via trigger manual (`workflow_dispatch`).
   - Menggunakan aksi standar industri `SamKirkland/FTP-Deploy-Action@v4.3.5` dengan protokol aman FTPS (FTP over TLS/SSL).
   - Menggunakan konfigurasi kredensial terenkripsi via **GitHub Repository Secrets**:
     - `IDWEBHOST_FTP_SERVER`: Alamat server FTP host IDwebhost (contoh: `ftp.domain.com` atau IP cPanel).
     - `IDWEBHOST_FTP_USERNAME`: Nama pengguna akun FTP cPanel.
     - `IDWEBHOST_FTP_PASSWORD`: Kata sandi akun FTP cPanel.
     - `IDWEBHOST_REMOTE_DIR`: Direktori target tujuan di server (opsional, default: `public_html/` atau `public_html/dm/`).
     - `IDWEBHOST_FTP_PORT`: Port koneksi FTP (opsional, default: `21`).
   - Mengaktifkan fitur *concurrency group* untuk mencegah bentrok upload jika terdapat beberapa push berurutan.

2. **Sinkronisasi Dokumen Arsitektur Proyek**:
   - Memperbarui `RAZProjectStructure.md` dengan menyertakan struktur `.github/workflows/` beserta file workflow baru.
   - Mengamankan salinan cadangan di `backup/`.

---

## [2026-11-16] — Transparansi Asal-Usul Proyek, Apresiasi Kontributor MDM, Penegasan Lisensi & Pembersihan File Usang
*Waktu: 16 November 2026 09:55 WIB*

### Aktivitas & Pembaruan:
1. **Transparansi Asal-Usul & Hubungan dengan Mister Download Manager**:
   - Menambahkan seksi khusus di `README.md` (*Dari Mister Download Manager Menuju RAZ Download Manager*) dan memperbarui `docs/README.md`.
   - Menjelaskan secara gamblang bahwa RAZ Download Manager adalah proyek evolusi dan pengembangan lanjutan (*evolutionary fork*) dari **Mister Download Manager (MDM)** yang dirintis oleh Ahmed Nefzaoui bersama komunitas open source.
   - Merinci penyempurnaan yang dibawa oleh **RAZ Creative Studio**: UI Obsidian Dark modern, sidepanel minimalis tanpa scrollbar vertikal, identitas logo baru, dukungan Bahasa Indo Oke 100%, serta ekosistem installer dan ekstensi mandiri.

2. **Penghormatan & Ucapan Terima Kasih Mendalam kepada Kontributor MDM**:
   - Menambahkan seksi penghormatan khusus (*Penghormatan & Terima Kasih Kepada Para Kontributor Mister Download Manager*).
   - Menampilkan deretan foto/avatar kontributor asli Mister Download Manager lengkap dengan tautan profil GitHub mereka sebagai bentuk apresiasi atas pondasi engine, arsitektur, dan terjemahan awal yang mereka bangun.

3. **Penegasan Ketentuan Hak Cipta & Lisensi GPL-3.0**:
   - Menyampaikan ketentuan hak cipta ganda secara transparan:
     - *Original Codebase:* Copyright © 2026 Ahmed Nefzaoui & Mister Download Manager contributors.
     - *Extended Development & UI Modernization:* Copyright © 2026 RAZ Creative Studio.
   - Menjelaskan kebebasan lisensi **GNU General Public License v3.0 (GPL-3.0)**: kebebasan menjalankan, mengkaji, memodifikasi, dan mendistribusikan ulang (dengan kewajiban copyleft kode sumber terbuka).

4. **Pembersihan Menyeluruh Berkas & Folder Usang (Clean Workspace)**:
   - Menghapus banner lama `art/Mister Download Manager.png` (~1 MB).
   - Menghapus berkas ikon lama `crates/app/assets/icons/app/mdm-*` (yang sudah digantikan oleh `razdm-*`).
   - Menghapus dokumen usang di root: `CLAUDE.md`, `PRODUCT.md`, `DESIGN.md`, `ROADMAP.md`.
   - Menghapus direktori alat bantu lama: `.claude/` dan `.impeccable/`.
   - Menghapus puluhan tangkapan layar antarmuka lama (.webp dan .svg) di `docs/images/` yang tidak lagi sesuai dengan tampilan baru aplikasi.
   - Memperbarui tautan gambar di `docs/README.md` agar menggunakan tangkapan layar antarmuka terbaru `images/main-raz.png`.

---

## [2026-11-16] — Revamp Total README.md: Gaya RAZ Creative Studio, Bahasa Indo Oke & Aset Baru
*Waktu: 16 November 2026 09:45 WIB*

### Aktivitas & Pembaruan:
1. **Perombakan Total File `README.md`**:
   - Ditulis ulang sepenuhnya menggunakan **Bahasa Indo Oke** yang luwes, santai, modern, dan bergaya *senior dev pair-programming* (tanpa gaya robot/kaku).
   - Mematuhi 100% kamus istilah: *Donlot*, *Ngedonlot*, *Donlotan*, *Terdonlot*, *Mendonlot*, *Aplot*, *Aplotan*.
   - Mengadopsi standar visual **RAZ Creative Studio**:
     - Header resmi dengan badge platform (Windows, macOS, Linux), browser store (Chrome Web Store, Firefox Add-ons), stars badge, dan lisensi GPL-3.0.
     - Kartu matriks keunggulan (5.4× Lebih Kencang, 86+ Bahasa, 100% Gratis Selamanya, BitTorrent Native).
     - Tabel komparasi *head-to-head* dengan IDM 6.42 yang bersih dan to-the-point.
     - Penjelasan lengkap fitur unggulan (64 multi-thread, smart resume, video sniffer, scheduler, VPN interface bind, AI MCP server).
     - Panduan instalasi dan pilihan berkas rilis (.exe setup, portable .zip, x64 .zip, ekstensi web, Linux, macOS).
     - Panduan kompilasi dan kontribusi developer (Cargo build, rincian crate workspace).
2. **Pembersihan Aset Lama & Penyegaran Visual**:
   - Menghapus semua foto, diagram, dan tangkapan layar versi lama (era MDM / antarmuka jadul / diagram SVG lama).
   - Memperbarui `docs/images/logo.png` dengan logo resmi RAZ Download Manager (256x256).
   - Menyertakan tangkapan layar antarmuka terbaru `docs/images/main-raz.png` yang menampilkan tema gelap obsidian presisi dengan sidepanel minimalis tanpa scrollbar.
3. **Backup & Versioning Terpusat**:
   - Salinan cadangan aman tersimpan di `backup/README.md.bak`.

---

## [2026-11-16] — Penerapan Glosarium Bahasa Indo Oke ke Seluruh Laman Website Resmi
*Waktu: 16 November 2026 09:35 WIB*

### Aktivitas & Pembaruan:
1. **Pembaruan Modul Bahasa Website (`website/js/RAZMainLang.js`)**:
   - Menyesuaikan seluruh string bahasa Indonesia pada objek lokalisasi `translations.id`:
     - Tombol navigasi dan hero: *Donlot Installer*, *Donlot Installer (v1.0.0)*.
     - Pusat rilis: *Pusat Donlotan*, *Donlot RAZ Download Manager*.
     - Kartu download & tombol aksi: *Donlot Installer (setup.exe)*, *Donlot Portable (portable.zip)*, *Donlot Binaries (x64.zip)*.
     - Deskripsi fitur & FAQ: *Atur koneksi per donlotan...*, *...didonlot 1-klik*, *...mengelola donlotan via prompt AI*, dll.

2. **Sinkronisasi Teks HTML Statis (`website/`)**:
   - `website/index.html`: Judul tombol, navigasi, dan card preview diubah menjadi istilah gaul modern (*Donlot*, *Donlotan*).
   - `website/download.html`: Header (*Pusat Donlotan*), tombol unduhan installer, portable, binary, instruksi direct download ekstensi browser (*Donlot Ekstensi Chrome/Firefox*).
   - `website/benchmark.html`: Penjelasan pengujian (*mendonlot dari server pengujian*, *saat donlotan dimulai*).
   - `website/idm-alternative.html`: Komparasi kecepatan (*mendonlot file 1 GiB*, tombol CTA *Donlot RAZ Download Manager Sekarang*).

3. **Sinkronisasi Segmen Terjemahan Web (`i18n/site/id.json`)**:
   - Memperbarui segmen terjemahan situs web agar konsisten dengan glosarium *Donlot / Ngedonlot / Mendonlot / Donlotan / Terdonlot / Aplot / Aplotan*.

---

## [2026-11-16] — Pembaruan Kamus Bahasa Indo Oke: Slang Modern "Donlot", "Ngedonlot", "Aplot"
*Waktu: 16 November 2026 09:28 WIB*

### Aktivitas & Pembaruan:
1. **Pembaruan Menyeluruh Glosarium Istilah di `i18n/id-oke.tsv`**:
   - Menyesuaikan 228 baris teks terjemahan Bahasa Indo Oke dengan istilah gaul/slang santai modern sesuai permintaan:
     - `Unduh` → `Donlot` / `unduh` → `donlot`
     - `Ngunduh` → `Ngedonlot` / `ngunduh` → `ngedonlot`
     - `Unduhan` → `Donlotan` / `unduhan` → `donlotan`
     - `Unduhannya` → `Donlotannya` / `unduhannya` → `donlotannya`
     - `Terunduh` → `Terdonlot` / `terunduh` → `terdonlot`
     - `Mengunduh` → `Mendonlot` / `mengunduh` → `mendonlot`
     - `Mengunduhnya` → `Mendonlotnya` / `mengunduhnya` → `mendonlotnya`
     - `Diunduh` → `Didonlot` / `diunduh` → `didonlot`
     - `Pengunduh` → `Pendonlot` / `pengunduh` → `pendonlot`
     - `Pengunduhan` → `Pendonlotan` / `pengunduhan` → `pendonlotan`
     - `Unggah` → `Aplot` / `unggah` → `aplot`
     - `Unggahan` → `Aplotan` / `unggahan` → `aplotan`
     - `Mengunggah` → `Mengaplot` / `mengunggah` → `mengaplot`
     - `Pengunggah` → `Pengaplot` / `pengunggah` → `pengaplot`
     - Menyesuaikan juga akselerator pintasan menu seperti `&Unduh` → `&Donlot`, `&Unduhan` → `&Donlotan`.

2. **Sinkronisasi File Terjemahan Installer Inno Setup (`tools/installer/languages/id-oke.isl`)**:
   - Memperbarui `LanguageName=Bahasa Indo Oke`.
   - Mengubah seluruh label dialog instalasi (`Mengunduh file...` → `Mendonlot file...`, `&Hentikan unduhan` → `&Hentikan donlotan`, `Unduhan gagal` → `Donlotan gagal`, dll.).

3. **Kompilasi Biner & Build Ulang Paket Rilis**:
   - Mengompilasi biner rilis `razdm-app` dengan katalog terjemahan baru yang di-pack otomatis melalui brotli (`crates/app/build.rs`).
   - Membangun kembali seluruh paket installer di `target/dist/`:
     - `RAZDownloadManager-1.0.0-setup.exe` (15,9 MB)
     - `RAZDownloadManager-1.0.0-portable.zip` (18,6 MB)
     - `RAZDownloadManager-1.0.0-x64.zip` (18,6 MB)
     - `RAZDownloadManager-1.0.0-extension-chrome.zip` (0,2 MB)
     - `RAZDownloadManager-1.0.0-extension-firefox.xpi` (0,2 MB)
   - Sinkronisasi checksum SHA256 di `target/dist/SHA256SUMS.txt`.

---

## [2026-11-14] — Penggantian Total Logo Tombol Unduh Video Browser Extension & Ekosistem Icon RAZ
*Waktu: 14 November 2026 13:22 WIB*

### Aktivitas & Pembaruan:
1. **Penggantian Logo Tombol Unduh Video Web (`extension/video.js`)**:
   - `extension/video.js`:
     - Menghapus konstanta base64 logo lama era *Mister Download Manager* (ikon bola dunia bertopi).
     - Memperbarui `LOGO` dengan data URL base64 dari logo resmi monogram emas metalik RAZ Creative Studio (`website/razdm-logo11.svg`) yang beresolusi tajam dan transparan.
     - Tombol melayang *Unduh video* beserta dropdown menu di situs video (YouTube, Vimeo, Facebook, dll.) kini resmi menampilkan logo RAZ Download Manager dengan proporsi presisi 22x22px.

2. **Peremajaan Menyeluruh Ikon Ekstensi Browser & Aplikasi Desktop**:
   - Mengonversi `website/razdm-logo11.svg` (ratio 1:1 tanpa background hitam sesuai arahan) menggunakan engine rasterisasi `resvg/tiny-skia` ke seluruh ukuran resolusi standar:
     - **Browser Extension (`extension/icons/`)**:
       - `icon-16.png`, `icon-32.png`, `icon-48.png`, `icon-128.png`
     - **Aplikasi Desktop Windows (`crates/app/assets/icons/app/`)**:
       - `razdm-16.png`, `razdm-20.png`, `razdm-24.png`, `razdm-32.png`, `razdm-48.png`, `razdm-64.png`, `razdm-128.png`, `razdm-256.png`
       - Meng-generate ulang file container multi-resolusi `razdm.ico` (16, 20, 24, 32, 48, 64, 128, 256) untuk executable Windows dan taskbar icon.
     - **Aset Website (`website/assets/`)**:
       - `favicon-32.png`, `logo-64.png`, `logo-256.png`, `apple-touch-icon.png`

3. **Re-pack Ekstensi Browser & Build Ulang Installer**:
   - Menjalankan `tools/extension/pack.ps1` untuk memaketkan ulang ekstensi:
     - `razdm-extension-chrome.zip` (0,2 MB)
     - `razdm-extension-firefox.xpi` (0,2 MB)
   - Sinkronisasi file zip/xpi ke folder `website/assets/extension/`.
   - Mengompilasi biner rilis `razdm-app` dan merilis ulang installer di `target/dist/`:
     - `RAZDownloadManager-1.0.0-setup.exe` (15,9 MB)
     - `RAZDownloadManager-1.0.0-portable.zip` (18,6 MB)
     - `RAZDownloadManager-1.0.0-x64.zip` (18,6 MB)
   - Memperbarui daftar hash SHA256 di `target/dist/SHA256SUMS.txt`.

---

## [2026-11-14] — Optimasi Side Panel Ramping & Bebas Scrollbar: Desain Kompak & Tipografi Segoe UI Modern
*Waktu: 14 November 2026 12:45 WIB*

### Aktivitas & Pembaruan:
1. **Penyusutan Dimensi & Spacing Side Panel (`chrome::categories`)**:
   - `crates/app/src/chrome.rs`:
     - Menurunkan tinggi baris item dari 34px menjadi 25px (`rc` height 23px) dan tinggi header seksi dari 28px menjadi 20px.
     - Mengoptimalkan radius pill seleksi/hover menjadi 5.0px yang ramping dan elegan.
     - Mengurangi total tinggi kumulatif seluruh seksi navigasi (LIBRARY, FILE TYPES, QUEUES) dari ~410px menjadi hanya ~296px.
     - Pada ukuran jendela normal (tinggi minimal 400px), seluruh item side panel kini tampil utuh dalam satu pandangan tanpa memicu scrollbar vertikal sama sekali (`need_v = false`).
     - Menyesuaikan proporsi dan ketebalan stroke ikon kustom:
       - Lingkaran panah `AllDownloads` radius 7.0px (garis panah 1.6px).
       - Lingkaran jam `Incomplete` radius 6.5px (garis 1.3px).
       - Lingkaran centang `Completed` radius 6.5px (garis 1.5px).
       - Titik kategori warna `Dot` radius 3.5px.
       - Tumpukan garis `Queue` lebar 10px.

2. **Penyempurnaan Tipografi Modern (Clean Segoe UI / Proportional Font)**:
   - Menggantikan font tebal jadul (tahoma-bold/serif look) dengan `FontId::proportional(12.0)` yang halus, jernih, dan modern khas antarmuka Windows 11 / RAZ Creative Studio.
   - Badge hitungan unduhan menggunakan `FontId::proportional(11.5)`.
   - Header seksi menggunakan `FontId::proportional(10.0)` berwarna abu-abu steel modern (`#737a87`).

3. **Fleksibilitas Lebar Sidebar di `app.rs`**:
   - `crates/app/src/app.rs`:
     - Menurunkan batas bawah lebar sidebar dari 185px menjadi 130px (`clamp(130.0, max_w)`), memberikan kebebasan bagi pengguna untuk mengecilkan atau melebarkan side panel sesuai preferensi layout.

4. **Kompilasi Biner Release & Build Ulang Installer**:
   - Berhasil mengompilasi biner rilis dengan performa tinggi dan 0 warning (`cargo check` & `cargo build --release -p razdm-app`).
   - Membangun kembali paket installer dan biner portabel di `target/dist/`:
     - `RAZDownloadManager-1.0.0-setup.exe` (15,8 MB)
     - `RAZDownloadManager-1.0.0-portable.zip` (18,6 MB)
     - `RAZDownloadManager-1.0.0-x64.zip` (18,6 MB)
     - `RAZDownloadManager-1.0.0-extension-chrome.zip` (0,2 MB)
     - `RAZDownloadManager-1.0.0-extension-firefox.xpi` (0,2 MB)

---

## [2026-11-14] — Perbaikan Folder Instalasi & Migrasi Data: Penggantian AppId Unik & `UsePreviousAppDir=no`
*Waktu: 14 November 2026 12:21 WIB*

### Aktivitas & Pembaruan:
1. **Perbaikan Destination Folder Instalasi Inno Setup**:
   - `tools/installer/razdm.iss` & `tools/installer/mdm.iss`:
     - Menetapkan direktif mutlak `UsePreviousAppDir=no` di konfigurasi `[Setup]` Inno Setup. Hal ini mencegah installer membaca sisa registry instalasi lawas era *Mister Download Manager* dan memastikan folder tujuan instalasi selalu otomatis terarah ke:
       `C:\Program Files\RAZ Download Manager` (Instalasi All Users) atau `%LOCALAPPDATA%\Programs\RAZ Download Manager` (Instalasi Current User).
     - Mengganti `AppId` bawaan lama (`{667DB4D8-...}`) dengan GUID khusus RAZ Download Manager yang baru dan bersih: `{{0D8EBE54-9DCA-4B13-A506-CFFD63B81B22}}`.
     - Memperbarui metadata publisher, URLs, dan copyright: `RAZ Creative Studio`, `https://razcreativestudio.com`.

2. **Migrasi Otomatis Folder Data Roaming**:
   - `crates/ipc/src/lib.rs`:
     - Menambahkan penanganan migrasi otomatis `legacy_mister` (`base.join("misterdownloadmanager")`) menuju `razdownloadmanager` di `%APPDATA%`.
     - Data download, riwayat, dan konfigurasi dari versi terdahulu otomatis berpindah rapi ke folder resmi `razdownloadmanager` tanpa ada data yang hilang.

3. **Rebuild Biner Rilis, Installer & Checksum**:
   - Berhasil mengompilasi biner release: `razdm-app`, `razdm-nmhost`, `razdm-cli`, `razdm-mcp`.
   - Membangun ulang seluruh paket installer di `target/dist/`:
     - `RAZDownloadManager-1.0.0-setup.exe` (15,8 MB)
     - `RAZDownloadManager-1.0.0-portable.zip` (18,6 MB)
     - `RAZDownloadManager-1.0.0-x64.zip` (18,6 MB)
   - Memperbarui daftar checksum di `target/dist/SHA256SUMS.txt` dan `website/download.html`.

---

## [2026-11-14] — Modernisasi Side Panel Main Window (Grouped Sections: LIBRARY, FILE TYPES, QUEUES)
*Waktu: 14 November 2026 11:58 WIB*

### Aktivitas & Pembaruan:
1. **Redesign Total TreeView Sidebar Menjadi Modern Grouped Sidepanel**:
   - `crates/app/src/chrome.rs`:
     - Menghapus garis-garis pohon klasik putus-putus 90-an era IDM (`TREE_LINES`) dan expander kotak jadul.
     - Menggantinya dengan kontainer obsidian modern bergradasi elegan, border halus `HEADER_LINE()`, dan rounded pills untuk setiap item navigasi aktif/hover.
     - Menambahkan tipe ikon `RowIconKind`:
       - `AllDownloads`: Circular badge biru solid dengan panah unduhan putih di tengah.
       - `Incomplete`: Lingkaran outline elegan dengan jarum jam / pie slice.
       - `Completed`: Lingkaran outline elegan dengan tanda centang (checkmark).
       - `Dot(Color32)`: Titik berwarna solid untuk kategori file (Pink, Hijau Zamrud, Biru Langit, Amber, Ungu, Toska, Emas).
       - `Queue`: Ikon tumpukan antrean modern bergaris emas signature RAZ.
     - Menambahkan badge jumlah download (item count) presisi yang rata kanan di setiap baris.
     - Menambahkan header seksi dengan tipografi uppercase ter-spacing rapi (`LIBRARY`, `FILE TYPES`, `QUEUES`).

2. **Arsitektur Orthogonal Dual-Filtering di `App::tree_rows`**:
   - `crates/app/src/app.rs`:
     - Mengelompokkan navigasi ke dalam 3 seksi utama yang terkoordinasi:
       - **`LIBRARY`**: `All Downloads`, `Incomplete`, `Completed`.
       - **`FILE TYPES`**: `All Types`, `Documents`, `Compressed`, `Music`, `Video`, `Programs`, `Torrents`.
       - **`QUEUES`**: Antrean kustom & utama pengguna.
     - Logika filter ortogonal: status filter (All/Incomplete/Completed) dan tipe filter (All Types/Kategori spesifik) tetap aktif bersamaan tanpa saling meniadakan.
     - Hitungan download (*count badge*) dihitung secara dinamis dan real-time sesuai filter yang sedang aktif.
     - Memperluas lebar default sidebar dari 100px menjadi ~190px (`clamp(160.0, max_w)`) agar nama kategori dan badge jumlah muat dengan leluasa.

3. **Lokalisasi Bahasa**:
   - `i18n/en.tsv`, `i18n/id.tsv`, `i18n/id-oke.tsv`:
     - Menambahkan terjemahan untuk header seksi dan item navigasi baru:
       - `LIBRARY` $\rightarrow$ `PUSTAKA`
       - `Incomplete` $\rightarrow$ `Belum Selesai`
       - `Completed` $\rightarrow$ `Selesai` / `Udah Selesai`
       - `FILE TYPES` $\rightarrow$ `TIPE FILE`
       - `All Types` $\rightarrow$ `Semua Tipe`
       - `QUEUES` $\rightarrow$ `ANTREAN`

4. **Kompilasi & Pembuatan Paket Rilis**:
   - Berhasil mengompilasi release binary: `target/release/razdownloadmanager.exe`.
   - Membangun ulang seluruh paket installer di `target/dist/`:
     - `RAZDownloadManager-1.0.0-setup.exe` (15,8 MB)
     - `RAZDownloadManager-1.0.0-portable.zip` (18,6 MB)
     - `RAZDownloadManager-1.0.0-x64.zip` (18,6 MB)
   - Memperbarui daftar checksum di `target/dist/SHA256SUMS.txt`.
*Waktu: 13 November 2026 10:25 WIB*

### Aktivitas & Pembaruan:
1. **Redesign Dialog Opsi Menjadi Modern Vertical Sidepanel**:
   - `crates/app/src/options.rs`:
     - Menghapus tampilan multi-tab klasik 2-baris bertumpuk yang kuno.
     - Menggantinya dengan layout navigasi modern **Vertical Sidepanel** (lebar 175 px) di sebelah kiri, terinspirasi dari desain antarmuka modern Fluent / VS Code Settings:
       - 12 Kategori Opsi: `General`, `File types`, `Save to`, `Downloads`, `Connection`, `Remote`, `Proxy / Socks`, `Sites Logins`, `Accounts`, `Sounds`, `Regional`, `Archives`.
       - Setiap item navigasi dilengkapi ikon signature vektor bergradasi emas (`Icon::Page*`) dan label terjemahan dinamis.
       - Item aktif diberi highlight rounded pill obsidian dengan aksen emas (`#FFD700`), border emas lembut, serta indikator vertikal emas di sisi kiri.
       - Item hover memiliki efek translusen obsidian modern.
       - Navigasi keyboard penuh menggunakan tombol panah Atas/Bawah, Home, End, dan Tab.
     - Memperluas dimensi dialog konfigurasi menjadi `605 x 506 px` sehingga proporsi tata letak sangat seimbang dan luas.
     - Menambahkan garis pembatas vertikal (divider) elegan antara sidepanel dan area konten panel.

2. **Pembersihan String dan Rebranding Lengkap "MDM" $\rightarrow$ "RAZ DM"**:
   - `crates/app/src/options.rs`:
     - Memperbarui label `Customize keys to prevent or force downloading with RAZ DM`.
     - Memperbarui label `Customize RAZ DM menu items in context menu of browsers`.
     - Memperbarui label `Customize RAZ DM Download panels in browsers`.
     - Memperbarui teks integrasi remote dan helper: `Let phones and computers on the local network control RAZ DM`, `Off: nothing on the network can reach RAZ DM`, `RAZ DM can't be reached on the network now...`, `{device} is paired. It can control RAZ DM now.`, `Type this code at {page} and allow RAZ DM...`.
     - Memperbarui penyimpanan password kredensial Windows/keyring: `...kept in RAZ DM's settings...`.
   - `i18n/en.tsv`, `i18n/id.tsv`, `i18n/id-oke.tsv`:
     - Menyesuaikan seluruh string sumber dan terjemahan bahasa Indonesia baku serta Bahasa Indo Oke agar konsisten menggunakan "RAZ DM" tanpa ada lagi penyebutan "MDM".

3. **Kompilasi Release & Pembuatan Ulang Installer**:
   - Berhasil mengompilasi release binary: `target/release/razdownloadmanager.exe`.
   - Membangun ulang seluruh paket distribusi di `target/dist/`:
     - `RAZDownloadManager-1.0.0-setup.exe` (15,8 MB)
     - `RAZDownloadManager-1.0.0-portable.zip` (18,6 MB)
     - `RAZDownloadManager-1.0.0-x64.zip` (18,6 MB)
   - Memperbarui catatan hash checksum di `target/dist/SHA256SUMS.txt` dan halaman web `website/download.html`.

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
