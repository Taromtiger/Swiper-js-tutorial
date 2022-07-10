const slider = document.querySelector('.swiper')

const swiper = new Swiper(slider, {
  slidesPerView: 3,
  loop: 'true',
  spaceBetween: 20,

  pagination: {
    el: '.swiper-pagination',
    type: 'fraction', //цифр замість точок у слайдера
    clickable: 'true',
  },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  centeredSlides: 'true',

  slideToClickedSlide: 'true',


  //автопрокрутка слайдера
  autoplay: {
    delay: 2000,
  },

  preloadImages: false,
  lazy: true,
});