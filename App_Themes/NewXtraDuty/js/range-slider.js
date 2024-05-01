// source: http://codepen.io/thelifemgmt/pen/CeLqA
var rangeSlider = function(){
	var slider = $('.range-slider'),
	  	range = $('.range-slider__range'),
	  	value = $('.range-slider__value');
	    
	 slider.each(function(){

	    value.each(function(){
	      var value = $(this).prev().attr('value');
	      $(this).html(value);
	    });

	    range.on('input', function(){
	      $(this).next(value).html(this.value);
	    });

	});
};

rangeSlider();