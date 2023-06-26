const header = document.querySelector('.header');
const showNavButton = document.querySelector('#show-nav');
const nav = document.querySelector('.nav');

nav.classList.remove('nav--no-js');
header.classList.remove('header--no-js');
showNavButton.classList.remove('header__button--no-js');

showNavButton.addEventListener('click', () => {
  nav.classList.toggle('nav--opened');
  showNavButton.classList.toggle('header__button--active');
});

new Swiper('.slider', {
  loop: true,
  navigation: {
    prevEl: '.slider__button-prev',
    nextEl: '.slider__button-next'
  },
  pagination: {
    el: '.slider__pagination',
    bulletClass: 'slider__bullet',
    bulletActiveClass: 'slider__bullet--active',
    clickable: true
  }
});

const formSlider = document.querySelector('#price-slider');
noUiSlider.create(formSlider, {
  start: [0, 900],
  connect: true,
  step: 10,
  range: {
    'min': 0,
    'max': 1000
  }
});

const priceStart = document.querySelector('#price-start');
const priceEnd = document.querySelector('#price-end');

formSlider.noUiSlider.on('update', (values, handle) => {
  const value = values[handle];
  if (handle) {
    priceEnd.value = Math.round(value);
  } else {
    priceStart.value = Math.round(value);
  }
});

priceStart.addEventListener('change', () => {
  formSlider.noUiSlider.set([this.value, null]);
});

priceEnd.addEventListener('change', () => {
  formSlider.noUiSlider.set([null, this.value]);
});

const sortButton = document.querySelector('#sort-button');
const sortList = document.querySelector('.sort__list');
const sortItems = document.querySelectorAll('.sort__item');
const sortButtonText = document.querySelector('.sort__button-text');

sortButton.addEventListener('click', () => {
  sortButton.classList.toggle('sort__button--active');
  sortList.classList.toggle('sort__list--opened');
});

sortButton.addEventListener('keydown', (evt) => {
  if (evt.key === 'Escape' || evt.key === 'Enter') {
    sortButton.classList.toggle('sort__button--active');
    sortList.classList.toggle('sort__list--opened');
  }
});

sortItems.forEach((item) => {
  item.addEventListener('click', () => {
    sortItems.forEach((item) => item.classList.remove('sort__item--current'));
    item.classList.add('sort__item--current');
    sortList.classList.remove('sort__list--opened');
    sortButtonText.textContent = item.textContent;
    sortButton.classList.remove('sort__button--active');
  });
});
