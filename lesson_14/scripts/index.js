import { initSlider } from './slideShow.js';
import { createPager } from './pager.js';
initSlider();
const body = document.querySelector('body');
const sendMessage = i => {
  console.log('Hello, ' + i);
};
createPager(body, 10, sendMessage);
