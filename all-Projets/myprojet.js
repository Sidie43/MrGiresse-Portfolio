// changer la position de mon header
document.addEventListener('scroll', () => {
  const header = document.getElementById('header');
  const scrollPosition = window.scrollY;
  const threshold = window.innerHeight / 2;

  if (scrollPosition > threshold) {
    header.classList.add('hidden');
  } else {
    header.classList.remove('hidden');
  }
});


// rédirection sur la page d'acceuille lors du click sur le logo
document.querySelector('.logo').addEventListener('click', function() {
  window.location.href = '../acceuil/index.html';
});