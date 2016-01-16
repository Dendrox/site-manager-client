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
		return window.App.apiURL + '/authenticate';
	}
});

module.exports = Model;
	

