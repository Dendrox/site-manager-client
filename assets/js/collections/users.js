var $        = require('jquery'),
	Backbone = require('backbone'),
	User = require('../models/user');
	Backbone.$ = $;

Users = Backbone.Collection.extend({
	model : User,

	comparator : function(user){
		return user.escape('username');
	}
});

var users;

var initializeUsers = function(){
	var users = new Users([
		{
			username : 'rody.kirwan@gmail.com'
		},
		{
			username : 'jim@jim.com'
		},
		{
			username : 'bill@jim.com'
		},
	]);

	return users;
};

module.exports = initializeUsers();