var $          = require('jquery'),
	Backbone   = require('backbone'),
	Collection = require('./collection');
	
Backbone.$ = $;

Model = Backbone.Model.extend({
	defaults : {
		username  : '',
		firstname : '',
		lastname  : '',
		phone     : '',
		location  : '',
		incoming  : new Collection.Incoming(),
		outgoing  : new Collection.Outgoing()
	},
	initialize : function(){
		console.log('user initialized');
	},
	loggedIn : function(){
	   this.fetch();
	},
	parse : function(response){
		response.id = response._id;
		return response;
	},
	logout : function(){
		this.clear();
		this.set(this.defaults);

		var properties = [
			'incoming',
			'outgoing'
		];

		var self = this;
		_.each(properties, function(property){
			self.defaults[property].reset();
		});
	},
	urlRoot : function(){
		return window.App.apiURL + '/user/logged-in?token='+window.sessionStorage.token;
	}
});

module.exports = Model;
	

