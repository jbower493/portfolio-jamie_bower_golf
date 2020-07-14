const toggle = document.getElementById('toggle');

toggle.addEventListener('click', () => {
  document.body.classList.toggle('open');
});

const navLinks = document.querySelectorAll('.nav-link');

navLinks.forEach(link => {
  link.addEventListener('click', () => {
    document.body.classList.remove('open');
  });
});