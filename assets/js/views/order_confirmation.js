
var $ = require('jquery')
	Marionette = require('backbone.marionette'),
	Backbone = require('backbone'),
    Template = require('../templates/confirmation.hbs');

ConfirmationView = Marionette.ItemView.extend({
	id : 'confirmation-view',
	tagName : 'div',
	className : 'page_item',
	template : Template,
	events : {
		
	},
	initialize : function(){
		console.log('order-confirmed')
	}

});

module.exports = ConfirmationView;