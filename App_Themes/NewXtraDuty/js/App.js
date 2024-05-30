/*--------------------------------------------------------------
 * Main.js
 *--------------------------------------------------------------*/

/*-----------------------------------
 * Main.js:
 *---------------------------------*/
// Select Last element to remove bottom margin
$(document).ready(function(){
	$('.box-container:last').css('margin-bottom', '0px');
});

// Bootstrap Tool Tip Support
$(document).ready(function(){
	$('[data-toggle="tooltip"]').tooltip();
});

// Sidebar > Sidebar-Profile > Close Button
$('#sidebar-profile .close').click(function () {
	var $p = $(this).parents('.sidebar-profile-content new-nav-sidebar-color');
	$p.addClass('animated fadeOut');
	setTimeout(function () {
		$p.css({
			height: $p.outerHeight(),
			overflow: 'hidden'
		})
		.animate({
		  	'padding-top': 0,
		  	height: $('#sidebar-profile')
		  	.outerHeight()}, 300, function () {
				$p.remove();
		  	}
		);
	}, 300);
	return false;
});


// Animate tutorial
// When you click the 1____, grabs element with 1____
// to add classes 'animated shake'
// source: https://www.youtube.com/watch?v=CBQGl6zokMs
// we use .one() because it will listen to event once and unbind itself
// ( instead of on() which will always be binded )
var $eventElement = "button#neat";
var $animateElement = "h2#wow";
var _animationName = "animated shake";
var _animationEnd = "webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend";

$( $eventElement ).on('click', function() {
	$( $animateElement ).addClass( _animationName ).one( _animationEnd ,
	function() {
		$(this).removeClass( _animationName );
	});
});

// Bootstrap Sidenav Support
// $(document).ready(function(){
//     $(".side-nav .collapse").on("hide.bs.collapse", function() {
//         $(this).prev().find(".fa").eq(1).removeClass("fa-angle-right").addClass("fa-angle-down");
//     });
//     $('.side-nav .collapse').on("show.bs.collapse", function() {
//         $(this).prev().find(".fa").eq(1).removeClass("fa-angle-down").addClass("fa-angle-right");
//     });
// });

// Small Screen Toggle
$("#sm-screen-toggle").click(function(e) {
    e.preventDefault();
    $("#page-wrapper").toggleClass("sm-screen-toggled");
});
// Large Screen Toggle
$("#lg-screen-toggle").click(function(e) {
    e.preventDefault();
    $("#page-wrapper").toggleClass("lg-screen-toggled");
    // $('#sm-caret-left').hide();
});
// Toggle Small Carets
$('#lg-screen-toggle').click(function(){
   $('#sm-caret-left').toggle(400,'swing');
});
$('#lg-screen-toggle').click(function(){
   $('#sm-caret-right').toggle(400,'swing');
});
