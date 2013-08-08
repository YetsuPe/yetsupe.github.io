/*Zepto js*/
Zepto(function($){
	new yetMap_view(); //load yetLocal map
	var menu = new yetMenu_view(); //load yetMenu
	var user = new yetUser_view(); //load yetMenu
	var slider = new yetSlider_view();
	new yetSocial_view(); //load yetLocal map


	/********* Touch events **************/
	/*$$('body').swipeRight( function(){
		menu.touchOpenMenu();
	});
	$$('body').swipeLeft( function(){
		menu.touchCloseMenu();
	});*/
	$$('#slide-pictures').swipeLeft( function(){
		slider.slideLeft();
	});
	$$('#slide-pictures').swipeRight( function(){
		slider.slideRight();
	});

	/******* ./Touch events ***************/
});