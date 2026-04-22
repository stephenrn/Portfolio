const links = document.querySelectorAll('.nav-links a, .hero .btn');

links.forEach((link) => {
  link.addEventListener('click', (event) => {
    const href = link.getAttribute('href');
    if (!href || !href.startsWith('#')) {
      return;
    }

    const target = document.querySelector(href);
    if (!target) {
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
  themeIcon.textContent = isDark ? '☀️' : '🌙';
};

const storedTheme = localStorage.getItem(themeKey);
if (storedTheme === 'dark' || storedTheme === 'light') {
  applyTheme(storedTheme);
}

themeToggle.addEventListener('click', () => {
  const nextTheme = body.classList.contains('dark') ? 'light' : 'dark';
  applyTheme(nextTheme);
  localStorage.setItem(themeKey, nextTheme);
});
