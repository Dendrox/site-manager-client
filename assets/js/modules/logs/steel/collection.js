var $        = require('jquery'),
	Backbone = require('backbone'),
	Model = require('./model');
	Backbone.$ = $;

Collection = Backbone.Collection.extend({
	model : Model,
	url : function(){
		return 'http://localhost:8080/api/orders?token=' + window.sessionStorage.token
	}
});


module.exports = Collection;