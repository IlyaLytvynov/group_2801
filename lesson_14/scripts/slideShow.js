const slides = document.querySelectorAll('.slideshow__slide');
const [prevControl, nextControl] = document.querySelectorAll(
  '.slideshow__control'
);
let activeSlideIndex = 0;

function toggleOnNext() {
  console.log(activeSlideIndex);
  const activeSlide = slides[activeSlideIndex];
  activeSlide.classList.add('slide_active');
}

function toggleOffPrev() {
  console.log(activeSlideIndex);
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

prevControl.addEventListener('click', onPrevButtonClick);
nextControl.addEventListener('click', onNextButtonClick);
