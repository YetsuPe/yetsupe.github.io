var YetService_view=Backbone.View.extend({
	el:$('#services'),
	events:{
		'click .row .item a':'showService'
	},
	showService:function(){
		$('#YetService').toggleClass('show-content magictime swashin');
		$('#yetServices').toggleClass('tansition-down');
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