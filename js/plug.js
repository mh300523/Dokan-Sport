$(document).ready(function () {
 
    
    $(window).on('load', function () {
        //preloader
      $('.pre-loader').fadeOut("500", function () {
        $('body').removeClass("overflow");
        $(this).remove();
      });

      if ($('.pre-loader').length == 0) {
        $('body').removeClass("overflow");
      }
    });
  
    ///////// **mobile size** /////////
    
    $('#navbtn').click(function(){
		$('.main_nav').addClass('over_mob');
		$('.over_click').addClass('on');
		$('body').addClass('scroll_mob');
	});

	$('.closebtn').click(function(){
		$('.main_nav').removeClass('over_mob');
		$('.over_click').removeClass('on');
		$('body').removeClass('scroll_mob');
	});
    
    $('.over_click').click(function(){
		$('.closebtn').trigger('click');
	});
    
    if (window.innerWidth <= 767) {
      $('.main_nav .dir_anc').hover(function() {
            $(this).parent().find('.sam_menu').slideToggle(300);
            $(this).parent().siblings().removeClass('open').children('.sam_menu').slideUp(300);
        });
    } 
    
    ///////// **main Slider** /////////
    var mainswiper = new Swiper('.main_slider .swiper-container', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    autoplay: {
    delay: 2000,
    },
    speed: 500,
    updateOnWindowResize: true,
  });
    
    ///////// **category Slider** /////////
    var categs = new Swiper('.catgs_slider .swiper-container', {
    slidesPerView: 8,
    spaceBetween: 30,
    loop: true,
    autoplay: {
          delay: 20000000,
        },
    speed: 500,
    allowTouchMove: false,
    updateOnWindowResize: true,
    observer: true,
    observeParents: true,
    pagination: {
        el: '.catgs_slider .swiper-pagination',
        clickable: true,
    },
    breakpoints: {
        0: {
            slidesPerView: 2,
            autoplay: {
              delay: 2000,
            },
            allowTouchMove: true,
        },
        767: {
            slidesPerView: 4,
            autoplay: {
              delay: 2000,
            },
            allowTouchMove: true,
        },
        992: {
            slidesPerView: 6,
            autoplay: {
              delay: 2000,
            },
            allowTouchMove: true,
            
        },
        1200: {
            slidesPerView: 8,
        },
    },
    });
    
    
    ///////// **banners Slider** /////////
        var banners = new Swiper('.bans_slider .swiper-container', {
        slidesPerView: 2,
        spaceBetween: 30,
        allowTouchMove: false,
        loop: true,
        autoplay: {
        delay: 20000000,
        },
        speed: 500,
        observer: true,
        updateOnWindowResize: true,
        observeParents: true,
        pagination: {
            el: '.bans_slider .swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.bans_slider .swiper-button-next',
            prevEl: '.bans_slider .swiper-button-prev',
        },
        breakpoints: {
            0: {
                slidesPerView: 1,
                autoplay: {
                  delay: 2000,
                },
                allowTouchMove: true,
            },
            767: {
                slidesPerView: 2,
            },
            992: {
                slidesPerView: 2,
            },
            1200: {
                slidesPerView: 2,
            },
        },
    });
    
    
    
    ///////// **bestseller Slider** /////////
        var bestseller = new Swiper('.bestseller_slider .swiper-container', {
        slidesPerView: 4,
        spaceBetween: 30,
        loop: true,
        autoplay: {
              delay: 2000,
            },
        speed: 500,
        updateOnWindowResize: true,
        observer: true,
        observeParents: true,
        pagination: {
            el: '.bestseller_slider .swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.bestseller_slider .swiper-button-next',
            prevEl: '.bestseller_slider .swiper-button-prev',
        },
        breakpoints: {
            0: {
                slidesPerView: 2,
            },
            767: {
                slidesPerView: 2,
            },
            992: {
                slidesPerView: 3,
            },
            1200: {
                slidesPerView: 4,
            },
        },
    });
    

  });  

