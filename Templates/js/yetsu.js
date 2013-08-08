/*Zepto js*/
Zepto(function($){
	new yetMap_view(); //load yetLocal map
	var menu = new yetMenu_view(); //load yetMenu
	var user = new yetUser_view(); //load yetMenu
	new yetSocial_view(); //load yetLocal map
	$$('body').swipeRight( function(){
		menu.touchOpenMenu();
	});
	$$('body').swipeLeft( function(){
		menu.touchCloseMenu();
	});

});