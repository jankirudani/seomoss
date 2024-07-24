jQuery( document ).ready(function() {

  //Mobile-menu js
  function openNav() {
    $("#mySidenav").css("width", "250px");
  }
  function closeNav() {
    $("#mySidenav").css("width", "0");
  }


  // Gallery section
  const items = $(".animate-swap-tabs__item");

  function switchTab(index) {
    let current_Item = $(items[index]).attr("data-item");
    let left_translateY = $(items[index]).attr("data-ly");
    let right_translateY = $(items[index]).attr("data-ry");

    $(items[index]).addClass("animate-swap-tabs__item--active");
    $(items[index]).siblings().removeClass("animate-swap-tabs__item--active");

    setTimeout(() => {
      $(".animate-swap-tabs__screen-image-box." + current_Item).css({
          visibility: "visible",
          opacity: "1",
      });
      $(".animate-swap-tabs__object-image-box." + current_Item).css({
          opacity: "1",
          transform: "translateY(0) scale(1) translateZ(0px)",
      });
      $(".animate-swap-tabs__screen-image-box." + current_Item)
          .siblings()
          .css({
              opacity: "0",
          });
    }, 200);

    // Animate the transformation of siblings
    $(".animate-swap-tabs__object-image-box")
      .not("." + current_Item)
      .css({
          opacity: "0",
          transform: "translateY(-75px) scale(0.8) translateZ(0px)",
      });

    $(".animate-swap-tabs__left-shape").css(
      "transform",
      "translateY(" + left_translateY + ") translateZ(0px)"
    );
    $(".animate-swap-tabs__right-shape").css(
      "transform",
      "translateY(" + right_translateY + ") translateZ(0px)"
    );
  }

  items.on("click", function () {
    const currentIndex = $(this).index();
    switchTab(currentIndex);
  });

  // Gallery sticky
  $('li .gallery__info-box').on("click", function() {
    $('li .gallery__info-box').removeClass('pop');
    $(this).addClass('pop');
  });

  //Banner slider js
  jQuery('.banner-sliders').slick({
    dots: true, 
    arrows: false,
    infinite: true,
    autoplay: false,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    slidesToShow: 1
  });

  //testimonial slider js
  jQuery('.testimonial__data').slick({
    dots: true, 
    arrows: true,
    infinite: true,
    autoplay: false,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    slidesToShow: 1,
    prevArrow: '<button type="button" class="slick-prev-review"></button>',
    nextArrow: '<button type="button" class="slick-next-review"></button>'
  });
  

  //dealday slider js
  function initializeSlider() {
    if (jQuery(window).width() <= 1024) {
      if (!jQuery('.dealday__cards').hasClass('slick-initialized')) {
        jQuery('.dealday__cards').slick({
          dots: true,
          arrows: false,
          infinite: true,
          speed: 300,
          slidesToShow: 2,
          slidesToScroll: 1,
          responsive: [
            {
              breakpoint: 767,
              settings: {
                slidesToShow: 1,
                dots: true
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

  jQuery(document).ready(function() {
    initializeSlider();
  });

  jQuery(window).resize(function() {
    initializeSlider();
  });




  //Tabbing new 
  // Slick slider options
  var slickoptions = {
    rows: 2,
    dots: true,
    arrows: false,
    accessibility: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 3,
    infinite: false,
    responsive: [
      {
        breakpoint: 1300,
        settings: {
            rows: 2,
            slidesToScroll: 1,
            slidesToShow: 2,
            dots: true
        }
      },
      {
        breakpoint: 1024,
        settings: {
            rows: 2,
            slidesToScroll: 2,
            slidesToShow: 2,
            dots: true
        }
      },
      {
        breakpoint: 768,
        settings: {
            rows: 2,
            slidesToScroll: 1,
            slidesToShow: 1,
            dots: true
        }
      },
      {
        breakpoint: 480,
        settings: {
            slidesToScroll: 1,
            slidesToShow: 1,
            dots: true
        }
      }
    ]
  };

  // Initialize Slick slider
  $('.slider2').slick(slickoptions);

  // Clone all slides for filtering
  var allSlides = $('.slick-slide > div > .all').clone();

  // Filtering function
  var ClassFilter = function(object, item) {
    this.object = object;
    this.item = item;

    this.filterFunc = function() {
      $('.active').removeClass('active');
      $('.js-filter[data-filter="'+this.item+'"]').addClass('active');
      var filterSlides = allSlides.filter(this.item);

      var slider = $('.slider2');
      slider.css({"opacity": "0", "left": "50px"});
      setTimeout(function() {
        slider
          .slick('unslick')
          .empty()
          .append(filterSlides)
          .slick(slickoptions)
          .css({"opacity": "100", "left": "0px"});
      }, 600);
    };
  };

  // Filter click event
  jQuery('.js-filter').on('click', function(e) {
    var attr = jQuery(this).attr('data-filter');
    var newFilter = new ClassFilter(this, attr);
    newFilter.filterFunc();
  });

});