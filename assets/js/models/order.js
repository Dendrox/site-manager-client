var $        = require('jquery'),
	Backbone = require('backbone');
	Backbone.$ = $;

Order = Backbone.Model.extend({
	defaults : {
		date_ordered : '',
		date_added   : '',
		ordered_by   : '',
		added_by     : '',
		item         : {}
	},
	parse : function(response){
		response.id = response._id;
		return response;
	}
});

module.exports = Order;