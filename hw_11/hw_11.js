const btn = document.querySelector('.btn');
const block = document.querySelector('.block');
let isEnabled = false;

const TOGGLE_OFF_BG_COLOR = btn.style.backgroundColor || 'red';
const TOOGGLE_ON_BG_COLOR = 'green';

btn.style.backgroundColor = TOGGLE_OFF_BG_COLOR;
block.style.display = 'none';

function toggleBlock() {
  if (isEnabled === false) {
    btn.style.backgroundColor = TOOGGLE_ON_BG_COLOR;
    block.style.display = 'block';
    isEnabled = true;
  } else {
    btn.style.backgroundColor = TOGGLE_OFF_BG_COLOR;
    block.style.display = 'none';
    isEnabled = false;
  }
}
