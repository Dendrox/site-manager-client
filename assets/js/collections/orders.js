var $        = require('jquery'),
	Backbone = require('backbone'),
	SteelType = require('../models/order');
	Backbone.$ = $;

Orders = Backbone.Collection.extend({
	model : Order,
	url : function(){
		return 'http://localhost:8080/api/orders?token=' + window.sessionStorage.token
	}

});


module.exports = Orders;