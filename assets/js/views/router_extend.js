var $ = require('jquery'),
	Backbone = require('backbone');

Backbone.$ = $;

var ExtendRouter = Backbone.Router.extend({
	routes : {
		'confirmation'    : 'confirmationView'
	},
	confirmationView : function(){
		console.log('extended router');
		alert('extended router')
	}
	
});

module.exports = ExtendRouter;