$(document).ready(function(){

  // слайдер

  const swiper = new Swiper('.swiper', {
    loop: true,
    speed: 2200,
    autoHeight: true,
    centeredSlides: true,
    slidesPerView: 1.5,
    initialSlide: 1,
    spaceBetween: 10 + "%",
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
    },
    breakpoints: {
      768: {
        loop: false,
        slidesPerView: 3,
        centeredSlides: false,
        initialSlide: 3,
      }
    },
  
  });

  // меню

  $('.burger').on('click', function() {
    $('.menu').addClass('menu_active');
    $('.menu__overlay').fadeIn();
    $('.menu__left').addClass('menu__left-appear');

    
    $('.advantages').fadeOut();
    $('.how').fadeOut();
    $('.advantages').fadeOut();
    $('.order').fadeOut();
    $('.production').fadeOut();
    $('.service').fadeOut();
    $('footer').fadeOut();
    $('.contacts').fadeOut();
    $('.complete').addClass('hidden');
    $('.about').fadeOut();
    $('html, body').animate({scrollTop: '0px'}, 0);
  });

  // каталог меню 

  $('#catalog__link').on('click', function(e) {
    e.preventDefault()
    $('.menu__left').addClass('menu__left_change')
    $('.menu__right').addClass('menu__right_change')
  });

  $('.menu__close').on('click', function() {
    $('.menu').removeClass('menu_active');
    $('.menu__overlay').fadeOut();
    $('.menu__left').removeClass('menu__left_change');
    $('.menu__middle').removeClass('menu__middle_change');
    $('.menu__left').removeClass('menu__left-appear');
    $('.menu__right').removeClass('menu__right_change');


    $('.advantages').fadeIn();
    $('.how').fadeIn();
    $('.advantages').fadeIn();
    $('.order').fadeIn();
    $('.production').fadeIn();
    $('.service').fadeIn();
    $('footer').fadeIn();
    $('.contacts').fadeIn();
    $('.complete').removeClass('hidden');
    $('.about').fadeIn();
  });

  // клик вне блока

  $(document).mouseup(function (e) {
    var container = $('.menu');
    if (container.has(e.target).length === 0){
      $('.menu').removeClass('menu_active');
      $('.menu__overlay').fadeOut();
      $('.menu__left').removeClass('menu__left_change');
      $('.menu__middle').removeClass('menu__middle_change');
      $('.menu__left').removeClass('menu__left-appear');
      $('.menu__right').removeClass('menu__right_change');


      $('.advantages').fadeIn();
      $('.how').fadeIn();
      $('.advantages').fadeIn();
      $('.order').fadeIn();
      $('.production').fadeIn();
      $('.service').fadeIn();
      $('footer').fadeIn();
      $('.contacts').fadeIn();
      $('.complete').removeClass('hidden');
      $('.about').fadeIn();
    }
  });
})




// production tabs

$('.btn_production').on('click', function() {
  $(this)
    .addClass('btn_production_active').siblings().removeClass('btn_production_active')
    .closest('div.container').find('div.production__tabcontent').removeClass('production__tabcontent_active').eq($(this).index()).addClass('production__tabcontent_active')
});

$('.btn_production').on('click', function() {
  $(this)
    .addClass('btn_production_active').siblings().removeClass('btn_production_active')
    .closest('div.container').find('img.production__img').removeClass('production__img_active').eq($(this).index()).addClass('production__img_active');
});


// back link menu mobile

if(window.innerWidth < 800){
  
  $('#catalog__link').on('click', function(e) {
    e.preventDefault()
    $('.menu__middle').addClass('menu__middle_change')
    $('.menu__right').addClass('menu__right_change')
  });

  $('#back__link').on('click', function(e) {
    e.preventDefault()
    $('.menu__middle').removeClass('menu__middle_change')
    $('.menu__right').removeClass('menu__right_change')
  });
};

// anti hover

if (('ontouchstart' in window) || window.DocumentTouch && document instanceof DocumentTouch) {

} else {
  document.body.classList.add('no-touch');
}


// catalog complete

$('.catalog__tab').on('click', function() {
  $(this)
    .addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
    .closest('div.container').find('div.catalog__tabcontent').removeClass('catalog__tabcontent_active').eq($(this).index()).addClass('catalog__tabcontent_active')
});

$('.catalog__subtab').on('click', function() {
  $(this)
    .addClass('catalog__subtab_active').siblings().removeClass('catalog__subtab_active')
    .closest('div.container').find('div.catalog__subtabcontent').removeClass('catalog__subtabcontent_active').eq($(this).index()).addClass('catalog__subtabcontent_active')
});




