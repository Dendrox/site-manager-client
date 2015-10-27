var $ = require('jquery'),
	Marionette = require('backbone.marionette'),
	Backbone = require('backbone'),
    Template = require('./templates/search.hbs');

Search = Marionette.ItemView.extend({
	id : 'material-types-view',
	tagName : 'div',
	className : 'material-types-el',
	template : Template,
	events : {
		'click div#search_steel' : 'searchSteel'
	},
	initialize : function(){
		console.log('modular items_search')
	},
	searchSteel : function(){
		Backbone.history.navigate('search/steel', {trigger : true});
	}

});

module.exports = Search;