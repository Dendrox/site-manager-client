var $        = require('jquery'),
	Backbone = require('backbone'),
	SteelItem = require('../models/steel_item');
	Backbone.$ = $;

SteelPosts = Backbone.Collection.extend({
	model : SteelItem,
	url : function(){
		return 'http://localhost:8080/api/steel_items/posts?token=' + window.sessionStorage.token
		//add token to URL: ?token=' + window.App.data.token
	}
});


module.exports = SteelPosts;