var $        = require('jquery'),
	Backbone = require('backbone');
	Backbone.$ = $;

Model = Backbone.Model.extend({
	defaults : {
		type       : '',
		section    : '',
		grade      : '',
		length     : null,
		quantity   : null,
		comments   : '',
		added_by   : '',
		date_added : '',
		available  : false
	},
	initialize : function(){
		
	},
	parse : function(response){
		response.id = response._id;
		return response;
	},
	urlRoot : function(){
		// 'http://localhost:8080/api/add-steel'
		var url = window.App.apiURL + '/'+this.get('extension');
		return url;
	},
	sync : function(method, model, options){
		console.log('sync method: ', method, 'model: ', model, 'options: ', options);
		if(method==='read' || method==='delete' || method==='update'){
			console.log('reading')
		   options.url =  window.App.apiURL + '/'+this.get('extension') + '/' + this.id + '?token=' + window.sessionStorage.token; 
		}
		else if(method==='create'){
			options.url =  window.App.apiURL + '/'+this.get('extension') + '?token=' + window.sessionStorage.token; 
		}

		return Backbone.sync(method, model, options);
	}
});

module.exports = Model;