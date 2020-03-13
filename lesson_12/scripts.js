const fruites = [];
const output = document.querySelector('.output');

function render() {
  let content = '';
  for (let i = 0; i < fruites.length; i++) {
    console.log(fruites[i]);
    content = content + '<li class="item">' + fruites[i] + '</li>';
  }
  console.log(content);
  output.innerHTML = content;
}

function addNewFruit() {
  const newFruite = prompt('Enter fruit title');
  fruites.push(newFruite);
  render();
}
