$(window).on('load',function (e) {
	
});


$( document ).ready(function() {	
	$('.icon-menu').on('click',function () {
		$('.lang').show();
	})

	$('.icon-close').on('click',function() {
		console.log("hello")
		$('.lang').hide();
	})
});