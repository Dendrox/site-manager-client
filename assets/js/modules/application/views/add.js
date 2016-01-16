var $          = require('jquery'),
	Marionette = require('backbone.marionette'),
	Backbone   = require('backbone'),
    Template   = require('./templates/add.hbs');

Add = Marionette.ItemView.extend({
	id        : 'material-types-view',
	tagName   : 'div',
	className : 'material-types-el',
	template  : Template,
	events : {
		'click div#add_steel' : 'addSteel'
	},
	initialize : function(){		
		console.log('modular add_items')
	},
	addSteel : function(){
		Backbone.history.navigate('add/steel', {trigger : true});
	}

});

module.exports = Add;