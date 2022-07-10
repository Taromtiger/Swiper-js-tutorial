const sliders = document.querySelectorAll('.swiper')

sliders.forEach((el) => {
  const swiper = new Swiper(el, {
    slidesPerView: 3,
    loop: 'true',
    spaceBetween: 10,

    pagination: {
      el: el.querySelector('.swiper-pagination'),
      type: 'bullets',
      clickable: 'true',
    },

    navigation: {
      nextEl: el.querySelector('.swiper-button-next'),
      prevEl: el.querySelector('.swiper-button-prev'),
    },

    centeredSlides: 'true',

    slideToClickedSlide: 'true',
  });
});

