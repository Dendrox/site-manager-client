var $ 		   = require('jquery'),
	Backbone   = require('backbone'),
	Controller = require('./controller'),
	Module     = require('./module');

Backbone.$ = $;

Router = Backbone.Router.extend({
	routes : {
		'add/steel' : 'add',
		'search/steel' : 'search',
		'order/:id' : 'order',
		'edit/:id' : 'edit',
		'view/:id' : 'view'
	},
	initialize : function(){
		this.controller = new Controller();
	},
	add : function(){
		this.controller.add();
	},
	search : function(){
		this.controller.search();
	},
	order : function(id){
		this.controller.order(id);
	},
    edit : function(id){
       this.controller.edit(id);
    },
    view : function(id){
       this.controller.view(id);
    }
});

module.exports = Router;