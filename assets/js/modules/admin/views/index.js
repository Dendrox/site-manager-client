var $          = require('jquery'),
	Marionette = require('backbone.marionette'),
	Backbone   = require('backbone'),
    Template   = require('./templates/index.hbs');

Index = Marionette.ItemView.extend({
	id        : 'admin-view',
	tagName   : 'div',
	className : 'admin-view',
	template  : Template,
	events : {
		'click #show_users' : 'showUsers'
	},
	initialize : function(){
		console.log('admin view');
	},
	showUsers: function(){
		Backbone.history.navigate('users', {trigger: true})
	}
});

module.exports = Index;