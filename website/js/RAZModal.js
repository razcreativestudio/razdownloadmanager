/**
 * ============================================================================
 * RAZ Creative Studio - Enterprise Custom Modal & Toast System
 * File: js/RAZModal.js
 * Deskripsi: Engine JavaScript untuk menampilkan dialog modal kustom, 
 *            konfirmasi interaktif, dan notifikasi toast elegan tanpa 
 *            menggunakan window.alert() native bawaan browser.
 * Terakhir Diupdate: 2026-09-28
 * Versi: 1.0.0 (Anti-Native Alert & Clean UX Release)
 * Standar: RAZ Enterprise Architecture Standard
 * ============================================================================
 */

(function (root, factory) {
    if (typeof define === 'function' && define.amd) {
        define([], factory);
    } else if (typeof module === 'object' && module.exports) {
        module.exports = factory();
    } else {
        root.RAZModal = factory();
    }
}(typeof self !== 'undefined' ? self : this, function () {

    let modalOverlay = null;
    let toastContainer = null;

    /**
     * Menginisialisasi elemen DOM Modal ke dalam body secara dinamis
     */
    function ensureModalDOM() {
        if (modalOverlay) return;

        modalOverlay = document.createElement('div');
        modalOverlay.className = 'raz-modal-overlay';
        modalOverlay.innerHTML = `
            <div class="raz-modal-card" role="dialog" aria-modal="true">
                <div class="raz-modal-icon" id="razModalIcon">
                    <i class="fas fa-info-circle"></i>
                </div>
                <h3 class="raz-modal-title" id="razModalTitle">Pemberitahuan</h3>
                <p class="raz-modal-message" id="razModalMessage"></p>
                <div class="raz-modal-actions" id="razModalActions"></div>
            </div>
        `;

        document.body.appendChild(modalOverlay);

        // Tutup modal jika user klik di luar kartu (backdrop)
        modalOverlay.addEventListener('click', (e) => {
            if (e.target === modalOverlay && modalOverlay._currentResolve) {
                closeModal();
                modalOverlay._currentResolve(false);
            }
        });

        // Tutup modal jika tombol ESC ditekan
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && modalOverlay.classList.contains('raz-active') && modalOverlay._currentResolve) {
                closeModal();
                modalOverlay._currentResolve(false);
            }
        });
    }

    /**
     * Menginisialisasi kontainer Toast Notification
     */
    function ensureToastContainer() {
        if (toastContainer) return;
        toastContainer = document.createElement('div');
        toastContainer.className = 'raz-toast-container';
        document.body.appendChild(toastContainer);
    }

    /**
     * Menutup modal yang sedang aktif
     */
    function closeModal() {
        if (!modalOverlay) return;
        modalOverlay.classList.remove('raz-active');
        setTimeout(() => {
            if (modalOverlay._currentResolve) {
                modalOverlay._currentResolve = null;
            }
        }, 300);
    }

    /**
     * Pilihan icon berdasarkan tipe
     */
    function getIconHTML(type) {
        switch (type) {
            case 'success':
                return { iconClass: 'raz-icon-success', html: '<i class="fas fa-check-circle"></i>' };
            case 'error':
                return { iconClass: 'raz-icon-error', html: '<i class="fas fa-times-circle"></i>' };
            case 'warning':
                return { iconClass: 'raz-icon-warning', html: '<i class="fas fa-exclamation-triangle"></i>' };
            case 'info':
            default:
                return { iconClass: 'raz-icon-info', html: '<i class="fas fa-info-circle"></i>' };
        }
    }

    const RAZModal = {
        /**
         * Menampilkan dialog informasi / alert modal
         * 
         * @param {string|Object} titleOrOptions Judul pesan atau object konfigurasi
         * @param {string} [message] Isi pesan (jika param pertama adalah string judul)
         * @param {string} [type='info'] Tipe: 'success' | 'error' | 'warning' | 'info'
         * @returns {Promise<void>}
         */
        alert: function (titleOrOptions, message, type = 'info') {
            ensureModalDOM();

            let options = {};
            if (typeof titleOrOptions === 'object') {
                options = titleOrOptions;
            } else {
                options = {
                    title: message ? titleOrOptions : (type === 'error' ? 'Terjadi Kesalahan' : 'Pemberitahuan'),
                    message: message || titleOrOptions,
                    type: type,
                    btnText: 'Mengerti'
                };
            }

            const iconInfo = getIconHTML(options.type || 'info');
            const iconElem = document.getElementById('razModalIcon');
            iconElem.className = 'raz-modal-icon ' + iconInfo.iconClass;
            iconElem.innerHTML = iconInfo.html;

            document.getElementById('razModalTitle').textContent = options.title || 'Pemberitahuan';
            document.getElementById('razModalMessage').innerHTML = options.message || '';

            const actionsElem = document.getElementById('razModalActions');
            actionsElem.innerHTML = '';

            return new Promise((resolve) => {
                modalOverlay._currentResolve = resolve;

                const okBtn = document.createElement('button');
                okBtn.className = 'raz-modal-btn raz-modal-btn-primary';
                okBtn.textContent = options.btnText || 'OK';
                okBtn.addEventListener('click', () => {
                    closeModal();
                    resolve(true);
                });

                actionsElem.appendChild(okBtn);
                modalOverlay.classList.add('raz-active');
                okBtn.focus();
            });
        },

        /**
         * Menampilkan dialog konfirmasi dengan tombol OK dan Batal
         * 
         * @param {string|Object} titleOrOptions Judul atau konfigurasi
         * @param {string} [message] Isi pesan
         * @param {string} [type='warning'] Tipe icon
         * @returns {Promise<boolean>}
         */
        confirm: function (titleOrOptions, message, type = 'warning') {
            ensureModalDOM();

            let options = {};
            if (typeof titleOrOptions === 'object') {
                options = titleOrOptions;
            } else {
                options = {
                    title: message ? titleOrOptions : 'Konfirmasi Aksi',
                    message: message || titleOrOptions,
                    type: type,
                    confirmText: 'Ya, Lanjutkan',
                    cancelText: 'Batal'
                };
            }

            const iconInfo = getIconHTML(options.type || 'warning');
            const iconElem = document.getElementById('razModalIcon');
            iconElem.className = 'raz-modal-icon ' + iconInfo.iconClass;
            iconElem.innerHTML = iconInfo.html;

            document.getElementById('razModalTitle').textContent = options.title || 'Konfirmasi';
            document.getElementById('razModalMessage').innerHTML = options.message || '';

            const actionsElem = document.getElementById('razModalActions');
            actionsElem.innerHTML = '';

            return new Promise((resolve) => {
                modalOverlay._currentResolve = resolve;

                const cancelBtn = document.createElement('button');
                cancelBtn.className = 'raz-modal-btn raz-modal-btn-secondary';
                cancelBtn.textContent = options.cancelText || 'Batal';
                cancelBtn.addEventListener('click', () => {
                    closeModal();
                    resolve(false);
                });

                const confirmBtn = document.createElement('button');
                confirmBtn.className = 'raz-modal-btn raz-modal-btn-primary';
                confirmBtn.textContent = options.confirmText || 'Ya, Lanjutkan';
                confirmBtn.addEventListener('click', () => {
                    closeModal();
                    resolve(true);
                });

                actionsElem.appendChild(cancelBtn);
                actionsElem.appendChild(confirmBtn);

                modalOverlay.classList.add('raz-active');
                confirmBtn.focus();
            });
        },

        /**
         * Menampilkan Toast Notification di sudut layar
         * 
         * @param {string} message Pesan notifikasi
         * @param {string} [type='info'] 'success' | 'error' | 'warning' | 'info'
         * @param {number} [duration=3500] Durasi tayang dalam milidetik
         */
        toast: function (message, type = 'info', duration = 3500) {
            ensureToastContainer();

            const toast = document.createElement('div');
            toast.className = `raz-toast raz-toast-${type}`;

            let iconHtml = '<i class="fas fa-info-circle"></i>';
            if (type === 'success') iconHtml = '<i class="fas fa-check-circle"></i>';
            if (type === 'error') iconHtml = '<i class="fas fa-times-circle"></i>';
            if (type === 'warning') iconHtml = '<i class="fas fa-exclamation-triangle"></i>';

            toast.innerHTML = `
                <div class="raz-toast-icon">${iconHtml}</div>
                <div class="raz-toast-text">${message}</div>
            `;

            toastContainer.appendChild(toast);

            setTimeout(() => {
                toast.classList.add('raz-toast-hiding');
                setTimeout(() => {
                    if (toast.parentNode) {
                        toast.parentNode.removeChild(toast);
                    }
                }, 300);
            }, duration);
        }
    };

    return RAZModal;
}));
