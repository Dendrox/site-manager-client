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
			username : 'steve@steve.com',//$('#username').val(),
			password : 'site1'//$('#password').val()
		}
		this.model.fetch({data:data})
		.done(function(response){
			console.log(response);
			window.sessionStorage.token = response.token;
			
			Backbone.history.navigate('home', {trigger : true})
		})
		.fail(function(err){
			console.log(err)
		});
	}

});

module.exports = Index;