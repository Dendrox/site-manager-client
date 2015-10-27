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
		return 'https://intense-thicket-2598.herokuapp.com/api/authenticate' // comment
	}
});

module.exports = Model;
	

