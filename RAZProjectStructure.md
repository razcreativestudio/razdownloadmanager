# RAZ Download Manager — Project Structure
**Tanggal**: 10 November 2026  
**Standar**: RAZ Enterprise Architecture

---

## 1. Ikhtisar Arsitektur Workspace
Proyek ini menggunakan arsitektur Rust Workspace modular yang terbagi menjadi beberapa komponen utama:

```
RAZ Download Manager/
├── backup/                  # Direktori backup terpusat (WAJIB sebelum edit)
├── crates/                  # Modul-modul backend & desktop Rust
│   ├── app/                 # Aplikasi GUI Desktop utama (egui / eframe) -> razdownloadmanager
│   ├── cli/                 # Antarmuka CLI & headless launcher -> razdownloadmanager-cli
│   ├── crash/               # Logging crash & telemetry reporter
│   ├── debrid/              # Integrasi multi-hoster & debrid (RealDebrid, dll)
│   ├── engine/              # Engine inti unduhan HTTP/HTTPS multi-connection
│   ├── extract/             # Ekstraksi otomatis arsip (zip, 7z, tar, dll)
│   ├── geo/                 # Resolusi geolokasi & pemilihan mirror
│   ├── ipc/                 # Komunikasi antar-proses (GUI <-> CLI <-> Browser Host)
│   ├── labserver/           # Mock server untuk testing unduhan
│   ├── mcp/                 # Model Context Protocol (MCP) untuk integrasi AI
│   ├── nmhost/              # Native Messaging Host untuk integrasi ekstensi browser
│   ├── remote/              # Remote control via web / pairing ponsel
│   ├── tools/               # Utilitas pendukung (updater, metadata scraper)
│   └── torrent/             # BitTorrent client (librqbit wrapper)
├── extension/               # Ekstensi Browser (Chrome, Firefox, Safari)
│   ├── _locales/            # Terjemahan string ekstensi
│   ├── background.js        # Background worker & interceptor unduhan
│   ├── manifest.json        # Manifest Chromium (Manifest V3)
│   ├── manifest.firefox.json# Manifest Mozilla Firefox
│   └── popup.html / page.js # Antarmuka popup & content script video sniffer
├── i18n/                    # File terjemahan multi-bahasa (.tsv)
├── website/                 # Landing page & situs resmi (dm.it-raz.com)
│   ├── css/                 # Stylesheet modular bertema Dark & Gold luxury RAZ
│   │   ├── style.css        # Base layout, typography, navigation, buttons
│   │   ├── RAZHero.css      # Hero canvas network & floating tech keywords
│   │   ├── RAZMainAnimations.css # Animasi shimmer & transisi
│   │   ├── RAZMainTheme.css # Dark & Light theme overrides
│   │   ├── RAZModal.css     # Custom modal & toast dialog system
│   │   └── RAZDM.css        # Komponen spesifik RAZ Download Manager
│   ├── js/                  # Interaktivitas client-side modular
│   │   ├── RAZModal.js      # Modal & toast engine (Anti-Native Alert)
│   │   ├── RAZMainLang.js   # Sistem bilingual ID/EN interaktif
│   │   └── script.js        # Core script, splash, canvas, benchmark simulator
│   ├── img/                 # Aset logo SVG & raster master
│   ├── assets/              # Screenshot showcase, browser icons, & favicon
│   ├── index.html           # Landing page utama
│   ├── download.html        # Pusat unduhan resmi installer & checksums
│   ├── benchmark.html       # Laporan benchmark saintifik vs IDM 6.42
│   ├── idm-alternative.html # Panduan perbandingan & migrasi dari IDM
│   └── 404.html             # Halaman 404 custom
├── docs/                    # Dokumentasi teknis & arsitektur asli
├── Cargo.toml               # Root Cargo workspace manifest
├── README.md                # Single Source of Truth
├── RAZProjectPlan.md        # Rencana kerja & roadmap
├── RAZProjectStructure.md   # Struktur & peta modul proyek (dokumen ini)
├── RAZGuide.md              # Panduan setup & penggunaan
├── RAZUpdateHistory.md      # Catatan riwayat update harian
└── RAZImplementation.md     # Catatan teknis implementasi bertahap
```

---

## 2. Hubungan Antar Modul
1. **Desktop App (`crates/app`)**:
   - Menjalankan antarmuka grafis (GUI) berbasis *egui*.
   - Mengendalikan engine unduhan (`mdm-engine` / `mdm-torrent`).
   - Menerima event dan perintah unduhan baru dari browser via IPC (`mdm-ipc`).
2. **Native Messaging Host (`crates/nmhost`)**:
   - Didaftarkan ke registry Windows (`HKCU\Software\Google\Chrome\NativeMessagingHosts` dsb).
   - Menghubungkan ekstensi browser dengan aplikasi desktop secara lokal.
3. **Browser Extension (`extension/`)**:
   - Menangkap klik unduhan file dan video dari halaman web.
   - Mengirim URL dan metadata ke `razdownloadmanager-nmhost` via native messaging.
