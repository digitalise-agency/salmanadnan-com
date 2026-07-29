/* salmanadnan.com · main.js
   Scroll-driven animations. Zero external dependencies. */

(function () {
  'use strict';

  /* ── Nav gloss on scroll ── */
  const nav = document.querySelector('.nav');
  if (nav) {
    const tick = () => nav.classList.toggle('scrolled', window.scrollY > 40);
    window.addEventListener('scroll', tick, { passive: true });
    tick();
  }

  /* ── Counter animation ── */
  function animateCounter(el) {
    const raw    = el.dataset.target || '0';
    const suffix = el.dataset.suffix || '';
    const target = parseFloat(raw.replace(/[^0-9.]/g, ''));
    const isFloat = raw.includes('.');
    const dec     = isFloat ? (raw.split('.')[1] || '').length : 0;
    const dur     = 2200;
    const start   = performance.now();

    const step = (now) => {
      const p     = Math.min((now - start) / dur, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      const val   = eased * target;
      el.textContent = (isFloat ? val.toFixed(dec) : Math.round(val).toLocaleString()) + suffix;
      if (p < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }

  /* ── Intersection observer helper ── */
  function observe(selector, className, threshold, cb) {
    const els = document.querySelectorAll(selector);
    if (!els.length) return;
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (!e.isIntersecting) return;
        e.target.classList.add(className || 'visible');
        if (cb) cb(e.target);
        io.unobserve(e.target);
      });
    }, { threshold: threshold || 0.18 });
    els.forEach((el) => io.observe(el));
  }

  observe('.reveal', 'visible', 0.15);
  observe('.stagger', 'visible', 0.15);
  observe('.metric-num[data-target]', 'counted', 0.5, animateCounter);

  /* ── Smooth anchor scroll ── */
  document.querySelectorAll('a[href^="#"]').forEach((a) => {
    a.addEventListener('click', (e) => {
      const t = document.querySelector(a.getAttribute('href'));
      if (!t) return;
      e.preventDefault();
      t.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  });

})();
