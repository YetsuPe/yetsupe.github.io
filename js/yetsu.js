
/*Zepto js*/
Zepto(function($){
  	$('#ico-menu').on('click',function(){
  		//alert(window.innerWidth+" | viewport "+$(window).width()+" | width html document "+$(document).width() );
  		$('body').css({'overflow-x':'hidden'});
  		$('header,section,footer').toggleClass('move-blocks');
		$('#menu').toggleClass('open-menu');
	});
});