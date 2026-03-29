/* ================================================
   contact.js — Contact Form Handler (Formspree)
   ================================================ */
document.addEventListener('sectionsLoaded', () => {

  const form = document.getElementById('contactForm');
  if (!form) return;

  form.addEventListener('submit', async function (e) {
    e.preventDefault();

    const btn = document.getElementById('submitBtn');
    btn.textContent = 'Sending...';
    btn.disabled = true;

    const data = new FormData(form);

    const response = await fetch(form.action, {
      method: 'POST',
      body: data,
      headers: { 'Accept': 'application/json' }
    });

    if (response.ok) {
      form.style.display = 'none';
      document.getElementById('thankYouMsg').style.display = 'block';
    } else {
      btn.textContent = '⚠ Something went wrong!';
      btn.style.background = '#ef4444';
      btn.style.color = 'white';
      btn.disabled = false;
      setTimeout(() => {
        btn.textContent = 'Send Message →';
        btn.style.background = '';
        btn.style.color = '';
      }, 3000);
    }
  });

});
