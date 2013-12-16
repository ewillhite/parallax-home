$(function() {

  var s = skrollr.init();

  $(window).scroll(function() {
    var scrolled = $(window).scrollTop();
    if (scrolled > 0) {
      $('header').addClass('show');
    }
    else {
      $('header').removeClass('show');
    }
  });

});
