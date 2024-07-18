jQuery( document ).ready(function() {

  jQuery('li .gallery__info-box').hover(
    function() {
        jQuery('li .gallery__info-box').removeClass('pop');
      
        jQuery(this).addClass('pop');
    },
    function() {
    }
);

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



  //Tabbing new 
  // init Isotope
    var slickoptions = {
      rows: 2,
      dots: true,
      arrows: false,
      appendDots: $('.slick-nav'),
      appendArrows: $('.slick-nav'),
      accessibility: true,
      speed: 300,
      slidesToShow: 3,
      slidesToScroll: 3,
      infinite: false,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
              rows: 2,
              slidesPerRow: 2,
              slidesToScroll: 2,
              slidesToShow: 1,
              dots: true
          }
        },
        {
          breakpoint: 768,
          settings: {
              rows: 2,
              slidesToScroll: 1,
              slidesToShow: 2,
              dots: true
          }
        },
        {
          breakpoint: 480,
          settings: {
              rows: 4,
              slidesPerRow: 1,
              slidesToScroll: 1,
              slidesToShow: 1,
              dots: true
          }
        }
    ]
    }

    $(document).ready(function () {
    $('.slider2').slick(slickoptions);

    var slider = $('.slider2');
    var allSlides = $('.slick-slide > div > *').clone();
    var trigger = $('js-filter');


    var ClassFilter = function (object, item) {
      this.object = object;
      this.item = item;

      this.filterFunc = function () {
        $('.active').removeClass('active');
        $('.js-filter[data-filter="'+this.item+'"]').addClass('active');
        var filterSlides = allSlides.filter(this.item);
      
    slider.css({"opacity": "0","left": "50px"});
    setTimeout(
    function(){
      slider
      .slick('unslick')
      .empty()
      .append(filterSlides)
      .slick(slickoptions)
      .css({"opacity": "100","left": "0px"})
    }, 600);	
      }
    }

    jQuery('.js-filter').on('click', function (e) {
    var attr = jQuery(this).attr('data-filter')
    var newFilter = new ClassFilter(this, attr);
        newFilter.filterFunc();
    });

    });


  

});