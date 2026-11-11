/**
 * ============================================================================
 * RAZ Download Manager - Main Interactivity & Core Script
 * File: website/js/script.js
 * Deskripsi: Skrip interaktif mencakup Splash Screen, Theme Switcher,
 *            Interactive Canvas Particle Network, Live Speed Benchmark Simulator,
 *            App Tour Tab Switcher, FAQ Accordion, dan Custom Modals.
 * Terakhir Diupdate: 2026-11-11
 * Versi: 1.0.0 (RAZ DM Enterprise Release)
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
     * Inisialisasi App Tour / Screenshot Showcase Switcher
     */
    function initAppTour() {
        const tourItems = document.querySelectorAll('.tour-tab-item');
        const tourImage = document.getElementById('tour-preview-img');
        if (!tourItems.length || !tourImage) return;

        tourItems.forEach(item => {
            item.addEventListener('click', () => {
                tourItems.forEach(i => i.classList.remove('active'));
                item.classList.add('active');

                const newSrc = item.getAttribute('data-img');
                if (newSrc) {
                    tourImage.style.opacity = '0';
                    setTimeout(() => {
                        tourImage.src = newSrc;
                        tourImage.style.opacity = '1';
                    }, 200);
                }
            });
        });
    }

    /**
     * Inisialisasi FAQ Accordion
     */
    function initFAQAccordion() {
        const faqItems = document.querySelectorAll('.faq-item');
        faqItems.forEach(item => {
            const question = item.querySelector('.faq-question');
            if (!question) return;

            question.addEventListener('click', () => {
                const isActive = item.classList.contains('active');
                faqItems.forEach(i => i.classList.remove('active'));
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
