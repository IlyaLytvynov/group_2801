const btn = document.querySelector('.btn');
const block = document.querySelector('.block');
let isEnabled = false;

const ACTIVE_CLASS_NAME = 'active';

function activate() {
  btn.classList.add(ACTIVE_CLASS_NAME);
  block.classList.add(ACTIVE_CLASS_NAME);
  isEnabled = true;
}

function deactivate() {
  btn.classList.remove(ACTIVE_CLASS_NAME);
  block.classList.remove(ACTIVE_CLASS_NAME);
  isEnabled = false;
}

function toggleBlock() {
  if (isEnabled === false) {
    activate();
  } else {
    deactivate();
  }
}
