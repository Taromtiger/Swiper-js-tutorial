const slider = document.querySelector('.swiper')

const swiper = new Swiper(slider, {
  slidesPerView: 1,
  loop: 'true',
  spaceBetween: 10,


  // Адаптація
  breakpoints: {
    768: {
      slidesPerView: 2,
      spaceBetween: 30
    },

    1024: {
      slidesPerView: 3,
      spaceBetween: 10
    },
  },

  // pagination: {
  //   el: '.swiper-pagination',
  //   type: 'fraction', //цифр замість точок у слайдера
  //   clickable: 'true',
  // },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  //автопрокрутка слайдера
  // autoplay: {
  //   delay: 2000,
  // },
});