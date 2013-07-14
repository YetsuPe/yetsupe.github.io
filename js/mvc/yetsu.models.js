var YetMenber=Backbone.Model.extend({
		defaults:{
			name: "yetMenber",
			twitterAccount : '@YetsuPe',
			linkA : 'https://twitter.com/YetsuPe' ,
			image : 'images/yetsu-logo.png',
			description : 'Yetsu S.A.C '
		},
		showYetMenber:function(){
			alert("seleccionado : "+this.get("name"));
		}
	});
	var ListYetmenbers=Backbone.Collection.extend({
		model:YetMenber
	});
	var yetMenbers = new ListYetmenbers([
		new YetMenber({
			twitterAccount : "@Skeiter9" , 
			name : "Omar Lozada",
			linkA : 'https://twitter.com/skeiter9' ,
			image : 'images/skeiter9-omar-lozada-phone.jpg',
			description : 'Yetsu S.A.C '
		}),
		new YetMenber({
			twitterAccount : "@FioriAs" , 
			name: "Fiorella Aquino",
			linkA : 'https://twitter.com/FioriAs' ,
			image : 'images/yetsu-logo.png',
			description : 'Yetsu S.A.C '
		}),
		new YetMenber({
			twitterAccount : "@Altamiranocs" , 
			name: "Omar Lozada",
			linkA : 'https://twitter.com/Altamiranocs' ,
			image : 'images/yetsu-logo.png',
			description : 'Yetsu S.A.C '
		}),
		new YetMenber({
			twitterAccount : "@Pilmee" , 
			name: "Omar Lozada",
			linkA : 'https://twitter.com/Pilmee' ,
			image : 'images/yetsu-logo.png',
			description : 'Yetsu S.A.C '
		}),
		new YetMenber({
			twitterAccount : "@JoCar_5" , 
			name: "Omar Lozada",
			linkA : 'https://twitter.com/YetsuPe' ,
			image : 'images/yetsu-logo.png',
			description : 'Yetsu S.A.C '
		}),
		new YetMenber({
			twitterAccount : "@Zio691" , 
			name: "Omar Lozada",
			linkA : 'https://twitter.com/Zio691' ,
			image : 'images/yetsu-logo.png',
			description : 'Yetsu S.A.C '
		}),
		new YetMenber({
			twitterAccount : "@GuevaraLx" , 
			name: "Omar Lozada",
			linkA : 'https://twitter.com/GuevaraLx' ,
			image : 'images/yetsu-logo.png',
			description : 'Yetsu S.A.C '
		}),
		new YetMenber({
			twitterAccount : "@Jabser29" , 
			name: "Omar Lozada",
			linkA : 'https://twitter.com/Jabser29' ,
			image : 'images/yetsu-logo.png',
			description : 'Yetsu S.A.C '
		})
	]);
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
	var App = Backbone.View.extend({
		el:$("#yetMenbers"),
		initialize:function () {
			//this.list=$("#lista");
			var cont=1;
			yetMenbers.each(function(yetMenber){
				var view = new YetMenberView ({ model:yetMenber });
				$('#yetMenbers').append( view.render() ); 
				if (cont == 4) {
					$('#yetMenbers').append( $('<img src="images/yetsu-logo.png" alt="Logo Yetsu" class="logo-circle" />') );
				};
				cont++;
			},this)
			$(this.el).html(this.lista);
		},
		render:function(){
			//$(this.el).html(this.list);
		}
	});