const slider = document.querySelector('.swiper')
const slider1 = document.querySelector('.swiper1')

let swiper = new Swiper(slider, {
  slidesPerView: 3,
  loop: 'true',
  spaceBetween: 10,

  pagination: {
    el: '.pag-1',
    type: 'bullets',
    clickable: 'true',
  },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // slidesPerGroup: 2,

  centeredSlides: 'true',

  slideToClickedSlide: 'true',
});

let swiper1 = new Swiper(slider1, {
  slidesPerView: 3,
  loop: 'true',
  spaceBetween: 10,

  pagination: {
    el: '.pag-2',
    type: 'bullets',
    clickable: 'true',
  },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // slidesPerGroup: 2,

  centeredSlides: 'true',

  slideToClickedSlide: 'true',
});