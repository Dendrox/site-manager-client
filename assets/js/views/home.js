var $ = require('jquery'),
	Marionette = require('backbone.marionette'),
	Backbone = require('backbone'),
    Template = require('../templates/home.hbs'),

HomeView = Marionette.ItemView.extend({
	id : 'home-view',
	tagName : 'div',
	className : 'home-container',
	template : Template,
	events : {
		'click div#search' : 'searchMaterials',
		'click div#add' : 'addMaterials'
	},
	initialize : function(){
		window.App.instance.get('user').fetch();
	},
	searchMaterials : function(){
		Backbone.history.navigate('search-materials', {trigger : true})
	},
	addMaterials : function(){
		Backbone.history.navigate('add-materials', {trigger : true})
	}
});

module.exports = HomeView;