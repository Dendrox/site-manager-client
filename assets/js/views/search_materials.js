var $ = require('jquery'),
	Marionette = require('backbone.marionette'),
	Backbone = require('backbone'),
    Template = require('../templates/search_materials.hbs');

SearchMaterialsView = Marionette.ItemView.extend({
	id : 'material-types-view',
	tagName : 'div',
	className : 'material-types-el',
	template : Template,
	events : {
		'click div#search_steel' : 'searchSteel'
	},
	searchSteel : function(){
		Backbone.history.navigate('search-materials/steel', {trigger : true});
	}

});

module.exports = SearchMaterialsView;