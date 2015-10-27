var $        = require('jquery'),
	Backbone = require('backbone');
	Backbone.$ = $;

Session = Backbone.Model.extend({
	initialize : function(){
		console.log('user initialized');
		console.log()
	},
	parse : function(response){
		response.id = response._id;
		return response;
	},
	urlRoot : function(){
		return 'http://localhost:8080/api/authenticate'
		//add token to URL: ?token=' + window.App.data.token
	}
});

module.exports = Session;
	

