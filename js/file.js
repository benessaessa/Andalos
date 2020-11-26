var swiper = new Swiper('.swiper-container', {
  // slidesPerView: 3,
// spaceBetween: 15,
freeMode: true,
slidesPerView: 'auto',
centeredSlides: true,
pagination: {
    el: '.swiper-pagination',
    clickable: true,
},
autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
    },
breakpoints: {
    // when window width is <= 499px
    320: {
        slidesPerView: 1,
        spaceBetweenSlides: 20
    },
    700:{
        slidesPerView: 3,
        spaceBetweenSlides: 50
    },
    // when window width is <= 999px
    999: {
        slidesPerView: 4,
        spaceBetweenSlides: 15
    },
    1200: {
        slidesPerView: 7,
        spaceBetweenSlides: 15
    }
}
});
var swiper = new Swiper('.swiper-container2', {
  // slidesPerView: 3,
// spaceBetween: 15,
freeMode: true,
slidesPerView: 'auto',
pagination: {
    el: '.swiper-pagination',
    clickable: true,
},
autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
    },
breakpoints: {
    // when window width is <= 499px
    320: {
        slidesPerView: 1,
        spaceBetweenSlides: 10
    },
    700:{
        slidesPerView: 2,
        spaceBetweenSlides: 50
    },
    // when window width is <= 999px
    999: {
        slidesPerView: 2,
        spaceBetweenSlides: 15
    },
    1200: {
        slidesPerView: 3,
        spaceBetweenSlides: 15
    }
}
});