var $        = require('jquery'),
	Backbone = require('backbone');
	Backbone.$ = $;

Item = Backbone.Model.extend({
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
	},
	urlRoot : function(){
		var url = window.App.apiURL + '/'+this.get('extension') + '?token='+window.sessionStorage.token;
		return url;
	}
});

module.exports = Item;