/* CampusNav Theme Toggle */
(function () {
  const KEY = 'campusnav_theme';

  function apply(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem(KEY, theme);
    const btn = document.getElementById('themeToggle');
    if (btn) btn.textContent = theme === 'dark' ? '☀️' : '🌙';
  }

  function toggle() {
    const current = document.documentElement.getAttribute('data-theme') || 'dark';
    apply(current === 'dark' ? 'light' : 'dark');
  }

  window.__themeToggle = toggle;

  const saved = localStorage.getItem(KEY) || 'dark';
  // Apply immediately before paint
  document.documentElement.setAttribute('data-theme', saved);

  document.addEventListener('DOMContentLoaded', function () {
    apply(saved);
  });
})();
