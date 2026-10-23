

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

// Each converter receives the number and the two unit names, and should return the converted number
function length(value, from, to) {
  let millimeter;
  let centimeter;
  let meter;
  let kilometer;
  let inch;
  let foot;
  let yard;
  let mile;

}

function weight(value, from, to) {
  let milligram;
  let gram;
  let kilogram;
  let ounce;
  let pound;
}

function temperature(value, from, to) {
  const celsius = (inputText - 32) * 5/9;
  const fahrenheit = (inputText * 9/5) + 32;;
  const kelvin = 273 + inputText;
}
