/*Zepto js*/
Zepto(function($){
  	$('#ico-menu').on('click',function(){
  		//alert(window.innerWidth+" | viewport "+$(window).width()+" | width html document "+$(document).width() );
  		$('body').css({'overflow-x':'hidden'});
  		$('header,section,footer').toggleClass('move-blocks');
			$('#menu').toggleClass('open-menu');
		});
	yetMap(); //load yetLocal map
	//new yetTeam_View(); // Load YetTeam 
	new yetMenber_View();
});


	



var yetMap=function(){
	google.maps.event.addDomListener(window,'load',function(){
		var yetMapOptions={
			center: new google.maps.LatLng(-6.704695,-79.901065) ,
			zoom:17,
			mapTypeId : google.maps.MapTypeId.ROADMAP
		}; 
		var yetLocal = new google.maps.Map(document.getElementById('yetLocal'),yetMapOptions);
		var marker = new google.maps.Marker({
			map :yetLocal,
			position : yetLocal.getCenter(),
			title : 'YetLocal'
		});
	});
};