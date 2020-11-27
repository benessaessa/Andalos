var swiper = new Swiper('.swiper-container', {
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
        spaceBetweenSlides: 20
    },
    500: {
        slidesPerView: 2,
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
$('.navbar').on('shown.bs.collapse', function () {
    $('.newSocial2').css({'margin-right':'auto','margin-left':'unset'});
    $('.newSocial').css('margin-left','2rem');
});
$('.navbar').on('hidden.bs.collapse', function () {
    $('.newSocial').css({'margin-left':'auto','margin-right':'unset'});
    $('.newSocial2').css({'margin-left':'auto','margin-right':'1rem'});
});
$(window).scroll(testScroll);
    var viewed = false;

    function isScrolledIntoView(elem) {
        var docViewTop = $(window).scrollTop();
        var docViewBottom = docViewTop + $(window).height();

        var elemTop = $(elem).offset().top;
        var elemBottom = elemTop + $(elem).height();

        return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
    }
    function testScroll() {
    if (isScrolledIntoView($(".count")) && !viewed) {
        viewed = true;
        $('.count').each(function () {
        $(this).prop('Counter',0).animate({
            Counter: $(this).text()
        }, {
            duration: 4000,
            easing: 'swing',
            step: function (now) {
                $(this).text(Math.ceil(now));
            }
        });
    });
    }
}
