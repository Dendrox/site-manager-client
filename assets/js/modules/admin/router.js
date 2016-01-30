var $          = require('jquery'),
	Backbone   = require('backbone'),
	Controller = require('./controller');

Backbone.$ = $;

var Router = Backbone.Router.extend({
	routes : {
		'users'   : 'showUsers',
		'user/add': 'addUser'
	},
	initialize : function(){
		this.controller = new Controller();
		console.log('Admin Router Initialized');
	},
	showUsers: function(){
		if(!window.sessionStorage.token || !window.App.instance.get('user').get('isAdmin'))
			return Backbone.history.navigate('login', {trigger: true})
		else
			this.controller.showUsers();
	},
	addUser: function(){
		if(!window.sessionStorage.token || !window.App.instance.get('user').get('isAdmin'))
			return Backbone.history.navigate('login', {trigger: true})
		else
			this.controller.addUser();
	}
});

module.exports = Router;