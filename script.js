(() => {
    'use strict';

    const navbar     = document.getElementById('navbar');
    const menuBtn    = document.getElementById('mobileMenu');
    const mobileNav  = document.getElementById('mobileNav');
    const mobileLinks = document.querySelectorAll('.mobile-link');
    const themeToggle = document.getElementById('themeToggle');
    const yearEl     = document.getElementById('year');
    const navLinks   = document.querySelectorAll('.nav-link');
    const sections   = Array.from(document.querySelectorAll('main > .section'));

    if (yearEl) yearEl.textContent = String(new Date().getFullYear());

    /* ------- Theme ------- */
    const THEME_KEY = 'hl-theme';
    const prefersLight = window.matchMedia('(prefers-color-scheme: light)');

    const applyTheme = (theme) => {
        document.documentElement.setAttribute('data-theme', theme);
    };

    const initTheme = () => {
        const stored = localStorage.getItem(THEME_KEY);
        if (stored === 'light' || stored === 'dark') {
            applyTheme(stored);
        } else {
            applyTheme(prefersLight.matches ? 'light' : 'dark');
        }
    };
    initTheme();

    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
            const current = document.documentElement.getAttribute('data-theme') || 'dark';
            const next = current === 'dark' ? 'light' : 'dark';
            applyTheme(next);
            localStorage.setItem(THEME_KEY, next);
        });
    }

    prefersLight.addEventListener?.('change', (e) => {
        if (!localStorage.getItem(THEME_KEY)) {
            applyTheme(e.matches ? 'light' : 'dark');
        }
    });

    /* ------- Mobile menu ------- */
    const closeMenu = () => {
        if (!menuBtn || !mobileNav) return;
        menuBtn.setAttribute('aria-expanded', 'false');
        mobileNav.classList.remove('is-open');
        mobileNav.setAttribute('aria-hidden', 'true');
    };

    if (menuBtn && mobileNav) {
        menuBtn.addEventListener('click', () => {
            const expanded = menuBtn.getAttribute('aria-expanded') === 'true';
            menuBtn.setAttribute('aria-expanded', String(!expanded));
            mobileNav.classList.toggle('is-open', !expanded);
            mobileNav.setAttribute('aria-hidden', String(expanded));
        });

        mobileLinks.forEach((link) => link.addEventListener('click', closeMenu));

        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') closeMenu();
        });

        window.addEventListener('resize', () => {
            if (window.innerWidth > 860) closeMenu();
        });
    }

    /* ------- Navbar shadow on scroll ------- */
    const onScroll = () => {
        if (!navbar) return;
        navbar.classList.toggle('is-scrolled', window.scrollY > 8);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });

    /* ------- Scroll-spy active nav link ------- */
    const linkByTarget = new Map();
    navLinks.forEach((link) => {
        const target = link.getAttribute('data-target');
        if (target) linkByTarget.set(target, link);
    });

    const setActive = (id) => {
        navLinks.forEach((l) => l.classList.remove('is-active'));
        const el = linkByTarget.get(id);
        if (el) el.classList.add('is-active');
    };

    if ('IntersectionObserver' in window && sections.length) {
        const spy = new IntersectionObserver((entries) => {
            const visible = entries
                .filter((e) => e.isIntersecting)
                .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
            if (visible && visible.target.id) {
                setActive(visible.target.id);
            }
        }, {
            rootMargin: '-45% 0px -45% 0px',
            threshold: [0, 0.25, 0.5, 0.75, 1],
        });
        sections.forEach((sec) => spy.observe(sec));
    }

    /* ------- Reveal on scroll ------- */
    const reveals = document.querySelectorAll('.reveal');
    if ('IntersectionObserver' in window) {
        const io = new IntersectionObserver((entries, observer) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
        reveals.forEach((el) => io.observe(el));
    } else {
        reveals.forEach((el) => el.classList.add('is-visible'));
    }
})();
