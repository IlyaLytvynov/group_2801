import { getTotalPrice } from './functions.js';

const cartProducts = [];
let span = document.createElement('span');

export function createCart(rootElement) {
  span.textContent = 0;
  rootElement.append(span);
}

export function addToCart(product) {
  cartProducts.push(product);
  span.textContent = getTotalPrice(cartProducts);
}

function getCartProducts() {
  return cartProducts;
}

window.addToCart = addToCart;
window.getCartProducts = getCartProducts;
