$(document).on("ready",function(){
	$('#ico-menu').on('click',function(){
  		$('body').css({'overflow-x':'hidden'});
  		$('header,section,footer').toggleClass('move-blocks');
		$('#menu').toggleClass('open-menu');
	});
	//alert(document.documentElement.clientWidth+);
	alert(document.documentElement.clientWidth+" | viewport "+$(window).width()+" | width html document "+$(document).width() );

});
