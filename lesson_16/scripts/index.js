import { SlideShow } from './SlideShow.js';
import './Ajax.js';

const slideShowContainer = document.querySelector('.slider');
const mainSlideshow = new SlideShow(slideShowContainer);
mainSlideshow.init();
