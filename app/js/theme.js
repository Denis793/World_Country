export function setupThemeToggle() {
  const themeToggle = document.getElementById('theme-toggle');
  const body = document.body;

  if (localStorage.getItem('theme') === 'dark') {
    body.classList.add('dark-theme');
    themeToggle.checked = true;
  }

  themeToggle.addEventListener('change', () => {
    body.classList.toggle('dark-theme');
    if (body.classList.contains('dark-theme')) {
      localStorage.setItem('theme', 'dark');
    } else {
      localStorage.setItem('theme', 'light');
    }
  });
}
