var $ = require('jquery'),
	Marionette = require('backbone.marionette'),
	Backbone = require('backbone'),
    Template = require('./templates/index.hbs');

Index = Marionette.ItemView.extend({
	id : 'home-view',
	tagName : 'div',
	className : 'home-container',
	template : Template,
	events : {
		'click div#search' : 'searchMaterials',
		'click div#add' : 'addMaterials'
	},
	initialize : function(){
		window.App.instance.get('user').fetch().done(function(response){
			var user = response;
			window.App.instance.get('user').get('incoming').fetch({data : $.param({ordered_by : user.username})}).done(function(){
				window.App.instance.get('user').get('outgoing').fetch({data : $.param({added_by : user.username})});
			});
		});
	},
	searchMaterials : function(){
		Backbone.history.navigate('search', {trigger : true})
	},
	addMaterials : function(){
		Backbone.history.navigate('add', {trigger : true})
	}
});

module.exports = Index;