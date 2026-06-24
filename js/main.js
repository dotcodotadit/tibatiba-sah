/* ============================================================
   Tiba-Tiba Sah — Main
   Progressive enhancement: konten tetap tampil walau GSAP/Lenis
   gagal dimuat. Semua animasi berat dimatikan saat reduced-motion.
   ============================================================ */
(function () {
  'use strict';

  const WA = 'https://wa.me/6285602316285';
  const IMG_BASE = 'https://sgp1.vultrobjects.com/production-invee/templates/';
  const DEMO_BASE = 'https://demo.invee.net/?template=';

  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const isTouch = window.matchMedia('(hover: none)').matches || ('ontouchstart' in window);
  const hasGSAP = typeof window.gsap !== 'undefined';
  const hasLenis = typeof window.Lenis !== 'undefined';

  const $  = (s, c) => (c || document).querySelector(s);
  const $$ = (s, c) => Array.from((c || document).querySelectorAll(s));

  /* ── Helpers ─────────────────────────────────────── */
  const fmtPrice = (n) => 'Rp ' + n.toLocaleString('id-ID');
  const waPlain  = (n) => 'Rp' + n.toLocaleString('id-ID');           // utk pesan WA (sesuai format lama)

  function waThemeLink(name, price) {
    const msg = `Halo Tiba-Tiba Sah, saya tertarik dengan tema ${name} (${waPlain(price)}).`;
    return WA + '?text=' + encodeURIComponent(msg);
  }

  /* ============================================================
     1. GALLERY TEMA (data-driven)
     ============================================================ */
  function renderGallery() {
    const tabsEl = $('#temaTabs');
    const gridEl = $('#temaGrid');
    if (!tabsEl || !gridEl || typeof TT_CATEGORIES === 'undefined') return;

    // Tabs
    tabsEl.innerHTML = TT_CATEGORIES.map((c, i) =>
      `<button class="tab-btn${i === 0 ? ' active' : ''}" role="tab" data-cat="${c.key}">${c.label}</button>`
    ).join('');

    function cardHTML(t) {
      return `
        <article class="tema-card">
          <div class="tema-card-media">
            <img src="${IMG_BASE}${t.img}.jpg" alt="${t.name}" loading="lazy" />
            <div class="tema-overlay"></div>
            ${t.premium ? '<span class="tema-crown">Premium</span>' : ''}
          </div>
          <div class="tema-info">
            <div class="tema-name">${t.name}</div>
            <div class="tema-actions">
              <a class="tema-demo" href="${DEMO_BASE}${t.demo}" target="_blank" rel="noopener">Live Demo</a>
              <a class="tema-price" href="${waThemeLink(t.name, t.price)}" target="_blank" rel="noopener">${fmtPrice(t.price)}</a>
            </div>
          </div>
        </article>`;
    }

    function show(cat) {
      const items = TT_THEMES.filter(t => t.cat === cat);
      gridEl.innerHTML = items.map(cardHTML).join('');
      if (hasGSAP && !reduceMotion) {
        window.gsap.fromTo(gridEl.children,
          { opacity: 0, y: 24 },
          { opacity: 1, y: 0, duration: .5, stagger: .04, ease: 'power2.out', overwrite: true });
      }
    }

    tabsEl.addEventListener('click', (e) => {
      const btn = e.target.closest('.tab-btn');
      if (!btn) return;
      $$('.tab-btn', tabsEl).forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      show(btn.dataset.cat);
    });

    show(TT_CATEGORIES[0].key);
  }

  /* ── Showcase marquee (cuplikan tema asli) ───────── */
  function renderShowcase() {
    const track = $('#showcaseTrack');
    if (!track || typeof TT_THEMES === 'undefined') return;
    // pilih 14 tema beragam, lalu digandakan agar loop mulus
    const picks = TT_THEMES.filter((_, i) => i % 5 === 0).slice(0, 14);
    const itemHTML = (t) =>
      `<div class="showcase-item"><img src="${IMG_BASE}${t.img}.jpg" alt="" loading="lazy" /></div>`;
    track.innerHTML = (picks.map(itemHTML).join('')) + (picks.map(itemHTML).join(''));
  }

  /* ============================================================
     2. PRELOADER
     ============================================================ */
  function initPreloader() {
    const pre = $('#preloader');
    if (!pre) return;
    const finish = () => {
      pre.classList.add('done');
      document.body.classList.remove('no-scroll');
      startHero();
    };
    if (reduceMotion) { finish(); return; }
    document.body.classList.add('no-scroll');
    window.addEventListener('load', () => setTimeout(finish, 700));
    setTimeout(finish, 2500); // fallback bila 'load' lama
  }

  function startHero() {
    const hero = $('#hero');
    if (hero) hero.classList.add('hero-ready');
  }

  /* ============================================================
     3. SMOOTH SCROLL (Lenis) + GSAP ScrollTrigger sync
     ============================================================ */
  let lenis = null;
  function initSmoothScroll() {
    if (!hasLenis || reduceMotion || isTouch) return;
    lenis = new window.Lenis({ duration: 1.1, smoothWheel: true });
    function raf(time) { lenis.raf(time); requestAnimationFrame(raf); }
    requestAnimationFrame(raf);
    if (hasGSAP && window.ScrollTrigger) {
      lenis.on('scroll', window.ScrollTrigger.update);
    }
  }

  // Anchor links → smooth scroll (Lenis bila ada, native fallback)
  function initAnchors() {
    $$('a[href^="#"]').forEach(a => {
      a.addEventListener('click', (e) => {
        const id = a.getAttribute('href');
        if (id.length < 2) return;
        const target = document.querySelector(id);
        if (!target) return;
        e.preventDefault();
        closeMenu();
        if (lenis) lenis.scrollTo(target, { offset: -70 });
        else target.scrollIntoView({ behavior: reduceMotion ? 'auto' : 'smooth' });
      });
    });
  }

  /* ============================================================
     4. REVEAL ON SCROLL
     ============================================================ */
  function initReveal() {
    const els = $$('.reveal, .reveal-stagger');
    if (reduceMotion || !('IntersectionObserver' in window)) {
      els.forEach(el => el.classList.add('is-in'));
      return;
    }
    const io = new IntersectionObserver((entries) => {
      entries.forEach(en => {
        if (en.isIntersecting) { en.target.classList.add('is-in'); io.unobserve(en.target); }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -8% 0px' });
    els.forEach(el => io.observe(el));
  }

  /* ============================================================
     5. NAV — scrolled state + mobile menu
     ============================================================ */
  const nav = $('#nav');
  const navToggle = $('#navToggle');
  function closeMenu() {
    if (!nav) return;
    nav.classList.remove('open');
    if (navToggle) { navToggle.setAttribute('aria-expanded', 'false'); navToggle.setAttribute('aria-label', 'Buka menu'); }
  }
  function initNav() {
    if (navToggle && nav) {
      navToggle.addEventListener('click', () => {
        const open = nav.classList.toggle('open');
        navToggle.setAttribute('aria-expanded', String(open));
        navToggle.setAttribute('aria-label', open ? 'Tutup menu' : 'Buka menu');
      });
    }
    const onScroll = () => { if (nav) nav.classList.toggle('scrolled', window.scrollY > 30); };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
  }

  /* ============================================================
     6. FAQ accordion
     ============================================================ */
  function initFaq() {
    $$('.faq-item').forEach(item => {
      const q = $('.faq-q', item);
      const a = $('.faq-a', item);
      if (!q || !a) return;
      q.addEventListener('click', () => {
        const open = item.classList.contains('open');
        $$('.faq-item.open').forEach(o => { o.classList.remove('open'); $('.faq-a', o).style.maxHeight = null; });
        if (!open) { item.classList.add('open'); a.style.maxHeight = a.scrollHeight + 'px'; }
      });
    });
  }

  /* ============================================================
     7. SCROLL PROGRESS + back-to-top
     ============================================================ */
  function initScrollUI() {
    const bar = $('#scrollProgress');
    const toTop = $('#toTop');
    const onScroll = () => {
      const h = document.documentElement.scrollHeight - window.innerHeight;
      const p = h > 0 ? (window.scrollY / h) * 100 : 0;
      if (bar) bar.style.width = p + '%';
      if (toTop) toTop.classList.toggle('show', window.scrollY > 400);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    if (toTop) toTop.addEventListener('click', () => {
      if (lenis) lenis.scrollTo(0); else window.scrollTo({ top: 0, behavior: reduceMotion ? 'auto' : 'smooth' });
    });
  }

  /* ============================================================
     9. COUNTER (hero stats)
     ============================================================ */
  function initCounters() {
    const nums = $$('.stat-num[data-count]');
    if (!nums.length) return;
    if (reduceMotion || !('IntersectionObserver' in window)) {
      nums.forEach(n => { n.textContent = n.dataset.count + (n.dataset.suffix || ''); });
      return;
    }
    const io = new IntersectionObserver((entries) => {
      entries.forEach(en => {
        if (!en.isIntersecting) return;
        const el = en.target, target = parseInt(el.dataset.count, 10), suffix = el.dataset.suffix || '';
        let cur = 0; const steps = 36, inc = target / steps;
        const tick = () => {
          cur += inc;
          if (cur >= target) { el.textContent = target + suffix; }
          else { el.textContent = Math.floor(cur) + suffix; requestAnimationFrame(tick); }
        };
        tick(); io.unobserve(el);
      });
    }, { threshold: 0.5 });
    nums.forEach(n => io.observe(n));
  }

  /* ============================================================
     10. HERO parallax (GSAP) — halus & ditahan
     ============================================================ */
  function initHeroParallax() {
    if (!hasGSAP || !window.ScrollTrigger || reduceMotion) return;
    window.gsap.registerPlugin(window.ScrollTrigger);
    window.gsap.to('.hero-glow', {
      yPercent: 18, ease: 'none',
      scrollTrigger: { trigger: '#hero', start: 'top top', end: 'bottom top', scrub: true }
    });
    window.gsap.to('.hero-inner', {
      yPercent: 8, opacity: .65, ease: 'none',
      scrollTrigger: { trigger: '#hero', start: 'top top', end: 'bottom top', scrub: true }
    });
  }

  /* ── Boot ────────────────────────────────────────── */
  function init() {
    renderGallery();
    renderShowcase();
    initPreloader();
    initSmoothScroll();
    initAnchors();
    initReveal();
    initNav();
    initFaq();
    initScrollUI();
    initCounters();
    initHeroParallax();
    if (reduceMotion) startHero();
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();
