var $        = require('jquery'),
	Backbone = require('backbone')
	Model = require('./model');
	Backbone.$ = $;

Collection = Backbone.Collection.extend({
	model : Model,
	url : function(){
		return window.App.apiURL + '/sites';
		//add token to URL: ?token=' + window.App.data.token
	}
});

module.exports = Collection;