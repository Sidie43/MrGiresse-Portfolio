const inputs = document.getElementsByClassName('contact-text');
const btn = document.getElementById('btn');
const btnText = document.getElementById('btnText');
const loading = document.getElementById('loading');
const form = document.getElementById('form');


function checkAllInputs() {
  let areAllInputsFilled = true;

  for (let input of inputs) {
    if (input.value.trim().length <= 2) {
      areAllInputsFilled = false;
      break
    }
  }

  btn.disabled = !areAllInputsFilled;

  // Active ou désactive l'effet de survol
  if (areAllInputsFilled) {
    btn.style.backgroundColor = '#007bff';
    btn.style.color = '#fff';
    btn.addEventListener('mouseover', () => {
      btn.style.cursor = 'pointer';
    });
  } else {
    btn.style.backgroundColor = '';
    btn.style.color = '';
    btn.addEventListener('mouseover', () => {
      btn.style.cursor = 'not-allowed';
    });
  }
}

for (let input of inputs) {
  input.addEventListener('input', checkAllInputs);
}

form.addEventListener('submit', function (event) {
  event.preventDefault();

  btn.style.backgroundColor = '#026ad8';
  btn.style.transform = 'scale(1.03)';
  btn.style.color = '#fff';
  btnText.style.display = 'none';
  loading.style.display = 'inline-block';

  setTimeout(() => {
    form.action = "https://getform.io/f/anlljgxa";
    form.method = 'POST';
    form.submit()
  }, 2000);

  setTimeout(() => {
    btnText.style.display = 'block';
    loading.style.display = 'none';
  }, 3000);
});


// rédirection sur la page d'acceuille lors du click sur le logo
document.querySelector('.logo').addEventListener('click', function () {
  window.location.href = '../acceuil/index.html';
});


// changer la position de mon header
document.addEventListener('scroll', () => {
  const header = document.getElementById('header');
  const scrollPosition = window.scrollY;
  const threshold = window.innerHeight / 10;

  if (scrollPosition > threshold) {
    header.classList.add('hidden');
  } else {
    header.classList.remove('hidden');
  }
});