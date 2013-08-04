var yetSocial_view=Backbone.View.extend({
	el:$('#yetsuSocial'),
	events:{
		'click a':'showSocial'
	},
	showSocial:function(){
		this.$el.toggleClass('showSocial');
	},
	initialize:function(){
		var bottom=$('#ico-social').height();
		var heightSocial=$('#yetsuSocial').height();
		this.$el.css({'bottom':-8.2+'rem' });
	}
});
var yetMenu_view=Backbone.View.extend({
	el:$('#ico-menu'),
	events:{
		'click':'showMenu'
	},
	showMenu:function(){
		$('body').css({'overflow-x':'hidden'});
  		$('header,section,footer,aside').toggleClass('move-blocks');
		$('#menu').toggleClass('open-menu');
	}
});
/*********** yetlocal ************/
var yetMap_view=Backbone.View.extend({
	el:$('#yetLocal'),
	initialize:function(){
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
	}
});

var YetMenberView= Backbone.View.extend({
		tagName:'div',
		className : 'yetMenber' ,
		events:{
			'click':'showYetMenber'
		},
		showYetMenber:function() {
			this.model.showYetMenber();
		},
		render:function(){
			$(this.el).html('<a href="'+ this.model.get("linkA") +'">'+ this.model.get("twitterAccount") +'</a>'+
				'<img src="'+ this.model.get("image") +'" alt="'+ this.model.get("description") +'">' );
			//this.$el.html(this.model.get("name"));
			return this.el;
		}
	});
	var yetTeam_View = Backbone.View.extend({
		el:$("#yetMenbers"),
		initialize:function () {
			//this.list=$("#lista");
			var cont=1;
			yetMenbers.each(function(yetMenber){
				var yetMenber= new YetMenberView ({ model:yetMenber });
				$('#yetMenbers').append( yetMenber.render() ); 
				if (cont == 4) {
					$('#yetMenbers').append( $('<img src="images/yetsu-logo.png" alt="Logo Yetsu" class="logo-circle" id="yetLogo" />') );
				};
				cont++;
			},this)
			$(this.el).html(this.lista);
		},
		render:function(){
			//$(this.el).html(this.list);
		}
});