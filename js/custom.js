$(function () {
    const mainProductSlide = new Swiper('.main_product_slide', {
        loop: true,
        slidesPerView: 1,
        spaceBetween: 15,
        navigation: {
            nextEl: '.main_product .arrows .next',
            prevEl: '.main_product .arrows .prev',
        },
        breakpoints: {
            1024: {
                slidesPerView: 5,
            },
            768: {
                slidesPerView: 3,
            }
        },
    })
});

$(function () {
    const MainVisual = new Swiper('.main_visual_slide', {
        loop: true,
        effect: "fade",
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
        navigation: {
            nextEl: '.main_visual .arrows .right',
            prevEl: '.main_visual .arrows .left',
        },

        pagination: {
            el: '.main_visual .dots',
            clickable: true,
        },
    });
})
