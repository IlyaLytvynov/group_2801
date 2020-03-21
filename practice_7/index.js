import { productList } from './productList.js';
import { createCart } from './cart.js';

const sideBar = document.querySelector('.page__sidebar');
const content = document.querySelector('.content');
const header = document.querySelector('header');
const phones = [
  {
    name: 'Iphone',
    price: 1400,
    id: '0'
  },
  {
    name: 'MacBook',
    price: 3000,
    sale: true,
    id: '1'
  },
  {
    name: 'Samsung galaxy',
    price: 1200,
    id: '2'
  },
  {
    name: 'Samsung galaxy 10',
    price: 1800,
    id: '3'
  }
];

const courses = [
  {
    name: 'Js for beginners',
    price: 250,
    id: '0'
  },
  {
    name: 'C++ for advanced',
    price: 200,
    id: '1'
  },
  {
    name: '.NET for freelancers',
    price: 180,
    id: '2'
  }
];
createCart(header);
productList(sideBar, phones);
productList(content, courses);
