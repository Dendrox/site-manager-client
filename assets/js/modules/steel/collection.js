var $        = require('jquery'),
	Backbone = require('backbone'),
	moment = require('moment'),
	Model = require('./model');
	Backbone.$ = $;

Collection = Backbone.Collection.extend({
	model : Model,
	url : function(){
		return window.App.apiURL + '/steel_items?token=' + window.sessionStorage.token
		//add token to URL: ?token=' + window.App.data.token
	},
	comparator: function(item){
		return item.get('date_added') == moment( item.get('date_added') ).unix();
	},
});

module.exports = Collection;