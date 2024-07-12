jQuery( document ).ready(function() {
    //Banner slider js
    jQuery('.testimonial__data, .banner-sliders').slick({
        infinite: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots:true,
        arrows:true,
        autoplaySpeed: 2000
    });

    //testimonial slider js
    

    //dealday slider js
    function initializeSlider() {
        if (jQuery(window).width() <= 1024) {
            if (!jQuery('.dealday__cards').hasClass('slick-initialized')) {
                jQuery('.dealday__cards').slick({
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
            if (jQuery('.dealday__cards').hasClass('slick-initialized')) {
                jQuery('.dealday__cards').slick('unslick');
            }
        }
    }

    // Initialize slider on load
    initializeSlider();


});