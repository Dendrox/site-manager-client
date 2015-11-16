var $ = require('jquery'),
	Marionette = require('backbone.marionette'),
	Backbone = require('backbone'),
	Session = require('../model'),
    Template = require('./templates/index.hbs');

Backbone.$ = $;

Index = Marionette.ItemView.extend({
	id : 'login-view',
	tagName : 'div',
	className : 'login-view',
	template : Template,

	events : {
		'input #username' : 'validateUsername',
		'input #password' : 'validateUsername',
		'click #submit_password' : 'authenticateUser',
	},

	initialize : function(){
		this.model = new Session();
	},
	validateUsername : function(){
		console.log('validating username');
	},
	authenticateUser : function(){
		console.log('authenticateUser')
		var data = {
			username : $('#username').val(),
			password : $('#password').val()
		}
		var self = this;
		this.model.fetch({data:data})
		.done(function(response){
			if(!response.success){
				self.$el.find('.error').append('<h3>'+response.message.title+'</h3><p>'+response.message.text+'</p>');
				self.$el.find('.error').show();
				setTimeout(function(){
					self.$el.find('.error').fadeOut();
				}, 3000);
				return;
			}
			else{
				window.sessionStorage.token = response.token;
				Backbone.history.navigate('home', {trigger : true});
			}
		})
		.fail(function(err){
			console.error(err)
		});
	}

});

module.exports = Index;