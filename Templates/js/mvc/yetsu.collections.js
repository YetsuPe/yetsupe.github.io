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