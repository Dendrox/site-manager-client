var $        = require('jquery'),
	Backbone = require('backbone')
	Model = require('./model');
	Backbone.$ = $;

Collection = Backbone.Collection.extend({
	model : Model,
	url : function(){
		return window.App.apiURL + '/sites';
	}
});

module.exports = Collection;