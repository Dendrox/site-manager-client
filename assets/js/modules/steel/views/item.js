var $ = require('jquery')
	Marionette = require('backbone.marionette'),
	Backbone = require('backbone'),
    Template = require('./templates/item.hbs');

Item = Marionette.ItemView.extend({
	id : 'steel_item-view',
	tagName : 'div',
	className : 'list_item',
	template : Template,
	events : {
		'click div.steel-item' : 'orderItem',
		'click button.info' : 'showInfo',
		'click div.other-info' : 'hideInfo'
	},
	initialize : function(){
		console.log('modular: item')
	},
	onShow : function(){
		console.log('steel-item-view')
	},
	showInfo : function(e){
		e.stopPropagation();
		this.$el.find('.other-info').show();
		console.log(this.model)
	},
	hideInfo : function(e){
		e.stopPropagation();
		this.$el.find('.other-info').hide();
	},
	orderItem : function(){
		var item_id = this.model.id;
		this.model.save({
			'available' : false, 
			'extension' : 'update-steel',
		})
		.done(function(response){
			console.log(response);
			console.log('response');

			Backbone.history.navigate('order/'+item_id, {trigger:true});
		})
	}

});

module.exports = Item;