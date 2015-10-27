var $          = require('jquery'),
	Backbone   = require('backbone'),
	Logs       = require('../logs/steel/module'),
	Collection = require('./collection');
	Backbone.$ = $;

Model = Backbone.Model.extend({
	defaults : {
		username  : '',
		firstname : '',
		lastname  : '',
		phone     : '',
		location  : '',
		incoming  : new Logs.Collection(),
		outgoing  : new Collection()
	},
	initialize : function(){
		console.log('user initialized');
	},
	// fetch : function(){
	// 	this.get('incoming').fetch();
	// 	this.get('outgoing').fetch();
	// },
	parse : function(response){
		response.id = response._id;
		return response;
	},
	urlRoot : function(){
		return 'https://intense-thicket-2598.herokuapp.com/api/user/logged-in?token='+window.sessionStorage.token;
	}
});



module.exports = Model;
	

