var $ 		   = require('jquery'),
	Backbone   = require('backbone'),
	Controller = require('./controller');

Backbone.$ = $;

Router = Backbone.Router.extend({
	routes : {
		'transactions'    		: 'viewTransactions',
		'transactions/incoming' : 'viewIncoming',
		'transactions/outgoing' : 'viewOutgoing'
	},
	initialize : function(){
		this.controller = new Controller()
	},
	viewTransactions : function(){
		if(!window.sessionStorage.token)
			return Backbone.history.navigate('login', {trigger: true})
		else
			this.controller.viewTransactions()
	},
	viewIncoming : function(){
		if(!window.sessionStorage.token)
			return Backbone.history.navigate('login', {trigger: true})
		else
			this.controller.viewIncoming();
	},
	viewOutgoing : function(){
		if(!window.sessionStorage.token)
			return Backbone.history.navigate('login', {trigger: true})
		else
			this.controller.viewOutgoing();
	}	
});

module.exports = Router;