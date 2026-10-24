

const form = document.querySelector('.converter-form');
const inputText = document.querySelector('.input-text');
const inputFrom = document.querySelector('.input-from');
const inputTo = document.querySelector('.input-to');

const resultSection = document.querySelector('.result');
const resultText = document.querySelector('.result-text');
const resetButton = document.querySelector('.button-reset');

// Each page has its own convert button class, so use it to pick the converter
let converter;
if (document.querySelector('.button-length')) {
  converter = length;
} else if (document.querySelector('.button-weight')) {
  converter = weight;
} else if (document.querySelector('.button-temperature')) {
  converter = temperature;
}

form.addEventListener('submit', (event) => {
  event.preventDefault(); // stop the form from reloading the page

  const value = Number(inputText.value);
  const from = inputFrom.value.trim().toLowerCase();
  const to = inputTo.value.trim().toLowerCase();

  const answer = converter(value, from, to);

  resultText.textContent = `${value} ${from} = ${answer} ${to}`;
  form.classList.add('hidden');
  resultSection.classList.remove('hidden');
});

resetButton.addEventListener('click', () => {
  form.reset();
  resultText.textContent = '';
  resultSection.classList.add('hidden');
  form.classList.remove('hidden');
  inputText.focus();
});

function length(value, from, to) {
  const lengthConvert = {
    mm: {
      mm: 1,
      cm: 0.1,
      m: 0.001,
      km: 0.000001
    },
    cm: {
      mm: 10,
      cm: 1,
      m: 0.01,
      km: 0.00001
    },
    m: {
      mm: 1000,
      cm: 100,
      m: 1,
      km: 0.001
    },
    km: {
      mm: 0.000001,
      cm: 100000,
      m: 1000,
      km: 1
    }
  }
}

function weight(value, from, to) {
  const weightConvert = {
    mg: {
      mg: 1,
      g: 0.001,
      kg: 0.000001,
      oz: 0.000035274,
    },
    g: {
      mg: 1,
      g: 0.001,
      kg: 0.000001,
      oz: 0.000035274,
    },
    kg: {
      mg: 1,
      g: 0.001,
      kg: 0.000001,
      oz: 0.000035274,
    },
    oz: {
      mg: 1,
      g: 0.001,
      kg: 0.000001,
      oz: 0.000035274,
    }
  }
}

function temperature(value, from, to) {
  const celsius = (inputText - 32) * 5/9;
  const fahrenheit = (inputText * 9/5) + 32;;
  const kelvin = 273 + inputText;
}
