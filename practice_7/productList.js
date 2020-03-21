import { addToCart } from './cart.js';

export function productList(rootElement, products) {
  function createLi(product) {
    const li = document.createElement('li');
    const spanName = document.createElement('span');
    const spanPrice = document.createElement('span');
    const btnAdd = document.createElement('button');
    btnAdd.textContent = 'Add';
    spanName.textContent = product.name;
    spanPrice.textContent = product.price;
    if (product.sale) {
      spanName.style.border = '1px solid orange';
    }
    btnAdd.addEventListener('click', function() {
      addToCart(product);
    });
    li.append(spanName);
    li.append(spanPrice);
    li.append(btnAdd);
    return li;
  }

  function createList() {
    const ul = document.createElement('ul');
    for (let product of products) {
      const li = createLi(product);
      ul.append(li);
    }

    rootElement.append(ul);
  }

  createList();
}
