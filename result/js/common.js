jQuery(document).ready(function( $ ) {



  $('body').click(function () {
    if( $(".toggle-mnu").hasClass("on") ){
      $(".toggle-mnu").removeClass("on");
      $(".top-mnu").fadeOut();
    }
  });


  $(".top-mnu").click(function (e) {
    e.stopPropagation();
  });


  $('.burger').click(function () {
    $(this).toggleClass('burger-open');
    $('body').toggleClass("body-open");
    $('.header__col').toggleClass("open");    
  });



  $('.carret').click(function () {

    $(this).closest('.parent').find('ul').toggleClass('show');
  });


  $('.content__sl').slick({
    infinite: true,    
    speed: 300,
    slidesToScroll: 1,
    autoplay: false,    
    slidesToShow: 1,
    cssEase: 'linear',  
    autoplaySpeed: 0,      
    arrows: true,
    dots: true,
    pauseOnHover: true,  
  });

  

  $('.top__search').click(function (e) {
    e.preventDefault();
    $('.top-search__form').toggleClass('show');
    $(this).toggleClass('close');
  });

  function popup(openLink, windowEl, closeEl) {  
    $(openLink).click(function(e) {
      e.preventDefault();
      $(windowEl).fadeIn();
      $('body').addClass('ohi');
    });
    $(closeEl).click(function(e) {
      e.preventDefault();
      $(windowEl).fadeOut();
      $('body').removeClass('ohi');
    });
    $('.modal-overlay').click(function () {
      $(this).fadeOut();
      $('body').removeClass('ohi');
    });
    $('.modal-form__block').click(function (e) {
      e.stopPropagation();  
    });
    
  }

  popup('.top__btn', '.modal-overlay_1', '.modal-close_1');
  //popup('.link2', '.modal-overlay_2', '.modal-close_2');




  if($('select').length) {
    $('select').each(function () {
      $(this).select2({
        minimumResultsForSearch: -1,
        dropdownParent: $(this).parent()
      });
    });
  }

  $('.accordion-item').click(function () {
    $(this).find('.accordion-header').toggleClass('active-header');
    $(this).find('.accordion-content').slideToggle().toggleClass('open-content');
  });

}); //ready

