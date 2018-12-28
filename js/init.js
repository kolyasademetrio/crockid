jQuery(document).ready(function($){

    (function(){
        var dots = $('.sliderMain').hasClass('dots') ? true : false;

        $('.sliderMain').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: dots,
            arrows: true,
            autoplay: false,
            autoplaySpeed: 4000,
            draggable: true,
            fade: false,
            prevArrow: '<div class="slick-prev slick-arrow"></div>',
            nextArrow: '<div class="slick-next slick-arrow"></div>',
        });
    })();



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

    (function(){
        if ( $( "#slider-range" ).length ) {
            var min = parseInt($( "#slider-range" ).attr("slider-min")),
                max = parseInt($( "#slider-range" ).attr("slider-max"));

            $( "#slider-range" ).slider({
                range: true,
                /*min: 0,
                 max: 500,
                 values: [ 75, 300 ],*/
                min: min,
                max: max,
                values: [ min , max ],
                slide: function( event, ui ) {
                    $( "#amount" ).val( "$" + ui.values[ 0 ] + " - $" + ui.values[ 1 ] );

                    $("#slider__values>.first").text( ui.values[ 0 ] + ' ₸');
                    $("#slider__values>.second").text( ui.values[ 1 ] + ' ₸');
                }
            });

            $("#slider__values>.first").text( $( "#slider-range" ).slider('values', 0 ) + ' ₸');
            $("#slider__values>.second").text( $( "#slider-range" ).slider('values', 1 ) + ' ₸');
        }


    })();

    $('.video__link').magnificPopup({
        type: 'iframe',
        mainClass: 'mfp-fade',
        removalDelay: 160,
        preloader: false,
        fixedContentPos: true,
    });

    (function(){

        /* -------------- Slick Slider on content-single-product.php ------------------- */
        $('.goodSingle__slider').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            fade: true,
            autoplay: false
        });

        function goodGallerySliderNavInit( vertical, centerMode, slidesToShow ){
            $('.goodSingle__sliderNav').slick({
                slidesToShow: slidesToShow,
                slidesToScroll: 1,
                asNavFor: '.goodSingle__slider',
                dots: false,
                centerMode: centerMode,
                focusOnSelect: true,
                vertical: vertical,
                arrows: true,
                centerPadding: '0px',
                nextArrow: $('.goodNext'),
                prevArrow: $('.goodPrev'),
            });
        }

        if ( $(window).width() > 600 ) {
            goodGallerySliderNavInit( true, false, 2 );
        } else {
            var gallerySliderItemNav = $('.goodSingle__sliderNavItem'),
                gallerySliderItemNavLength = gallerySliderItemNav.length;

            if ( gallerySliderItemNavLength > 1 ) {
                goodGallerySliderNavInit( false, true, gallerySliderItemNavLength -1 );
            }
        }

        $('.goodSingle__sliderLink').magnificPopup({
            type:'image',
            removalDelay: 500,
            mainClass: 'mfp-fade',
            showCloseBtn: true,
            closeMarkup: '<div class="mfp-close">×</div>',
            closeBtnInside: true,
            closeOnContentClick: false,
            closeOnBgClick: true,
            alignTop: false,
            fixedContentPos: true,
            callbacks: {
                open: function() {
                },
                close: function() {

                },
                beforeOpen: function() {
                    var $triggerEl = $(this.st.el),
                        newClass = 'goodSingle__popup';
                    this.st.mainClass = this.st.mainClass + ' ' + newClass;
                }
            }
        });


    })();

});