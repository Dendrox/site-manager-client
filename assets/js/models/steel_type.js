var $        = require('jquery'),
	Backbone = require('backbone');
	Backbone.$ = $;

SteelType = Backbone.Model.extend({
	// defaults : {
	// 	type : '',
	// 	sections : [],
	// 	grades : []
	// },
	initialize : function(options){

	},
	parse : function(response){
		response.id = response._id;
		return response;
	},
	urlRoot : 'http://localhost:8080/api/steel_types'
});

module.exports = SteelType;