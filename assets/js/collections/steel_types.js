var $        = require('jquery'),
	Backbone = require('backbone'),
	SteelType = require('../models/steel_type');
	Backbone.$ = $;

SteelTypes = Backbone.Collection.extend({
	initialize : function(){
		console.log('steel types initialized');
	},
	model : SteelType,
	url : function(){
		return 'http://localhost:8080/api/steel_types?token=' + window.sessionStorage.token
	}

});


module.exports = SteelTypes;