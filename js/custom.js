jQuery( document ).ready(function() {
    //Banner slider js
    jQuery('.client-logo').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        dots:true,
        autoplaySpeed: 2000
    });

    //Mobile-menu js
    function openNav() {
        jQuery("#mySidenav").css("width", "300px");
    }
    function closeNav() {
        jQuery("#mySidenav").css("width", "0");
    }
    });

    //dealday slider js
    function initializeSlider() {
        if ($(window).width() <= 1024) {
            if (!$('.dealday__cards').hasClass('slick-initialized')) {
                $('.dealday__cards').slick({
                    dots: true,
                    arrows:false,
                    infinite: true,
                    speed: 300,
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    responsive: [
                        {
                            breakpoint: 767,
                            settings: {
                                slidesToShow: 1,
                                slidesToScroll: 1
                            }
                        }
                    ]
                });
            }
        } else {
            if ($('.dealday__cards').hasClass('slick-initialized')) {
                $('.dealday__cards').slick('unslick');
            }
        }
    }

    // Initialize slider on load
    initializeSlider();


