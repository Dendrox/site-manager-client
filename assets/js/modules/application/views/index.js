var $          = require('jquery'),
	Marionette = require('backbone.marionette'),
	Backbone   = require('backbone'),
    Template   = require('./templates/index.hbs');

Index = Marionette.ItemView.extend({
	id        : 'home-view',
	tagName   : 'div',
	className : 'home-view',
	template  : Template,
	events : {
		'click div#search' : 'searchMaterials',
		'click div#add'    : 'addMaterials'
	},
	initialize : function(){
		if(window.sessionStorage.token)
			this.model.get('user').loggedIn();
	},
	searchMaterials : function(){
		Backbone.history.navigate('search', {trigger : true})
	},
	addMaterials : function(){
		Backbone.history.navigate('add', {trigger : true})
	}
});

module.exports = Index;