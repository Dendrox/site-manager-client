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
		this.controller.viewTransactions()
	},
	viewIncoming : function(){
		this.controller.viewIncoming();
	},
	viewOutgoing : function(){
		this.controller.viewOutgoing();
	}	
});

module.exports = Router;