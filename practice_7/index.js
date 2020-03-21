import {
  toString,
  totalSum,
  mapArray,
  findMax,
  getTotalPrice,
  filterMaxValues
} from './functions.js';

const str = toString(['Hello', 'world']);
console.log(str);
const cartTotal = totalSum([10, '20', 50, 100]);
console.log(cartTotal);
const strLength = ['Hello', 'worldфывфыв'].map(item => {
  return item.length;
});
console.log(strLength);
const max = findMax([10, 20, 10, 5, 26, 100]);
console.log(max);

const cart = [
  {
    name: 'Iphone',
    price: 1400
  },
  {
    name: 'MacBook',
    price: 3000
  },
  {
    name: 'Samsung galaxy',
    price: 1200
  }
];

const totalPrice = getTotalPrice(cart);
const filteredValues = filterMaxValues([0, 23, 45, 15, 48, 20, 24, 55], 40);
console.log('FILTERD VALUES', filteredValues);
