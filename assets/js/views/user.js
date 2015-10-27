var $ = require('jquery')
	Marionette = require('backbone.marionette'),
    Template = require('../templates/user.hbs');

UserView = Marionette.ItemView.extend({
	id : 'user-view',
	tagName : 'span',
	className : 'instruction',
	template : Template,

	events : {
		'click #title' : 'alertTitle'
	},

	initialize : function(){
		console.log('First Handlebars View')
	},
	alertTitle : function(){
		console.log(this.model.escape('username'));
	}

});

module.exports = UserView;