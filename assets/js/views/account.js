var $ = require('jquery'),
	Marionette = require('backbone.marionette'),
    Template = require('../templates/account.hbs');

HeaderView = Marionette.ItemView.extend({
	id : 'account-view',
	tagName : 'div',
	className : 'account-container',
	template : Template,
	events : {
		'click #ordered_items' : 'viewOpenOrders',
		'click #added_items' : 'viewActivePosts'

	},
	initialize : function(){
		console.log('ored')
	},
	viewOpenOrders : function(){
		console.log('boo')
		Backbone.history.navigate('open-orders', {trigger : true})
	},
	viewActivePosts : function(){
		console.log('view posts')
		Backbone.history.navigate('active-posts', {trigger : true})
	}
});

module.exports = HeaderView;