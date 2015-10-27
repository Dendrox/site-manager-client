// var $ = require('jquery'),
// 	Marionette = require('backbone.marionette'),
// 	Backbone = require('backbone'),
// 	Session = require('../models/session'),
//     Template = require('../templates/login.hbs');

// Backbone.$ = $;

// LoginView = Marionette.ItemView.extend({
// 	id : 'login-view',
// 	tagName : 'div',
// 	className : 'login-container',
// 	template : Template,

// 	events : {
// 		'input #username' : 'validateUsername',
// 		'input #password' : 'validateUsername',
// 		'click #submit_password' : 'authenticateUser',
// 	},

// 	initialize : function(){
// 		this.model = new Session();
// 		//window.App.views.header
// 	},
// 	validateUsername : function(){
// 		console.log('validating username');
// 	},
// 	authenticateUser : function(){
// 		console.log('authenticateUser')
// 		var data = {
// 			username : 'steve@steve.com',//$('#username').val(),
// 			password : 'site1'//$('#password').val()
// 		}
// 		this.model.fetch({data:data})
// 		.done(function(response){
// 			console.log(response);
// 			window.sessionStorage.token = response.token;
			
// 			Backbone.history.navigate('home', {trigger : true})
// 		})
// 		.fail(function(err){
// 			console.log(err)
// 		});
// 	}

// });

// module.exports = LoginView;