var $        = require('jquery'),
	Backbone = require('backbone'),
	Model    = require('../steel/model');
	Backbone.$ = $;

Collection = Backbone.Collection.extend({
	model : Model,
	url : function(){
		return 'https://intense-thicket-2598.herokuapp.com/api/steel_items/posts?token=' + window.sessionStorage.token
	}
});


module.exports = Collection;