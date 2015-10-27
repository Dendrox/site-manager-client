var $ = require('jquery')
	Marionette = require('backbone.marionette'),
	Backbone = require('backbone'),
    Template = require('./templates/incoming.hbs');

var Item = Marionette.ItemView.extend({
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

List = Marionette.CollectionView.extend({
	tagname : 'div',
	childView : Item,
	initialize : function(){
		this.collection = window.App.instance.get('user').get('incoming')
	}
});

module.exports = List;

