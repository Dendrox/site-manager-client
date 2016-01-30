var $          = require('jquery'),
	Backbone   = require('backbone');

Backbone.$ = $;

Model = Backbone.Model.extend({
	defaults : {
		
	},
	urlRoot: function(){
		return window.App.apiURL + '/users';
	}
});

module.exports = Model;