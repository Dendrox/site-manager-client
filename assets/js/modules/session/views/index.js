var $          = require('jquery'),
	Marionette = require('backbone.marionette'),
	Backbone   = require('backbone'),
    Template   = require('./templates/index.hbs');

Backbone.$ = $;

Index = Marionette.ItemView.extend({
	id        : 'login-view',
	tagName   : 'div',
	className : 'login-view',
	template  : Template,
	events : {
		'input #username'        : 'validateUsername',
		'input #password'        : 'validateUsername',
		'click #submit_password' : 'authenticateUser',
	},
	initialize : function(){
		console.log('session view');
	},
	validateUsername : function(){
		console.log('validating username');
	},
	authenticateUser : function(){
		var data = {
			username : $('#username').val(),//'rody.kirwan@gmail.com',//
			password : $('#password').val() //'site1'//
		};
		
		var self = this;

		this.model.fetch({data:data})
		.done(function(response){
			if(!response.success){
				self.$el.find('.error').append('<h3>'+response.message.title+'</h3><p>'+response.message.text+'</p>');
				self.$el.find('.error').show();
				setTimeout(function(){
					self.$el.find('.error').fadeOut();
					self.$el.find('.error').empty();
				}, 3000);
				return;
			}
			else{
				window.sessionStorage.token = response.token;
				console.log(response)
				Backbone.history.navigate('home', {trigger : true});
			}
		})
		.fail(function(err){
			console.error(err)
			self.$el.find('.error').append('<h3>'+err.statusText+'!</h3><p>Please fill in all fields</p>');
				self.$el.find('.error').show();
				setTimeout(function(){
					self.$el.find('.error').fadeOut();
					self.$el.find('.error h3').empty();
					self.$el.find('.error p').empty();
				}, 3000);
		});
	}

});

module.exports = Index;