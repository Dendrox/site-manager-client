var $        = require('jquery'),
	Backbone = require('backbone');
	User = require('./user');
	SteelTypes = require('../collections/steel_types');
	Backbone.$ = $;

Application = Backbone.Model.extend({
	defaults : {
		user : new User(),
		steelTypes : new SteelTypes()
	},
	attributes : {
		test : 'test'
	},
	initialize : function(){
		if(window.sessionStorage.token)
			this.defaults.user.fetch();
	}
});

module.exports = Application;