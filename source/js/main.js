AOS.init({
	duration: 1200,
	once: true
});

$(window).on('load', function() {
    $("#cover").fadeOut(200);
});

$(document).ready(function () {
  
  'use strict';
  
   var c, currentScrollTop = 0,
       navbar = $('nav');

   $(window).scroll(function () {
      var a = $(window).scrollTop();
      var b = navbar.height();
     
      currentScrollTop = a;
     
      if (c < currentScrollTop && a > b + b) {
        navbar.addClass("scrollUp");
      } else if (c > currentScrollTop && !(a <= b)) {
        navbar.removeClass("scrollUp");
      }
      c = currentScrollTop;
  });

   $('.toggle-nav').click(function() {
      $('nav ul').toggleClass('active');
   })
  
});