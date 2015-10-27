var $        = require('jquery'),
	Backbone = require('backbone'),
	Model = require('./model');
	Backbone.$ = $;

Collection = Backbone.Collection.extend({
	model : Model,
	url : function(){
		return 'http://localhost:8080/api/steel_items?token=' + window.sessionStorage.token
		//add token to URL: ?token=' + window.App.data.token
	}
});

module.exports = Collection;