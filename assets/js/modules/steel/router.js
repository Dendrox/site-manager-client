var $ 		   = require('jquery'),
	Backbone   = require('backbone'),
	Controller = require('./controller'),
	Module     = require('./module');

Backbone.$ = $;

Router = Backbone.Router.extend({
	routes : {
		'add/steel'    : 'add',
		'search/steel' : 'search',
		'order/:id'    : 'order',
		'edit/:id'     : 'edit',
		'view/:id'     : 'view'
	},
	initialize : function(){
		this.controller = new Controller();
	},
	add : function(){
		if(!window.sessionStorage.token)
			return Backbone.history.navigate('login', {trigger: true})
		else
			this.controller.add();
	},
	search : function(){
		if(!window.sessionStorage.token)
			return Backbone.history.navigate('login', {trigger: true})
		else
			this.controller.search();
	},
	order : function(id){
		if(!window.sessionStorage.token)
			return Backbone.history.navigate('login', {trigger: true})
		else
			this.controller.order(id);
	},
    edit : function(id){
    	if(!window.sessionStorage.token)
			return Backbone.history.navigate('login', {trigger: true})
		else
        	this.controller.edit(id);
    },
    view : function(id){
    	if(!window.sessionStorage.token)
			return Backbone.history.navigate('login', {trigger: true})
		else
        	this.controller.view(id);
    }
});

module.exports = Router;