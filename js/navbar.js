/* ================================================
   navbar.js — Mobile menu toggle & active link
   ================================================ */

document.addEventListener('sectionsLoaded', () => {

  const hamburger = document.getElementById('hamburger');
  const navLinks  = document.getElementById('navLinks');

  /* ── Hamburger toggle ── */
  hamburger?.addEventListener('click', () => {
    navLinks?.classList.toggle('open');
  });

  /* Close menu when a link is clicked */
  document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => navLinks?.classList.remove('open'));
  });

  /* ── Active link highlight on scroll ── */
  const allSections = document.querySelectorAll('section[id]');
  const allNavLinks = document.querySelectorAll('.nav-links a');

  window.addEventListener('scroll', () => {
    let current = '';
    allSections.forEach(sec => {
      if (window.scrollY >= sec.offsetTop - 80) current = sec.id;
    });
    allNavLinks.forEach(a => {
      const isActive = a.getAttribute('href') === `#${current}`;
      a.style.color = isActive ? 'var(--sky)' : '';
    });
  });

});
