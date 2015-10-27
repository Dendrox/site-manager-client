var $ = require('jquery'),
	Marionette = require('backbone.marionette'),
	Backbone = require('backbone'),
    Template = require('../templates/header.hbs');

HeaderView = Marionette.ItemView.extend({
	id : 'header-view',
	tagName : 'div',
	className : 'header-container',
	template : Template,
	events : {
		'click button#menu' : 'toggleMenu',
		'click button#home' : 'navHome',
		'click li#account'  : 'openAccount',
		'click li#logout'  : 'logout'
	},
	initialize : function(){
		var self = this;
		console.log(this.$el)
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
		e.stopPropagation()
	},
	openAccount : function(){
		Backbone.history.navigate('account', {trigger : true});
	},
	navHome : function(){
		Backbone.history.navigate('home', {trigger : true});
	},
	logout: function(){
		window.sessionStorage.removeItem('token');
		this.destroy();
		Backbone.history.navigate('login', {trigger : true});
	}
});

module.exports = HeaderView;