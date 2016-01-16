var $          = require('jquery'),
	Marionette = require('backbone.marionette'),
    Template   = require('./templates/transactions.hbs');

Transactions = Marionette.ItemView.extend({
	id        : 'account-view',
	tagName   : 'div',
	className : 'account-view',
	template  : Template,
	events : {
		'click #ordered_items' : 'viewIncoming',
		'click #added_items'   : 'viewOutgoing'
	},
	initialize : function(){

	},
	viewIncoming : function(){
		Backbone.history.navigate('transactions/incoming', {trigger : true});
	},
	viewOutgoing : function(){
		Backbone.history.navigate('transactions/outgoing', {trigger : true});
	}
});

module.exports = Transactions;