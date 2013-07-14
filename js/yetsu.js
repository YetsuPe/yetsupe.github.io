
/*Zepto js*/
Zepto(function($){
  	$('#ico-menu').on('click',function(){
  		//alert(window.innerWidth+" | viewport "+$(window).width()+" | width html document "+$(document).width() );
  		$('body').css({'overflow-x':'hidden'});
  		$('header,section,footer').toggleClass('move-blocks');
		$('#menu').toggleClass('open-menu');
	});
	var yetMapOptions={
		center: new google.maps.LatLng(-6.704756,-79.901062) ,
		zoom:17,
		mapTypeId : google.maps.MapTypeId.ROADMAP
	}; 
	var yetLocal = new google.maps.Map(document.getElementById('yetLocal'),yetMapOptions);

});