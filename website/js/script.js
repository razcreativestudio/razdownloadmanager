/**
 * ============================================================================
 * RAZ Download Manager - Main Interactivity & Core Script
 * File: website/js/script.js
 * Deskripsi: Skrip interaktif mencakup Splash Screen, Theme Switcher,
 *            Interactive Canvas Particle Network, Live Speed Benchmark Simulator,
 *            App Tour Masonry Accordion Grid & Fullscreen Lightbox Modal,
 *            FAQ Accordion, dan Custom Modals.
 * Terakhir Diupdate: 2026-11-16 23:05 WIB
 * Versi: 1.1.0 (RAZ DM Masonry Cards & Lightbox Modal Release)
 * Standar: RAZ Enterprise Architecture Standard
 * ============================================================================
 */

(function () {
    'use strict';

    // 1. Inisialisasi Tema Instan (Cegah Flash of Unstyled Theme)
    try {
        const savedTheme = localStorage.getItem('raz_site_theme') || 'dark';
        document.documentElement.setAttribute('data-theme', savedTheme);
    } catch (e) {
        console.warn('Gagal membaca tema dari localStorage:', e);
    }

    document.addEventListener('DOMContentLoaded', () => {
        initSplashScreen();
        initThemeToggle();
        initMobileMenu();
        initHeroCanvas();
        initBenchmarkRace();
        initAppTour();
        initFAQAccordion();
        initChecksumClipboard();
        initStickyHeader();
    });

    /**
     * Inisialisasi Splash Screen Loader
     */
    function initSplashScreen() {
        const splash = document.getElementById('raz-splash');
        if (!splash) return;

        window.addEventListener('load', () => {
            setTimeout(() => {
                splash.classList.add('raz-fade-out');
                setTimeout(() => {
                    splash.style.display = 'none';
                }, 500);
            }, 300);
        });

        // Fallback jika window load terhambat
        setTimeout(() => {
            if (splash.style.display !== 'none') {
                splash.classList.add('raz-fade-out');
                setTimeout(() => splash.style.display = 'none', 500);
            }
        }, 2500);
    }

    /**
     * Inisialisasi Tombol Theme Toggle (Dark / Light)
     */
    function initThemeToggle() {
        const themeBtn = document.getElementById('raz-theme-toggle');
        if (!themeBtn) return;

        const updateIcon = (theme) => {
            themeBtn.innerHTML = theme === 'light' ? '<i class="fas fa-sun"></i>' : '<i class="fas fa-moon"></i>';
        };

        const currentTheme = document.documentElement.getAttribute('data-theme') || 'dark';
        updateIcon(currentTheme);

        themeBtn.addEventListener('click', () => {
            const now = document.documentElement.getAttribute('data-theme') || 'dark';
            const next = now === 'dark' ? 'light' : 'dark';
            document.documentElement.setAttribute('data-theme', next);
            localStorage.setItem('raz_site_theme', next);
            updateIcon(next);

            if (typeof RAZModal !== 'undefined') {
                RAZModal.toast(next === 'light' ? 'Mode terang diaktifkan' : 'Mode gelap diaktifkan', 'info', 1800);
            }
        });
    }

    /**
     * Inisialisasi Header Menempel saat Scroll
     */
    function initStickyHeader() {
        const header = document.getElementById('main-header');
        if (!header) return;

        window.addEventListener('scroll', () => {
            if (window.scrollY > 30) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        });
    }

    /**
     * Inisialisasi Navigasi Mobile Menu
     */
    function initMobileMenu() {
        const toggleBtn = document.getElementById('nav-toggle-btn');
        const navList = document.getElementById('nav-list');
        if (!toggleBtn || !navList) return;

        toggleBtn.addEventListener('click', () => {
            navList.classList.toggle('active');
            toggleBtn.classList.toggle('active');
        });

        document.querySelectorAll('#nav-list .nav-link').forEach(link => {
            link.addEventListener('click', () => {
                navList.classList.remove('active');
                toggleBtn.classList.remove('active');
            });
        });
    }

    /**
     * Inisialisasi Interactive HTML5 Hero Canvas Particle Grid
     */
    function initHeroCanvas() {
        const canvas = document.getElementById('hero-canvas');
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        let width = canvas.width = canvas.offsetWidth;
        let height = canvas.height = canvas.offsetHeight;

        window.addEventListener('resize', () => {
            if (!canvas) return;
            width = canvas.width = canvas.offsetWidth;
            height = canvas.height = canvas.offsetHeight;
        });

        const particles = [];
        const count = Math.min(Math.floor((width * height) / 12000), 55);

        for (let i = 0; i < count; i++) {
            particles.push({
                x: Math.random() * width,
                y: Math.random() * height,
                vx: (Math.random() - 0.5) * 0.7,
                vy: (Math.random() - 0.5) * 0.7,
                radius: Math.random() * 2 + 1
            });
        }

        function draw() {
            ctx.clearRect(0, 0, width, height);

            const isDark = document.documentElement.getAttribute('data-theme') !== 'light';
            const nodeColor = isDark ? 'rgba(255, 215, 0, 0.6)' : 'rgba(184, 134, 11, 0.5)';
            const lineColor = isDark ? 'rgba(255, 215, 0, ' : 'rgba(184, 134, 11, ';

            for (let i = 0; i < particles.length; i++) {
                const p = particles[i];
                p.x += p.vx;
                p.y += p.vy;

                if (p.x < 0 || p.x > width) p.vx *= -1;
                if (p.y < 0 || p.y > height) p.vy *= -1;

                ctx.beginPath();
                ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
                ctx.fillStyle = nodeColor;
                ctx.fill();

                for (let j = i + 1; j < particles.length; j++) {
                    const p2 = particles[j];
                    const dx = p.x - p2.x;
                    const dy = p.y - p2.y;
                    const dist = Math.sqrt(dx * dx + dy * dy);

                    if (dist < 130) {
                        ctx.beginPath();
                        ctx.moveTo(p.x, p.y);
                        ctx.lineTo(p2.x, p2.y);
                        ctx.strokeStyle = lineColor + (1 - dist / 130) * 0.22 + ')';
                        ctx.lineWidth = 0.8;
                        ctx.stroke();
                    }
                }
            }

            requestAnimationFrame(draw);
        }

        draw();
    }

    /**
     * Inisialisasi Live Speed Benchmark Race Simulator
     */
    function initBenchmarkRace() {
        const container = document.getElementById('benchmark-race');
        if (!container) return;

        const scenarios = [
            {
                name: '1 GiB Fast Link',
                mdmTime: 1.01,
                idmTime: 5.46,
                ratio: '5.4×',
                noteId: 'RAZ DM selesai hanya dalam 1.01 detik menggunakan 64 koneksi simultan saturasi penuh, sedangkan IDM membutuhkan 5.46 detik.',
                noteEn: 'RAZ DM completes in just 1.01 s leveraging full 64 parallel connections, whereas IDM takes 5.46 s.'
            },
            {
                name: 'Small File (256 KiB)',
                mdmTime: 0.03,
                idmTime: 3.14,
                ratio: '104×',
                noteId: 'Untuk file kecil, RAZ DM langsung menyelesaikannya seketika (0.03s), tanpa lag inisialisasi antarmuka IDM (3.14s).',
                noteEn: 'On small files, RAZ DM downloads instantly (0.03s), avoiding IDM interface pre-allocation delay (3.14s).'
            },
            {
                name: 'Server 2 Connections',
                mdmTime: 12.6,
                idmTime: 15.9,
                ratio: '1.3×',
                noteId: 'Saat server membatasi koneksi, RAZ DM disiplin memakai 2 koneksi (12.6s), sedangkan IDM sempat mencoba buka 480 koneksi yang berujung penalti (15.9s).',
                noteEn: 'On connection-capped servers, RAZ DM gracefully respects 2 streams (12.6s), while IDM opened 480 connections causing throttling (15.9s).'
            }
        ];

        let activeScenario = 0;
        let animationFrame = null;

        const razBar = document.getElementById('race-bar-raz');
        const idmBar = document.getElementById('race-bar-idm');
        const razTimeEl = document.getElementById('race-time-raz');
        const idmTimeEl = document.getElementById('race-time-idm');
        const ratioEl = document.getElementById('race-ratio-val');
        const noteEl = document.getElementById('race-scenario-note');
        const replayBtn = document.getElementById('race-replay-btn');
        const tabBtns = document.querySelectorAll('.bench-tab-btn');

        function runRace() {
            if (animationFrame) cancelAnimationFrame(animationFrame);

            const sc = scenarios[activeScenario];
            const maxDuration = Math.max(sc.mdmTime, sc.idmTime);
            // Skala visual agar simulasi nyaman dilihat (antara 1.5 - 3.5 detik)
            const visualScale = 2500 / maxDuration;

            const startTime = performance.now();
            if (razBar) razBar.style.width = '0%';
            if (idmBar) idmBar.style.width = '0%';

            function tick(now) {
                const elapsedRealSeconds = (now - startTime) / visualScale;

                // Hitung progress RAZ DM
                const razProgress = Math.min(elapsedRealSeconds / sc.mdmTime, 1);
                const currentRazTime = (razProgress * sc.mdmTime).toFixed(2);
                if (razBar) razBar.style.width = (razProgress * 100) + '%';
                if (razTimeEl) razTimeEl.textContent = currentRazTime + ' s';

                // Hitung progress IDM
                const idmProgress = Math.min(elapsedRealSeconds / sc.idmTime, 1);
                const currentIdmTime = (idmProgress * sc.idmTime).toFixed(2);
                if (idmBar) idmBar.style.width = (idmProgress * 100) + '%';
                if (idmTimeEl) idmTimeEl.textContent = currentIdmTime + ' s';

                if (razProgress < 1 || idmProgress < 1) {
                    animationFrame = requestAnimationFrame(tick);
                } else {
                    if (razTimeEl) razTimeEl.textContent = sc.mdmTime.toFixed(2) + ' s (SELESAI)';
                    if (idmTimeEl) idmTimeEl.textContent = sc.idmTime.toFixed(2) + ' s (SELESAI)';
                }
            }

            animationFrame = requestAnimationFrame(tick);

            if (ratioEl) ratioEl.textContent = sc.ratio;
            if (noteEl) {
                const lang = typeof RAZMainLang !== 'undefined' ? RAZMainLang.getCurrentLang() : 'id';
                noteEl.textContent = lang === 'en' ? sc.noteEn : sc.noteId;
            }
        }

        tabBtns.forEach((btn, idx) => {
            btn.addEventListener('click', () => {
                tabBtns.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                activeScenario = idx;
                runRace();
            });
        });

        if (replayBtn) {
            replayBtn.addEventListener('click', runRace);
        }

        // Jalankan race saat elemen terlihat pertama kali di viewport
        const observer = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting) {
                runRace();
                observer.disconnect();
            }
        }, { threshold: 0.3 });

        observer.observe(container);
    }

    /**
     * Inisialisasi App Tour / Screenshot Showcase (Masonry Accordion Grid & Fullscreen Lightbox)
     */
    function initAppTour() {
        const grid = document.getElementById('tour-masonry-grid');
        if (!grid) return;

        const cards = Array.from(grid.querySelectorAll('.tour-masonry-card'));
        const filterBtns = document.querySelectorAll('.tour-filter-btn');
        const moreBtn = document.getElementById('tour-more-btn');
        const moreContainer = document.getElementById('tour-more-container');
        const toggleAllBtn = document.getElementById('tour-toggle-all-cards');

        // Lightbox Elements
        const lightbox = document.getElementById('tour-lightbox-modal');
        const lightboxImg = document.getElementById('tour-lightbox-img');
        const lightboxTitle = document.getElementById('tour-lightbox-title');
        const lightboxDesc = document.getElementById('tour-lightbox-desc');
        const lightboxClose = document.getElementById('tour-lightbox-close');
        const lightboxPrev = document.getElementById('tour-lightbox-prev');
        const lightboxNext = document.getElementById('tour-lightbox-next');

        let currentFilter = 'all';
        let isExpandedAll = false;
        let currentLightboxIndex = 0;
        let visibleCards = [];

        // Refresh kartu aktif berdasarkan filter dan mode progressive disclosure
        function refreshVisibleCards() {
            cards.forEach(card => {
                const category = card.getAttribute('data-category');
                const theme = card.getAttribute('data-theme');
                let matches = false;

                if (currentFilter === 'all') {
                    matches = true;
                } else if (currentFilter === 'theme-dark' || currentFilter === 'theme-light') {
                    matches = (theme === currentFilter);
                } else if (currentFilter.startsWith('cat-')) {
                    matches = (category === currentFilter);
                }

                if (matches) {
                    card.classList.remove('hidden-by-filter');
                } else {
                    card.classList.add('hidden-by-filter');
                }
            });

            const matchingCards = cards.filter(c => !c.classList.contains('hidden-by-filter'));

            if (currentFilter === 'all') {
                if (moreContainer) moreContainer.style.display = 'block';
                matchingCards.forEach((card, idx) => {
                    if (!isExpandedAll && idx >= 6) {
                        card.classList.add('hidden');
                    } else {
                        card.classList.remove('hidden');
                    }
                });
            } else {
                if (moreContainer) moreContainer.style.display = 'none';
                matchingCards.forEach(card => card.classList.remove('hidden'));
            }

            visibleCards = cards.filter(c => !c.classList.contains('hidden') && !c.classList.contains('hidden-by-filter'));
        }

        // Event listener untuk tombol filter tema & kategori
        filterBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                filterBtns.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                currentFilter = btn.getAttribute('data-filter') || 'all';
                refreshVisibleCards();
            });
        });

        // Event listener untuk tombol progressive disclosure (Lihat Semua / Ciutkan)
        if (moreBtn) {
            moreBtn.addEventListener('click', () => {
                isExpandedAll = !isExpandedAll;
                const textSpan = moreBtn.querySelector('.tour-more-btn-text');
                const icon = moreBtn.querySelector('i');
                const currentLang = typeof RAZMainLang !== 'undefined' ? RAZMainLang.getCurrentLang() : 'id';

                if (isExpandedAll) {
                    if (textSpan) {
                        textSpan.textContent = currentLang === 'id' ? 'Ciutkan Tampilan Antarmuka' : 'Collapse Interface View';
                        textSpan.setAttribute('data-lang-key', 'tour-hide-btn');
                    }
                    if (icon) icon.className = 'fas fa-chevron-up';
                } else {
                    if (textSpan) {
                        textSpan.textContent = currentLang === 'id' ? 'Tampilkan Semua 28 Antarmuka' : 'Show All 28 Interfaces';
                        textSpan.setAttribute('data-lang-key', 'tour-show-all-btn');
                    }
                    if (icon) icon.className = 'fas fa-chevron-down';

                    const tourSection = document.getElementById('tour');
                    if (tourSection) {
                        tourSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    }
                }
                refreshVisibleCards();
            });
        }

        // Accordion per-kartu dan trigger modal Lightbox
        cards.forEach(card => {
            const header = card.querySelector('.tour-card-header');
            const toggleBtn = card.querySelector('.tour-card-toggle');

            const toggleCard = (e) => {
                e.stopPropagation();
                card.classList.toggle('expanded');
            };

            if (header) header.addEventListener('click', toggleCard);
            if (toggleBtn) toggleBtn.addEventListener('click', toggleCard);

            const preview = card.querySelector('.tour-card-preview');
            const viewBtn = card.querySelector('.tour-view-btn');

            const openFromCard = (e) => {
                e.stopPropagation();
                const idx = visibleCards.indexOf(card);
                if (idx !== -1) {
                    openLightbox(idx);
                }
            };

            if (preview) preview.addEventListener('click', openFromCard);
            if (viewBtn) viewBtn.addEventListener('click', openFromCard);
        });

        // Buka / Tutup semua keterangan detail sekaligus
        if (toggleAllBtn) {
            toggleAllBtn.addEventListener('click', () => {
                const areAnyCollapsed = visibleCards.some(c => !c.classList.contains('expanded'));
                visibleCards.forEach(c => {
                    if (areAnyCollapsed) {
                        c.classList.add('expanded');
                    } else {
                        c.classList.remove('expanded');
                    }
                });

                const textSpan = toggleAllBtn.querySelector('span');
                const icon = toggleAllBtn.querySelector('i');
                const currentLang = typeof RAZMainLang !== 'undefined' ? RAZMainLang.getCurrentLang() : 'id';

                if (areAnyCollapsed) {
                    if (textSpan) {
                        textSpan.textContent = currentLang === 'id' ? 'Tutup Semua Detail' : 'Collapse All Details';
                        textSpan.setAttribute('data-lang-key', 'tour-toggle-all-collapse');
                    }
                    if (icon) icon.className = 'fas fa-angle-double-up';
                } else {
                    if (textSpan) {
                        textSpan.textContent = currentLang === 'id' ? 'Buka Semua Detail' : 'Expand All Details';
                        textSpan.setAttribute('data-lang-key', 'tour-toggle-all');
                    }
                    if (icon) icon.className = 'fas fa-angle-double-down';
                }
            });
        }

        // Lightbox Functions
        function openLightbox(index) {
            if (!lightbox || !visibleCards.length) return;
            currentLightboxIndex = (index + visibleCards.length) % visibleCards.length;
            const targetCard = visibleCards[currentLightboxIndex];
            if (!targetCard) return;

            const preview = targetCard.querySelector('.tour-card-preview');
            const imgSrc = preview ? preview.getAttribute('data-img') : '';
            const titleEl = targetCard.querySelector('.tour-card-header h4');
            const descEl = targetCard.querySelector('.tour-card-body p');

            if (lightboxImg && imgSrc) {
                lightboxImg.style.opacity = '0';
                lightboxImg.src = imgSrc;
                lightboxImg.onload = () => { lightboxImg.style.opacity = '1'; };
            }
            if (lightboxTitle && titleEl) lightboxTitle.textContent = titleEl.textContent;
            if (lightboxDesc && descEl) lightboxDesc.textContent = descEl.textContent;

            lightbox.classList.add('active');
            lightbox.setAttribute('aria-hidden', 'false');
            document.body.style.overflow = 'hidden';
        }

        function closeLightbox() {
            if (!lightbox) return;
            lightbox.classList.remove('active');
            lightbox.setAttribute('aria-hidden', 'true');
            document.body.style.overflow = '';
        }

        function navLightbox(direction) {
            if (!visibleCards.length) return;
            currentLightboxIndex = (currentLightboxIndex + direction + visibleCards.length) % visibleCards.length;
            openLightbox(currentLightboxIndex);
        }

        if (lightboxClose) lightboxClose.addEventListener('click', closeLightbox);
        if (lightboxPrev) lightboxPrev.addEventListener('click', (e) => { e.stopPropagation(); navLightbox(-1); });
        if (lightboxNext) lightboxNext.addEventListener('click', (e) => { e.stopPropagation(); navLightbox(1); });

        if (lightbox) {
            lightbox.addEventListener('click', (e) => {
                if (e.target === lightbox) closeLightbox();
            });
        }

        // Keyboard Shortcut untuk Lightbox
        document.addEventListener('keydown', (e) => {
            if (!lightbox || !lightbox.classList.contains('active')) return;
            if (e.key === 'Escape') closeLightbox();
            else if (e.key === 'ArrowLeft') navLightbox(-1);
            else if (e.key === 'ArrowRight') navLightbox(1);
        });

        // Inisialisasi awal
        refreshVisibleCards();
    }

    /**
     * Inisialisasi FAQ Accordion
     */
    function initFAQAccordion() {
        const faqItems = document.querySelectorAll('.faq-item');
        faqItems.forEach(item => {
            const question = item.querySelector('.faq-question');
            if (!question) return;

            // Cegah double event binding
            if (question.dataset.faqBound) return;
            question.dataset.faqBound = 'true';

            question.addEventListener('click', (e) => {
                e.preventDefault();
                const isActive = item.classList.contains('active');

                // Tutup item lain hanya dalam kelompok/group list yang sama
                const groupParent = item.closest('.faq-list, .faq-accordion-list') || item.parentElement;
                if (groupParent) {
                    groupParent.querySelectorAll('.faq-item').forEach(i => i.classList.remove('active'));
                } else {
                    faqItems.forEach(i => i.classList.remove('active'));
                }

                if (!isActive) {
                    item.classList.add('active');
                }
            });
        });
    }

    /**
     * Inisialisasi Tombol Salin Checksum SHA-256
     */
    function initChecksumClipboard() {
        document.querySelectorAll('.checksum-copy-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.stopPropagation();
                const hash = btn.getAttribute('data-hash');
                if (!hash) return;

                if (navigator.clipboard) {
                    navigator.clipboard.writeText(hash).then(() => {
                        if (typeof RAZModal !== 'undefined') {
                            RAZModal.toast('Checksum SHA-256 berhasil disalin ke clipboard!', 'success', 2500);
                        }
                    });
                } else {
                    const temp = document.createElement('textarea');
                    temp.value = hash;
                    document.body.appendChild(temp);
                    temp.select();
                    document.execCommand('copy');
                    document.body.removeChild(temp);
                    if (typeof RAZModal !== 'undefined') {
                        RAZModal.toast('Checksum SHA-256 berhasil disalin!', 'success', 2500);
                    }
                }
            });
        });
    }

})();
