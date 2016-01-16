var $        = require('jquery'),
	Backbone = require('backbone'),
	Model    = require('../steel/model');
	Backbone.$ = $;

Incoming = Backbone.Collection.extend({
	model : Model,
	url : function(){
		return window.App.apiURL + '/steel_outs/users?token=' + window.sessionStorage.token;
	}
});

Outgoing = Backbone.Collection.extend({
	model : Model,
	url : function(){
		return window.App.apiURL + '/steel_items/users?token=' + window.sessionStorage.token;
	}
});

module.exports = {
	Incoming : Incoming,
	Outgoing : Outgoing
};