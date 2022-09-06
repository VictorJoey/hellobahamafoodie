var mySwiper = new Swiper(".swiper-container-unique", {
  // Optional parameters
  direction: "horizontal",
  spaceBetween: 51,
  loopAdditionalSlides: 5,
  loop: true,

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next-unique",
    prevEl: ".swiper-button-prev-unique",
  },
  breakpoints: {
    768: {
      spaceBetween: 51,
    },
    1360: {
      spaceBetween: 40,
    },
  },
});

var mySwiper2 = new Swiper(".swiper-container-centered", {
  // Optional parameters
  direction: "horizontal",
  spaceBetween: 6.875,
  loopAdditionalSlides: 15,
  slideToClickedSlide: false,
  loop: true,
  speed: 2000,

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next-centered",
    prevEl: ".swiper-button-prev-centered",
  },
  breakpoints: {
    768: {
      spaceBetween: 64,
    },
    1360: {
      spaceBetween: 80,
    },
  },
});


var mySwiper3 = new Swiper(".recipe-detail-swiper-container", {
  effect: 'fade',
  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },
  
  loop: true,
  pagination: {
    el: ".recipe-detail-swiper-pagination",
    clickable: true,
  },
});