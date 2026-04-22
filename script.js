const links = document.querySelectorAll('a[href^="#"]');
const availableIds = [...document.querySelectorAll('[id]')].map((element) => element.id).filter(Boolean);

links.forEach((link) => {
  link.addEventListener('click', (event) => {
    const href = link.getAttribute('href');
    if (!href || !href.startsWith('#')) {
      return;
    }

    const target = document.querySelector(href);
    if (!target) {
      console.warn(
        `Navigation target not found for href: ${href}. Check that the corresponding section ID exists. Available IDs: ${availableIds.join(', ')}`
      );
      return;
    }

    event.preventDefault();
    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
});

const body = document.body;
const themeToggle = document.getElementById('theme-toggle');
const themeIcon = document.getElementById('theme-icon');
const themeKey = 'portfolio-theme';

const applyTheme = (theme) => {
  const isDark = theme === 'dark';
  body.classList.toggle('dark', isDark);
  if (themeIcon) {
    themeIcon.textContent = isDark ? '☀️' : '🌙';
  }
};

const storedTheme = localStorage.getItem(themeKey);
if (storedTheme === 'dark' || storedTheme === 'light') {
  applyTheme(storedTheme);
} else {
  const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  applyTheme(systemPrefersDark ? 'dark' : 'light');
}

if (themeToggle) {
  themeToggle.addEventListener('click', () => {
    const nextTheme = body.classList.contains('dark') ? 'light' : 'dark';
    applyTheme(nextTheme);
    localStorage.setItem(themeKey, nextTheme);
  });
}
