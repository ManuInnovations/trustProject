(function ($) {
	$( '#dl-menu' ).dlmenu();
	$('ul.dl-menu li a').smoothScroll();


	//animation
	new WOW().init();

})(jQuery);


$(window).scroll(function(){
    $(".logo-image").css("opacity", 1 - $(window).scrollTop() / 250);
  });
