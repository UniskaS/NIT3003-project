// ============================================================
// MAIN.JS — Sidebar active state & shared interactions
// ============================================================

// Automatically highlight the correct sidebar item
// based on the current page filename
document.addEventListener('DOMContentLoaded', () => {
  const page = window.location.pathname.split('/').pop() || 'index.html';

  const map = {
    'index.html':        'dashboard',
    'pets.html':         'pets',
    'applications.html': 'applications',
    'analytics.html':    'analytics',
    'settings.html':     'settings',
  };

  const activeId = map[page];
  if (activeId) {
    const el = document.querySelector(`.sidebar-item[data-page="${activeId}"]`);
    if (el) el.classList.add('active');
  }
});
