var $ = require('jquery')
	Marionette = require('backbone.marionette'),
	Backbone = require('backbone'),
	moment = require('moment'),
	SteelLog = require('../../logs/steel/model'),
    Template = require('./templates/order.hbs');

Order = Marionette.ItemView.extend({
	id : 'steel_order-view',
	tagName : 'div',
	className : 'display_item',
	template : Template,
	events : {
		'click button.confirm_order' : 'confirmOrder',
		'click button.cancel_order' : 'cancelOrder'
	},
	initialize : function(){
		var self = this;
		this.model.fetch()
		.done(function(response){
			console.log(response);
			self.render();
		})
		.fail(function(response){
			console.log(response)
		})
	},
	confirmOrder : function(){
		var _this = this;

		this.model.save({
			'ordered_by'  : window.App.instance.get('user').get('username'),
			'date_ordered': moment().toDate(),
			'available'   : false, 
			'extension'   : 'update-steel',
			'status'      : 'pending'
		}).done(function(response){
			_this.$el.find($('.confirmation')).html(response.message);
		});

		var options = this.model.toJSON();
		options.extension = 'steel_log';
		options.date_ordered = moment().toDate();
		options.ordered_by = window.App.instance.get('user').get('username');

		delete options.id
			
		// FIX: This is a mess - GET RID OF IT
		var steelLog = new SteelLog(options);
		var _this = this;

		steelLog.save()
		.done(function(response){
			console.log(response)
			_this.$el.find($('.confirmation')).html(response.message)
			Backbone.history.navigate('confirmation', {trigger : true})
		});
	},
	cancelOrder : function(){
		// REMOVE: ONCE STEEL LOGS ARE GONE
		// this.model.save({
		// 	'available' : true, 
		// 	'extension' : 'update-steel'
		// })
		// .done(function(response){
		// 	console.log(response);
		Backbone.history.navigate('search/steel', {trigger:true});
		// })
	}

});

module.exports = Order;