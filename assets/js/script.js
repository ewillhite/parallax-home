$(function() {

  parallax = function() {
    // Skrollr initiation and relevant parallax code
    var s = skrollr.init();
    $(window).scroll(function() {
      var scrolled = $(window).scrollTop();
      if (scrolled > 472) {
        $('header').addClass('show');
      }
      else {
        $('header').removeClass('show');
      }
    });
  }

  if ($(window).width() > 1024) {
    parallax();
  }



});
