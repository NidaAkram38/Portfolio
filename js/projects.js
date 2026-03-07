/* ================================================
   projects.js — Live Preview Modal
   ================================================ */

document.addEventListener('sectionsLoaded', () => {

  /* ── Open modal with project URL ── */
  window.openModal = function (title, url) {
    document.getElementById('modalTitle').textContent = title;
    document.getElementById('modalUrl').textContent   = url;

    /* Reset iframe */
    const frame   = document.getElementById('modalFrame');
    const loading = document.getElementById('modalLoading');
    frame.src            = 'about:blank';
    frame.style.display  = 'none';
    loading.style.display = 'flex';

    document.getElementById('previewModal').classList.add('open');
    document.body.style.overflow = 'hidden';

    /* Short delay before loading so modal animates in first */
    setTimeout(() => { frame.src = url; }, 300);
  };

  /* ── iframe onload callback ── */
  window.onFrameLoad = function () {
    document.getElementById('modalLoading').style.display = 'none';
    document.getElementById('modalFrame').style.display   = 'block';
  };

  /* ── Close modal ── */
  window.closeModal = function () {
    document.getElementById('previewModal').classList.remove('open');
    document.getElementById('modalFrame').src = 'about:blank';
    document.body.style.overflow = '';
  };

  /* Close when clicking backdrop */
  window.closeModalOutside = function (e) {
    if (e.target === document.getElementById('previewModal')) closeModal();
  };

  /* Close on Escape key */
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') closeModal();
  });

});
