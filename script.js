// Menu Toggle
document.querySelector('.hamburger').addEventListener('click', () => {
  document.querySelector('.nav-links').classList.toggle('active');
  const hamburger = document.querySelector('.hamburger');
  hamburger.classList.toggle('active');
});

// Theme Toggle
const toggle = document.getElementById('themeSwitch');
if (toggle) {
  toggle.addEventListener('change', () => {
    document.body.setAttribute('data-theme', toggle.checked ? 'light' : 'dark');
  });
}

// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});
