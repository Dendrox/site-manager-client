var $        = require('jquery'),
	Backbone = require('backbone');
	Backbone.$ = $;

Model = Backbone.Model.extend({
	initialize : function(){
		console.log('user initialized');
		console.log()
	},
	parse : function(response){
		response.id = response._id;
		return response;
	},
	urlRoot : function(){
		return 'https://localhost/api/authenticate'
	}
});

module.exports = Model;
	

