var $ = require('jquery'),
	Marionette = require('backbone.marionette'),
	Backbone = require('backbone'),
    Template = require('../templates/steel_filter.hbs');

FilterView = Marionette.ItemView.extend({
	id : 'filter-view',
	tagName : 'div',
	className : 'filter-container',
	template : Template,
	events : {
		
	},
	initialize : function(){
		this.$el.hide();
		this.render()
	},
	
});

module.exports = FilterView;