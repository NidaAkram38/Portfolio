/* ================================================
   contact.js — Contact Form Handler
   ================================================ */

document.addEventListener('sectionsLoaded', () => {

  window.handleFormSubmit = function () {
    const name    = document.getElementById('senderName')?.value.trim();
    const email   = document.getElementById('senderEmail')?.value.trim();
    const subject = document.getElementById('msgSubject')?.value.trim();
    const body    = document.getElementById('msgBody')?.value.trim();
    const btn     = document.getElementById('submitBtn');

    /* Basic validation */
    if (!name || !email || !body) {
      btn.textContent   = '⚠ Please fill all fields';
      btn.style.background = '#ef4444';
      btn.style.color      = 'white';
      setTimeout(() => resetBtn(btn), 2500);
      return;
    }

    /* ── Option A: Open user's mail client ── */
    const mailto = `mailto:nida@example.com`
      + `?subject=${encodeURIComponent(subject || 'Portfolio Enquiry')}`
      + `&body=${encodeURIComponent(`Hi Nida,\n\n${body}\n\n— ${name} (${email})`)}`;
    window.location.href = mailto;

    /* ── Option B: Replace the line above with a fetch() to your backend / EmailJS ── */

    btn.textContent      = '✓ Message Sent!';
    btn.style.background = '#22c55e';
    btn.style.color      = 'white';
    setTimeout(() => resetBtn(btn), 3000);
  };

  function resetBtn(btn) {
    btn.textContent      = 'Send Message →';
    btn.style.background = '';
    btn.style.color      = '';
  }

});
