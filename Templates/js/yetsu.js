
	/********************************************** SLIDER  ********************************************************/
	// pure JS
	var slider = document.getElementById('yetSlider');
	window.mySwipe = Swipe(slider, {
	  // startSlide: 4,
	  // auto: 3000,
	  // continuous: true,
	  // disableScroll: true,
	  // stopPropagation: true,
	  // callback: function(index, element) {},
	  // transitionEnd: function(index, element) {}
	});
	/********** map Ficsa *********/
    google.maps.event.addDomListener(window,'load',function(){
      var yetMapOptions={
        center: new google.maps.LatLng(-6.708107,-79.907556) ,
        zoom:17,
        mapTypeControlOptions: {
          mapTypeIds: [google.maps.MapTypeId.ROADMAP, 'map_style']
        }
      }; 
      var yetLocal = new google.maps.Map(document.getElementById('map-ficsa'),yetMapOptions);
      map.mapTypes.set('map_style', styledMap);
      map.setMapTypeId('map_style');

      var marker = new google.maps.Marker({
        map :yetLocal,
        position : yetLocal.getCenter(),
        title : 'Lab º3 | FICSA -UNPRG'
      });
    });
      
    /***************************************** MAP CONTACTANOS ********************************************************************/
  google.maps.event.addDomListener(window,'load',function(){


    var styles = [
      {
        featureType: "landscape.man_made",
        elementType: "geometry",
        stylers: [
          { color: "#e67e22" }
        ]
      },{
        featureType: "landscape.natural.landcover",
        elementType: "geometry",
        stylers: [
          { color: "#ff0000" }
        ]
      },{
        featureType: "poi.business",
        elementType: "geometry",
        stylers: [
          { color: "#66CBFF" }
        ]
      },{
        featureType: "poi.attraction",
        elementType: "geometry",
        stylers: [
          { color: "#fff55b" }
        ]
      },{
        featureType: "poi.park",
        elementType: "geometry",
        stylers: [
          { color: "#1abc9c" }
        ]
      },{
        featureType: "road",
        elementType: "geometry",
        stylers: [
          { color: "#7f8c8d" }
        ]
      },{
        featureType: "road",
        elementType: "labels.text.fill",
        stylers: [
          { color: "#ffffff" }
        ]
      },{
        featureType: "road",
        elementType: "labels.text.stroke",
        stylers: [
          { color: "7f8c8d" }
        ]
      }

    ];
    var styledMap = new google.maps.StyledMapType(styles,{name: "Styled Map"});

    var mapOptions = {
      zoom: 18,
      center: new google.maps.LatLng(-6.704695,-79.901065),
      mapTypeControlOptions: {
        mapTypeIds: [google.maps.MapTypeId.ROADMAP, 'map_style']
      }
    };
    var map = new google.maps.Map(document.getElementById('yetLocal'), mapOptions);
    map.mapTypes.set('map_style', styledMap);
    map.setMapTypeId('map_style');

    var infoWindow = new google.maps.InfoWindow({
      content:"<a href='https://foursquare.com/YetsuPe'><span class='icon-home icon-2x'></span></a><p>YetsuPe</p>"
    });

     var image = 'images/icons/yetsu-mark-map.png';
     var myLatLng = new google.maps.LatLng(-6.704695,-79.901065);
      var beachMarker = new google.maps.Marker({
          position: myLatLng,
          map: map,
          icon: image
      });

    google.maps.event.addListener( beachMarker,'click',function(){
      infoWindow.open(map,beachMarker);
    });
  });

    /************** navigation ************/
    var menuLeft = document.getElementById( 'nav' ),
        buttonNav=document.getElementById('showMenu'),
        body = document.body;
      
    buttonNav.onclick = function() {
      classie.toggle( this, 'active' );
      classie.toggle( body, 'menu-push-toright' );
      classie.toggle( menuLeft, 'menu-open' );
    };