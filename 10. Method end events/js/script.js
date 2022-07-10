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

  centeredSlides: 'true',

  slideToClickedSlide: 'true',
});

document.querySelector('.slide-to').addEventListener('click', () => {
  swiper.slideTo(2);
});

document.querySelector('.destroy').addEventListener('click', () => {
  swiper.destroy();
});

document.querySelector('.hide').addEventListener('click', () => {
  slider.style.display = 'none';
});

document.querySelector('.update').addEventListener('click', () => {
  slider.style.display = 'block';
  swiper.update();

  swiper.addSlide(1, '<div class="swiper-slide">Slide 10"</div>')

  swiper.addSlide(1, [
    '<div class="swiper-slide">Slide 10"</div>',
    '<div class="swiper-slide">Slide 11"</div>'
  ]);
});


swiper.on('transitionEnd', () => {
  console.log('Index', + swiper.realIndex);
});