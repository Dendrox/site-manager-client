var $        = require('jquery'),
	Backbone = require('backbone');
	Backbone.$ = $;

Model = Backbone.Model.extend({
	initialize : function(){
		
	},
	defaults : {
		job_number : null
	},
	urlRoot : function(){
		// 'http://localhost:8080/api/add-steel'
		var url = window.App.apiURL + '/sites';
		return url;
	}
});

module.exports = Model;