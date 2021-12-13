$(window).scroll(function(){
	var a = $(window).scrollTop();
    var b= a/4;
  	$('.parallax-bg').css('background-position', "50%"  + b + "px");
});

$(window).scroll(function(){
//   $("#button").on('touchstart click', function(event) {
//     if (event.type == "touchstart") {
//       $(this).off('click');
//       console.log("Only touch event is fired");
//     } else if (event.type == "click") {
//       $(this).off('touchstart');
//       console.log("Only click event is fired");
//     }
//   });
  
    var touchmoved;
	$('.product-grid .grid__item').on('touchend', function(e){
	    if(touchmoved != true){
	        // $(this).addClass('hover');
	        // jQuery('.et_pb_portfolio  .project').not(this).removeClass('hover');

	        var link = jQuery(this);
	        if (link.hasClass('hover')) {
		        return true;
		    } else {
		        link.addClass('hover');
		        jQuery('.product-grid .grid__item').not(this).removeClass('hover');
		        e.preventDefault();
		        return false; //extra, and to make sure the function has consistent return points
		    }
	    }
	}).on('touchmove', function(e){
	    touchmoved = true;
	}).on('touchstart', function(){
	    touchmoved = false;
	});
  
});