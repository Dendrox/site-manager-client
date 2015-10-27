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
		return 'https://intense-thicket-2598.herokuapp.com/api/steel_types?token=' + window.sessionStorage.token
	}

});

module.exports = Collection;