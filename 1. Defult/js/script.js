const slider = document.querySelector('.swiper')

const swiper = new Swiper(slider, {
  slidesPerView: 3,
  loop: 'true',
  spaceBetween: 10,

  pagination: {
    el: '.swiper-pagination',
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