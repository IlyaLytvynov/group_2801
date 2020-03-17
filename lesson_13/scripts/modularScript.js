import { add } from './calculations.js';
const btn = document.querySelector('.btn');

btn.addEventListener('click', calculate);

function calculate() {
  const output = document.querySelector('.output');
  const a = prompt('A');
  const b = prompt('B');

  output.innerHTML = `<h2>${add(a, b)}</h2>`;
}
