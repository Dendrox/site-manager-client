var $          = require('jquery'),
	Marionette = require('backbone.marionette'),
	Backbone   = require('backbone'),
    Template   = require('./templates/add.hbs');

Add = Marionette.ItemView.extend({
	id        : 'add-user-view',
	tagName   : 'div',
	className : 'add_user',
	template  : Template,
	events : {
		'click .cancel' : 'cancel',
		'click .confirm' : 'validate',
		'click #view'    : 'viewUsers',
		'click #home'    : 'goHome',
	},
	initialize : function(){		
		
	},
	cancel: function(){
		Backbone.history.navigate('users', {trigger: true})
	},
	goHome: function(){
		Backbone.history.navigate('home', {trigger: true})
	},
	save: function(user){
		var _this = this;
		this.$el.find('form.add_steel').empty()

		this.model.save(user).done(function(res){
			_this.$el.find($('.confirmation')).show();
		}).fail(function(err){
			console.log(err);
		})
	},
	validate: function(){

		var options = {};
		options.extension  = ('create-user/');
		options.firstname  = this.$el.find('#first_name').val();
		options.lastname   = this.$el.find('#last_name').val();
		options.phone      = this.$el.find('#phone').val();
		options.type       = this.$el.find('#type option:selected').text();
		options.isAdmin    = this.$el.find('#isadmin option:selected').text() == 'Yes' ? true : false;
		options.username   = this.$el.find('#user_name ').val();
		options.password   = this.$el.find('#password').val();

		var _this = this;
		
		// NOTE: Need to find a better way to do this
		var counter = 0;
		var inputsToValidate = [
			options.firstname, 
			options.lastname,   
			options.phone,     
			options.type,       
			options.username,   
			options.password
		];

		// Loop through each item to check for empty strings
		$.each(inputsToValidate, function(key, value){
			if(value === '' || value === 'Please select' ){
				_this.$el.find('.error').append('<h3>Submission Failed!</h3><p>Please fill in all fields</p>');
				_this.$el.find('.error').show();
				setTimeout(function(){
					_this.$el.find('.error').fadeOut();
				}, 3000);
				return false;
			}
			else {
				counter++;
			}
			if(key === (inputsToValidate.length - 1))
				_this.save(options);
		});
	},
	viewUsers: function(){
		Backbone.history.navigate('users', {trigger: true})
	}

});

module.exports = Add;