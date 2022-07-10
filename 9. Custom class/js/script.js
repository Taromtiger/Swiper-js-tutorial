const slider = document.querySelector('.slider')

const swiper = new Swiper(slider, {
  slidesPerView: 3,
  loop: 'true',
  spaceBetween: 10,

  slideClass: 'slide',
  wrapperClass: 'slider-wrap',

  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    clickable: 'true',
  },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  centeredSlides: 'true',

  slideToClickedSlide: 'true',
});