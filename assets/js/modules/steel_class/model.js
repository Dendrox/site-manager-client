var $        = require('jquery'),
	Backbone = require('backbone');
	
Backbone.$ = $;

Model = Backbone.Model.extend({
	defaults : {
		type     : '',
		types    : [],
		sections : [],
		grades   : []
	},
	initialize : function(options){

	},
	parse : function(response){
		response.id = response._id;
		return response;
	},
	urlRoot : window.App.apiURL + '/steel_types'
});

module.exports = Model;