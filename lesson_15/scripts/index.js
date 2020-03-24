import { Lighter } from './lighter.js';

const body = document.querySelector('body');
const myLighter = new Lighter(body);

myLighter.render();
window.myTestTestSwitcher = myLighter;

function forEach(arr, fn) {
  for (let i = 0; i < arr.length; i++) {
    fn(arr[i], i, arr);
  }
}

forEach(['test', 'hello', 'world'], (item, i) => {
  console.log(item.toUpperCase());
});
