// rédirection sur la page d'acceuille lors du click sur le logo
document.querySelector('.logo').addEventListener('click', function() {
  window.location.href = 'index.html';
});


// Animation et changement de nom et travail
const textElement = document.getElementById('text');
const texts = ["Mr Giresse", "Web designer.", "Web developper", "Content Creator"];
let index = 0;

function changeText() {
  textElement.style.opacity = 0;

  setTimeout(() => {
    index = (index + 1) % texts.length;

    textElement.textContent = texts[index];
    textElement.style.opacity = 1;
  }, 1000);
}

setInterval(changeText, 3000);


// animation sur le profi
  const profil = document.getElementById('fist-img');
  const secondProfil = document.getElementById('second-img');

  document.addEventListener('DOMContentLoaded', function(event) {
    event.preventDefault();
    profil.classList.add('show');

    secondProfil.classList.add('show-second-img');
  });

  // changer la position de mon header
document.addEventListener('scroll', () => {
  const header = document.getElementById('header');
  const scrollPosition = window.scrollY;
  const threshold = window.innerHeight / 5;

  if (scrollPosition > threshold) {
    header.classList.add('hidden');
  } else {
    header.classList.remove('hidden');
  }
});