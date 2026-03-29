/* ================================================
   animations.js — Scroll-triggered fade-in,
   skill bar fill, and timeline reveal
   ================================================ */

document.addEventListener('sectionsLoaded', () => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;

      const el = entry.target;
      el.classList.add('visible');

      /* Animate skill progress bars */
      el.querySelectorAll('.skill-fill').forEach(bar => {
        bar.style.width = bar.dataset.width + '%';
      });

      /* Stagger timeline items (Education) */
      el.querySelectorAll('.timeline-item').forEach((item, i) => {
        setTimeout(() => item.classList.add('visible'), i * 150);
      });

      /* Stagger experience items */
      el.querySelectorAll('.exp-item').forEach((item, i) => {
        setTimeout(() => item.classList.add('visible'), i * 150);
      });

    });
  }, { threshold: 0.12 });

  /* Observe every .fade-up element */
  document.querySelectorAll('.fade-up').forEach(el => observer.observe(el));
});
