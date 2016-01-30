var $          = require('jquery'),
	Backbone   = require('backbone'),
	Controller = require('./controller');

Backbone.$ = $;

var Router = Backbone.Router.extend({
	routes : {
		'home'   : 'navHome',
		'add'    : 'addMaterials',
		'search' : 'searchMaterials',
		'admin'  : 'showAdminOptions'
	},
	initialize : function(){
		this.controller = new Controller();
		console.log('App Router Initialized');
	},
	navHome : function(){
		if(!window.sessionStorage.token)
			return Backbone.history.navigate('login', {trigger: true})
		else
			this.controller.navHome();
	},
	addMaterials : function(){
		if(!window.sessionStorage.token)
			return Backbone.history.navigate('login', {trigger: true})
		else
			this.controller.addMaterials();
	},
	searchMaterials : function(){
		if(!window.sessionStorage.token)
			return Backbone.history.navigate('login', {trigger: true})
		else
			this.controller.searchMaterials();
	},
	showAdminOptions: function(){
		if(!window.sessionStorage.token || !window.App.instance.get('user').get('isAdmin'))
			return Backbone.history.navigate('login', {trigger: true})
		else
			this.controller.showAdminOptions();
	}
});

module.exports = Router;