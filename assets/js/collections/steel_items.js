var $        = require('jquery'),
	Backbone = require('backbone'),
	SteelItem = require('../models/steel_item');
	Backbone.$ = $;

SteelItems = Backbone.Collection.extend({
	model : SteelItem,
	url : function(){
		return 'http://localhost:8080/api/steel_items?token=' + window.sessionStorage.token
		//add token to URL: ?token=' + window.App.data.token
	}
});


module.exports = SteelItems;