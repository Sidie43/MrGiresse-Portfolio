// changer la position de mon header
document.addEventListener('scroll', () => {
  const header = document.getElementById('header');
  const scrollPosition = window.scrollY;
  const threshold = window.innerHeight / 15;

  if (scrollPosition > threshold) {
    header.classList.add('hidden');
  } else {
    header.classList.remove('hidden');
  }
});