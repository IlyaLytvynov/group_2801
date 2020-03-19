/**
 *
 * @param {DOMNode} root элемент дом дерева куда нужно смонтировать созданный ul(пейджер)
 * @param {number} itemCount колличество элементов которые нужно отрисовать
 * @param {function} onItemClick функция которую вызывабт при клике на один их элементов пейджера, для каждого пейджера своя
 */
function createPager(root, itemCount, onItemClick) {
  const btns = [];
  const pagerRoot = document.createElement('ul');

  function deactivate() {
    for (let i = 0; i < btns.length; i++) {
      btns[i].classList.remove('pager__btn_active');
    }
  }

  function activateItem(index) {
    deactivate();
    btns[index].classList.add('pager__btn_active');
  }

  function createItem(i, onItemClick) {
    const li = document.createElement('li');
    const btn = document.createElement('button');
    li.classList.add('pager__item');
    btn.classList.add('pager__btn');

    btn.addEventListener('click', () => {
      onItemClick(i);
      activateItem(i);
    });

    li.append(btn); // Добавляет элемент дочерним для li
    btns.push(btn); // сохраняет для дальнейшей работы
    return li; // Что-бы использовать в строке 36
  }

  function init() {
    pagerRoot.classList.add('pager');

    for (let i = 0; i < itemCount; i++) {
      const li = createItem(i, onItemClick);
      pagerRoot.append(li);
    }

    root.append(pagerRoot);
  }

  init();
}

export { createPager };
