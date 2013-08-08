/*Zepto js*/
Zepto(function($){
	new yetMap_view(); //load yetLocal map
	new yetMenu_view(); //load yetMenu
	new yetUser_view(); //load yetMenu
	new yetSocial_view(); //load yetLocal map
	$('body').swipeRight( function(){
		console.log("swipeRight ");
		$('body').css({'overflow-x':'hidden'});
  	$('header,section,footer,aside').toggleClass('move-blocks');
		$('#menu').toggleClass('open-menu');
	});
});