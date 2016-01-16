var $          = require('jquery'),
	Marionette = require('backbone.marionette'),
	Backbone   = require('backbone'),
	Module     = require('../module'),
    Template   = require('./templates/index.hbs');

Index = Marionette.ItemView.extend({
	id : 'header-view',
	tagName : 'div',
	className : 'header-view',
	template : Template,
	events : {
		'click button#menu' : 'toggleMenu',
		'click button#home' : 'navHome',
		'click button#back' : 'goBack',
		'click li#account'  : 'openAccount',
		'click li#logout'   : 'logout'
	},
	initialize : function(){
		var self = this;
		this.$el.addClass('background');

		$(document).on('click', function(e) {
		    if(!$(e.target).is('#menu-container')) {
		      self.$el.find($('#menu-container')).css({'display' : 'none'});
		    }
		});
	},
	toggleMenu : function(e){
		e.preventDefault();
		
		this.$el.find($('#menu-container')).css({'display' : 'block'});
		e.stopPropagation();
	},
	openAccount : function(){
		Backbone.history.navigate('transactions', {trigger : true});
	},
	navHome : function(){
		Backbone.history.navigate('home', {trigger : true});
	},
	goBack : function(){
		window.history.back();
	},
	logout: function(){
		window.sessionStorage.removeItem('token');
		window.App.instance.get('user').logout();
		this.destroy();
		Backbone.history.navigate('login', {trigger : true});
	}
});

module.exports = Index;