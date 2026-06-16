/* ============================================
   Tiba-Tiba Sah — Script
   ============================================ */

// Menu mobile (hamburger)
const navEl = document.querySelector('nav');
const navToggle = document.querySelector('.nav-toggle');
if (navToggle && navEl) {
  navToggle.addEventListener('click', () => {
    const isOpen = navEl.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', isOpen);
    navToggle.setAttribute('aria-label', isOpen ? 'Tutup menu' : 'Buka menu');
  });
  // Tutup menu otomatis setelah salah satu link diklik
  document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
      navEl.classList.remove('open');
      navToggle.setAttribute('aria-expanded', 'false');
      navToggle.setAttribute('aria-label', 'Buka menu');
    });
  });
}

// Tab switcher (Pilihan Tema)
function switchTab(name, btn) {
  document.querySelectorAll('.tema-section').forEach(s => s.classList.remove('active'));
  document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
  document.getElementById('tab-' + name).classList.add('active');
  btn.classList.add('active');
}

// FAQ accordion
function toggleFaq(el) {
  const isOpen = el.classList.contains('open');
  document.querySelectorAll('.faq-item.open').forEach(i => i.classList.remove('open'));
  if (!isOpen) el.classList.add('open');
}

// Scroll reveal — fade-in tiap section saat masuk viewport
const revealEls = document.querySelectorAll('.reveal');
if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  revealEls.forEach(el => observer.observe(el));
} else {
  revealEls.forEach(el => el.classList.add('is-visible'));
}
