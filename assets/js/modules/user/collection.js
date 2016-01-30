var $        = require('jquery'),
	Backbone = require('backbone'),
	moment = require('moment'),
	Model    = require('../steel/model');
	Backbone.$ = $;

Incoming = Backbone.Collection.extend({
	model : Model,
	url : function(){
		return window.App.apiURL + '/steel_outs/users?token=' + window.sessionStorage.token;
	},
	comparator: function(item){
		return moment(item.get('date_req').toString(), 'DD-MM-YYYY').unix()*-1;
	}
});

Outgoing = Backbone.Collection.extend({
	model : Model,
	url : function(){
		return window.App.apiURL + '/steel_items/users?token=' + window.sessionStorage.token;
	},
	comparator: function(item){
		return moment(item.get('date_col').toString(), 'DD-MM-YYYY').unix()*-1;
	}
});

module.exports = {
	Incoming : Incoming,
	Outgoing : Outgoing
};