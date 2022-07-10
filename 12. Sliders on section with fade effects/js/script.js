const slider = document.querySelector('.swiper')

const swiper = new Swiper(slider, {
  slidesPerView: 1,
  loop: 'true',
  spaceBetween: 10,
  centeredSlides: 'true',
  autoplay: {
    delay: 2000,
  },
  effect: 'fade',
  slideToClickedSlide: 'true',
});