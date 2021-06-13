/**
  * название функции
  *
  * @param {number} first - первое число
  * @returns {number}
  */




 jQuery(document).ready(function($){
  //Открыть меню по клику на триггер
  $('.menu-trigger').on('click', function(event){
    event.preventDefault();
    toggleMenu(true);
  });
  //Закрыть меню
  $('.close-trigger, .body-overlay').on('click', function(event){
    event.preventDefault();
    toggleMenu(false);
  });
  //Добавить или убрать класс
  function toggleMenu(bool) {
        $('body, .body-overlay, .a-menu').toggleClass('menu-open', bool);
    };
    
    // SUBMENU
    
  $('.menu__item-drop').on('click', function(){
    if( $('.menu__item-drop').hasClass('open') ) {
                $('.menu__item-drop, .sub-menu').removeClass('open');
            } else {
                $('.menu__item-drop, .sub-menu').addClass('open');
            };
    });


    $('.show-right').on('click', function(event){
    $('.side-left').addClass('shifted');
        $('.side-right').removeClass('shifted');
  });

  $('.show-left').on('click', function(event){
    $('.side-right').addClass('shifted');
        $('.side-left').removeClass('shifted');
  });
});



$(window).on('load resize', function() {
  if ($(window).width() > 1280) {
    $('.about__gallery').slick({
      infinite: true,
      slidesToShow: 4,
      slidesToScroll: 1,
      dots: false,
      prevArrow: "<div class='slaider__icons slaider__icons-prev'><img src='img/arrow_prev.svg' class='slaider__icons-img' alt='prev'></div>",
      nextArrow: "<div class='slaider__icons slaider__icons-next'><img src='img/arrow_next.svg' class='slaider__icons-img' alt='next'></div>",
    });
  } else {
    $('.about__gallery').slick("unslick");
  }
});


$(window).on('load resize', function() {
  if ($(window).width() > 1280) {
    $('.news__gallery').slick({
      infinite: true,
      slidesToShow: 4,
      slidesToScroll: 1,
      dots: false,
      prevArrow: "<div class='slaider__icons slaider__icons-prev'><img src='img/arrow_prev.svg' class='slaider__icons-img' alt='prev'></div>",
      nextArrow: "<div class='slaider__icons slaider__icons-next'><img src='img/arrow_next.svg' class='slaider__icons-img' alt='next'></div>",
    });
  } else {
    $('.news__gallery').slick("unslick");
  }
});



$(window).on('load resize', function() {
  if ($(window).width() > 1280) {
    $('.equipment__slaider').slick({
      infinite: true,
      slidesToShow: 4,
      infinite: false,
      slidesToScroll: 1,
      dots: false,
      prevArrow: "<div class='slaider__icons slaider__icons-prev'><img src='img/arrow_prev_big.svg' class='slaider__icons-img' alt='prev'></div>",
      nextArrow: "<div class='slaider__icons slaider__icons-next'><img src='img/arrow_next_big.svg' class='slaider__icons-img' alt='next'></div>",
    });
  } else {
    $('.equipment__slaider').slick("unslick");
  }
});


$(window).on('load resize', function() {
  if ($(window).width() > 1280) {
    $('.production__slaider').slick({
      infinite: true,
      slidesToShow: 4,
      infinite: false,
      slidesToScroll: 1,
      dots: false,
      prevArrow: "<div class='slaider__icons slaider__icons-prev'><img src='img/arrow_prev_big.svg' class='slaider__icons-img' alt='prev'></div>",
      nextArrow: "<div class='slaider__icons slaider__icons-next'><img src='img/arrow_next_big.svg' class='slaider__icons-img' alt='next'></div>",
    });
  } else {
    $('.production__slaider').slick("unslick");
  }
});


$(window).on('load resize', function() {
  if ($(window).width() > 1280) {
    $('.relatedproducts__slaider').slick({
      infinite: true,
      slidesToShow: 4,
      infinite: false,
      slidesToScroll: 1,
      dots: false,
      prevArrow: "<div class='slaider__icons slaider__icons-prev'><img src='img/arrow_prev_big.svg' class='slaider__icons-img' alt='prev'></div>",
      nextArrow: "<div class='slaider__icons slaider__icons-next'><img src='img/arrow_next_big.svg' class='slaider__icons-img' alt='next'></div>",
    });
  } else {
    $('.relatedproducts__slaider').slick("unslick");
  }
});


$(window).on('load resize', function() {
  if ($(window).width() > 1280) {
    $('.compatibility__items').slick({
      infinite: true,
      slidesToShow: 4,
      infinite: false,
      slidesToScroll: 1,
      dots: false,
      prevArrow: "<div class='slaider__icons slaider__icons-prev'><img src='img/arrow_prev_big.svg' class='slaider__icons-img' alt='prev'></div>",
      nextArrow: "<div class='slaider__icons slaider__icons-next'><img src='img/arrow_next_big.svg' class='slaider__icons-img' alt='next'></div>",
    });
  } else {
    $('.compatibility__items').slick("unslick");
  }
});



$('.production__card-image').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  asNavFor: '.production__card-images'
});

$('.production__card-images').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  asNavFor: '.production__card-image',
  dots: false,
  focusOnSelect: true
});




$(function() {
  $('.scrollup').click(function() {
    $("html, body").animate({
      scrollTop:0
    },1000);
  })
})

$(window).scroll(function() {
  if ($(this).scrollTop()>200) {
    $('.scrollup').fadeIn();
  }
  else {
    $('.scrollup').fadeOut();
  }
});
//# sourceMappingURL=main.js.map
