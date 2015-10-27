var $        = require('jquery'),
	Backbone = require('backbone'),
	Model = require('./model');
	Backbone.$ = $;

Collection = Backbone.Collection.extend({
	model : Model,
	url : function(){
		return 'https://intense-thicket-2598.herokuapp.com/api/orders?token=' + window.sessionStorage.token
	}
});


module.exports = Collection;