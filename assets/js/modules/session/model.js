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
		return 'https://git.heroku.com/intense-thicket-2598.git/api/authenticate'
		//add token to URL: ?token=' + window.App.data.token
	}
});

module.exports = Model;
	

