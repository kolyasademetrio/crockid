jQuery(document).ready(function($){

    $('.sliderMain').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false,
        arrows: true,
        autoplay: false,
        autoplaySpeed: 4000,
        draggable: true,
        fade: false,
        prevArrow: '<div class="slick-prev slick-arrow"></div>',
        nextArrow: '<div class="slick-next slick-arrow"></div>',
    });

    $('.partners__list').owlCarousel({
        center: true,
        loop: true,
        items: 7,
        autoplay: false,
        autoplayTimeout:3000,
        nav: true,
        dots: false,
        navText: '',
        responsive:{
            0:{
                items:1,
            },
            600:{
                items:3,
            },
            768:{
                items:5,
            },
            1200:{
                items:7,
            }
        }
    });

    function goodsSliderInit(){
        var windowWidth = $(window).width(),
            slideToShow = 5;

        if ( windowWidth > 1100 ) {
            slideToShow = 5;
        } else if ( windowWidth <= 1100 && windowWidth > 900 ) {
            slideToShow = 4;
        } else if ( windowWidth <= 900 && windowWidth > 768 ) {
            slideToShow = 3;
        } else if ( windowWidth <= 768 && windowWidth > 700 ) {
            slideToShow = 3;
        } else if ( windowWidth <= 700 && windowWidth > 500 ) {
            slideToShow = 2;
        } else if ( windowWidth <= 500 && windowWidth > 0 ) {
            slideToShow = 1;
        }

        console.log(slideToShow);

        $('.goods__list').owlCarousel({
            center: false,
            loop: true,
            items: slideToShow,
            autoplay: false,
            autoplayTimeout:3000,
            nav: true,
            dots: false,
            navText: '',
            margin: 0,
            autoWidth: false,
        });
    }

    $(window).load(function(){
        goodsSliderInit();
    });

    $(window).resize(function(){
        goodsSliderInit();
    });
});