var $ 		   = require('jquery'),
	Backbone   = require('backbone'),
	Controller = require('./controller');

Backbone.$ = $;

Router = Backbone.Router.extend({
	routes : {
		'login'    : 'login',
	},
	initialize : function(){
		this.controller = new Controller();
	},
	login : function(){
		this.controller.login();
	},
	
});

module.exports = Router;