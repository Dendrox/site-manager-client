var $ = require('jquery'),
	Marionette = require('backbone.marionette'),
	Backbone = require('backbone'),
    Template = require('../templates/add_materials.hbs');

AddMaterialsView = Marionette.ItemView.extend({
	id : 'material-types-view',
	tagName : 'div',
	className : 'material-types-el',
	template : Template,
	events : {
		'click div#add_steel' : 'addSteel'
	},
	addSteel : function(){
		Backbone.history.navigate('add/steel', {trigger : true});
	}

});

module.exports = AddMaterialsView;