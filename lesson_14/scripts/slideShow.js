const slideShowRoot = document.querySelector('.slideshow');
const slides = document.querySelectorAll('.slideshow__slide');
const [prevControl, nextControl] = document.querySelectorAll(
  '.slideshow__control'
);
let activeSlideIndex = 0;

function toggleOnNext() {
  const activeSlide = slides[activeSlideIndex];
  activeSlide.classList.add('slide_active');
}

function toggleOffPrev() {
  const activeSlide = slides[activeSlideIndex];
  activeSlide.classList.remove('slide_active');
}

function increaseIndex() {
  if (activeSlideIndex + 1 < slides.length) {
    activeSlideIndex++;
  } else {
    activeSlideIndex = 0;
  }
}

function decreaseIndex() {
  if (activeSlideIndex - 1 >= 0) {
    activeSlideIndex--;
  } else {
    activeSlideIndex = slides.length - 1; // дает нужный индекс максимального элемента
  }
}

function onNextButtonClick() {
  toggleOffPrev();
  increaseIndex();
  toggleOnNext();
}

function onPrevButtonClick() {
  toggleOffPrev();
  decreaseIndex();
  toggleOnNext();
}

function addDynamicStyles() {
  for (let i = 0; i < slides.length; i++) {
    const slide = slides[i];
    slide.classList.add('animate');
    slide.style.transform = `translateX(-${100 * i}%)`;
  }
}

function createPager() {
  const pagerRoot = document.createElement('ul');
  pagerRoot.classList.add('pager');

  for (let i = 0; i < slides.length; i++) {
    const li = document.createElement('li');
    const button = document.createElement('button');
    li.classList.add('pager__item');
    button.classList.add('pager__btn');
    button.addEventListener('click', () => {
      toggleOffPrev();
      activeSlideIndex = i;
      toggleOnNext();
    });
    li.append(button);
    pagerRoot.append(li);
  }

  slideShowRoot.append(pagerRoot);
}

function initSlider() {
  addDynamicStyles();
  createPager();
  addEventListeners();
}

function addEventListeners() {
  prevControl.addEventListener('click', onPrevButtonClick);
  nextControl.addEventListener('click', onNextButtonClick);
}

export { initSlider };
