var $        = require('jquery'),
	Backbone = require('backbone'),
	Model = require('./model');

Backbone.$ = $;

Collection = Backbone.Collection.extend({
	initialize : function(){
		console.log('steel types initialized');
	},
	model : Model,
	url : function(){
		return 'http://localhost:8080/api/steel_types?token=' + window.sessionStorage.token
	}

});

module.exports = Collection;