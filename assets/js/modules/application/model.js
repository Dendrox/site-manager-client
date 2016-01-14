var $        = require('jquery'),
	Backbone = require('backbone'),
	User = require('../user/module'),
	SteelTypes = require('../steel_class/module'),
	Session = require('../session/module'),
	Sites = require('../sites/module');

Backbone.$ = $;

Model = Backbone.Model.extend({
	defaults : {
		user : new User.Model(),
		steelTypes : new SteelTypes.Collection(),
		sites : new Sites.Collection(),
		session : Session
	},
	initialize : function(){
		var _this = this;
		this.defaults.steelTypes.fetch().done(function(){
			_this.defaults.sites.fetch().done(function(response){
				console.log(response);
			})
		});
	}
});

module.exports = Model;