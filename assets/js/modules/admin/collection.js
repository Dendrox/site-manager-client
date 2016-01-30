var $        = require('jquery'),
	Backbone = require('backbone'),
	moment = require('moment'),
	Model = require('./model');
	Backbone.$ = $;

Collection = Backbone.Collection.extend({
	model : Model,
	url : function(){
		return window.App.apiURL + '/users?token=' + window.sessionStorage.token
		//add token to URL: ?token=' + window.App.data.token
	}
});

module.exports = Collection;