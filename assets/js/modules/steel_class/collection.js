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
		return window.App.apiURL + '/steel_types'
	}

});

module.exports = Collection;