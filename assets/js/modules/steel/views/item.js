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
		Backbone.history.navigate('order/'+this.model.id, {trigger:true});
	}

});

module.exports = Item;