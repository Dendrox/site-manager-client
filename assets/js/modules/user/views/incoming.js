var $          = require('jquery')
	Marionette = require('backbone.marionette'),
	Backbone   = require('backbone'),
    Template   = require('./templates/incoming.hbs');

var Item = Marionette.ItemView.extend({
	id         : 'order-view',
	tagName    : 'div',
	className  : 'list_item',
	template   : Template,
	initialize : function(){
		
	}
});

List = Marionette.CollectionView.extend({
	tagname    : 'div',
	className  : 'orders-view',
	childView  : Item,
	initialize : function(){
		
		this.collection.fetch({
			data : $.param({ordered_by : window.App.instance.get('user').get('username')})
		});
	}
});

module.exports = List;

