const input = document.querySelector('.form .field');
const btn = document.querySelector('.form .btn');
const list = document.querySelector('.form .form__list');
console.log('IMPORTED!');
btn.addEventListener('click', clickHandler);

function clickHandler() {
  // function declaration
  const value = input.value;
  console.log(value);
  if (!value) {
    input.classList.add('error');
    return;
  }
  input.value = '';

  list.innerHTML = list.innerHTML + renderItem(value);
}

const renderItem = text => {
  // arrow function
  const id = Math.floor(Math.random() * 10000);
  const specialDataAttribute = `helo-${id}`;
  return `<li class="form__item" 
    data-test="${specialDataAttribute}" 
    id="${id}">
      ${text}
  </li>`;
};
