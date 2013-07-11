/*$(document).on("ready",function(){
	$('#ico-menu').on('click',function(){
		alert('Holaaa');
	});
});*/

/*Zepto js*/
Zepto(function($){
  	$('#ico-menu').on('click',function(){
  		$('body').css({'overflow-x':'hidden'});
  		$('header,section,footer').toggleClass('move-blocks');
		$('#menu').toggleClass('open-menu');
	});
})