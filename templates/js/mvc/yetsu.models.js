var YetMenber=Backbone.Model.extend({
		defaults:{
			name: "yetMenber",
			twitterAccount : '@YetsuPe',
			linkA : 'https://twitter.com/YetsuPe' ,
			image : 'images/yetsu-logo.png',
			description : 'Yetsu S.A.C '
		},
		showYetMenber:function(){
			$('#yetLogo').attr('src',''+this.get("image")+'' );
		}
});

	
	