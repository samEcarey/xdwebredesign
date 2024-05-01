/*--------------------------------------------------------------
 * JS: Btstrp AdminSideNav
 *--------------------------------------------------------------*/
jQuery(document).ready(function ($) {
    $('.navbar-toggle').click(function () {
    	
        $('.navbar-nav').toggleClass('slide-in');
        $('.side-menu-container > .navbar-nav.slide-in').animate({left: '0px'}, "slow");
        if (!$(".side-menu-container > .navbar-nav").hasClass("slide-in")) {
		  $('.side-menu-container > .navbar-nav').animate({left: '-300px'}, "slow");
		}
        $('.main-body').toggleClass('body-slide-in');
        $('.body-slide-in').animate({left: '300px'}, "slow");
        if (!$(".main-body").hasClass("body-slide-in")) {
		  $('.main-body').animate({left: '0px'}, "slow");
		}

        /// uncomment code for absolute positioning tweek see top comment in css
        //$('.absolute-wrapper').toggleClass('slide-in');
        
    });
});