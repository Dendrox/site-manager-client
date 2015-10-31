var $        = require('jquery'),
	Backbone = require('backbone'),
	User = require('../user/module'),
	SteelTypes = require('../steel_class/module'),
	Session = require('../session/module');

Backbone.$ = $;

Model = Backbone.Model.extend({
	defaults : {
		user : new User.Model(),
		steelTypes : new SteelTypes.Collection(),
		session : Session
	},
	initialize : function(){
		this.defaults.steelTypes.fetch();
	}
});

module.exports = Model;