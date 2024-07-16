jQuery( document ).ready(function() {
    //Banner slider js
    jQuery('.banner-sliders').slick({
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      dots:true,
      arrows:false,
      autoplaySpeed: 2000
    });

    //testimonial slider js
    jQuery('.testimonial__data').slick({
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows:true,
      autoplaySpeed: 2000,
      dots: true,
      prevArrow: '<button type="button" class="slick-prev-review"></button>',
      nextArrow: '<button type="button" class="slick-next-review"></button>'
    });

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
    initializeSlider();

    //product tabbing with slider
    $(document).ready(function() {
      $('.tab-links a').on('click', function(e) {
        var currentAttrValue = $(this).attr('href');
  
        $('.tab-content').hide();
        $(currentAttrValue).show();
  
        $('.tab-links li').removeClass('active');
        $(this).parent('li').addClass('active');
  
        e.preventDefault();
      });
    });

    $('.dealday__cards-tab').slick({
      rows: 2,
      slidesToShow: 3,  
      slidesToScroll: 3,  
      dots: true,  
      arrows: false,
      infinite: true,  
      responsive: [
        {
          breakpoint: 1024,  
          settings: {
            slidesToShow: 2,  
            slidesToScroll: 2,  
          }
        },
        {
          breakpoint: 767,  
          settings: {
            slidesToShow: 1,  
            slidesToScroll: 1,  
          }
        }
      ]
    });
});