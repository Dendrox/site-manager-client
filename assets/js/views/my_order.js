var $ = require('jquery')
	Marionette = require('backbone.marionette'),
	Backbone = require('backbone'),
    Template = require('../templates/my_orders.hbs');

OrderView = Marionette.ItemView.extend({
	id : 'order-view',
	tagName : 'div',
	className : 'list_item',
	template : Template,
	initialize : function(){
		
	},
	onShow : function(){
		console.log(this.model.get('item'))
	}

});

module.exports = OrderView;