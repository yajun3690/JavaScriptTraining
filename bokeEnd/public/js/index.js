;(function($){
	$('.carousel').carousel({
	  interval: 2000
	})
	$('#active-nav-ul li').on('click',function(){
		$('#active-nav-ul li').removeClass('active');
		console.log(this)
		$(this).addClass('active');
	})
})(jQuery);