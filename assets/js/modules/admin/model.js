var $          = require('jquery'),
	Backbone   = require('backbone');

Backbone.$ = $;

Model = Backbone.Model.extend({
	defaults : {
		username  : '',
		firstname : '',
		lastname  : '',
		phone     : '',
		type      : ''
	},
	urlRoot: function(){
		return window.App.apiURL + '/' +this.get('extension') + '?token=' + window.sessionStorage.token;
	}
});

module.exports = Model;