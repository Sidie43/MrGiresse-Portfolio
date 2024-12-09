document.getElementById('contactBtn').addEventListener('click', () => {
  slowScrollTo(document.getElementById('contact'));
});

function slowScrollTo(target) {
  const targetPosition = target.getBoundingClientRect().top + window.scrollY;
  const startPosition = window.scrollY;
  const distance = targetPosition - startPosition;
  const duration = 2000;

  let startTime = null;

  function animation(currentTime) {
    if (startTime === null)
      startTime = currentTime;
    const timeElapsed = currentTime - startTime;
    const run = easeInOutQuad(timeElapsed, startPosition, distance, duration);
    window.scrollTo(0, run);
    if (timeElapsed < duration)
      requestAnimationFrame(animation);
  }

  function easeInOutQuad(t, b, c, d) {
    t /= d / 2;
    if (t< 1) return c / 2 * t * t +b;
    t--;
    return -c / 2 * (t * (t - 2) - 1) + b; 
  }

  requestAnimationFrame(animation);
  setTimeout(() => {
    window.location.href = 'contact.html';
  }, 10000);
}


// animation lorsqu'on click sur le button
document.getElementById('button').addEventListener('click', () => {
  document.getElementById('btnText').style.display = 'none';
  document.getElementById('loading').style.display = 'block';
  setTimeout(() => {
    window.location.href = 'contact.html';
  }, 2000);

  setTimeout(() => {
    document.getElementById('btnText').style.display = 'block';
    document.getElementById('loading').style.display = 'none';
  }, 3000);
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

// animation sur le profi
const profil = document.getElementById('fist-img');
const secondProfil = document.getElementById('second-img');

document.addEventListener('DOMContentLoaded', function(event) {
  event.preventDefault();
  profil.classList.add('showe');

  secondProfil.classList.add('showe-second-img');
});

// faire apparaître l'img en grand
const modulImg = document.getElementById ('modul-img');
const image = document.getElementById ('imag');

image.addEventListener('click', function(event) {
  event.preventDefault();
  modulImg.style.display = 'inline-block';
});

window.addEventListener('click', function(event) {
  if (event.target === modulImg) {
    modulImg.style.display = 'none';
  }
});
