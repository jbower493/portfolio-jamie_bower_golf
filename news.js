const toggle = document.getElementById('toggle');
const navLinks = document.querySelectorAll('.nav-link');
const loader = document.getElementsByClassName('loader')[0];

// loader
window.addEventListener('load', () => {
  loader.classList.add('hidden');
});

// open and close mobile nav
toggle.addEventListener('click', () => {
  document.body.classList.toggle('open');
});