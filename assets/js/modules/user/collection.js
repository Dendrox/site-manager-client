var $        = require('jquery'),
	Backbone = require('backbone'),
	Model    = require('../steel/model');
	Backbone.$ = $;

Collection = Backbone.Collection.extend({
	model : Model,
	url : function(){
		return 'http://localhost:8080/api/steel_items/posts?token=' + window.sessionStorage.token
	}
});


module.exports = Collection;