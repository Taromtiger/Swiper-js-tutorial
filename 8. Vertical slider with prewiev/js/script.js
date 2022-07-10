const slider = document.querySelector('.swiper-main');
const sliderNav = document.querySelector('.swiper-nav');

let mySwiperNav = new Swiper(sliderNav, {
  slidesPerView: 5,
  spaceBetween: 10,
  loopedSlides: 5,
  freeMode: true,
  loop: true,
  direction: 'vertical',
});

let mySwiper = new Swiper(slider, {
  spaceBetween: 10,
  loop: true,
  loopedSlides: 5,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  thumbs: {
    swiper: mySwiperNav,
  }
});