var $ = require('jquery'),
	Backbone = require('backbone'),
	Controller = require('./controller');

Backbone.$ = $;

var Router = Backbone.Router.extend({
	routes : {
		'home' : 'navHome',
		'add' : 'addMaterials',
		'search' : 'searchMaterials'
	},
	initialize : function(){
		this.controller = new Controller();
		console.log('Router Initialized')
	},
	navHome : function(){
		this.controller.navHome();
	},
	addMaterials : function(){
		this.controller.addMaterials();
	},
	searchMaterials : function(){
		this.controller.searchMaterials();
	}
});

module.exports = Router;