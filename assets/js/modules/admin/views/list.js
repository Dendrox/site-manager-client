var $          = require('jquery')
	Marionette = require('backbone.marionette'),
    Template   = require('./templates/user.hbs');

var User = Marionette.ItemView.extend({
	id        : 'users-view',
	tagName   : 'div',
	className : 'list_item',
	template  : Template,
	events : {
		
	},
	initialize : function(){
		
	}
});

List = Marionette.CollectionView.extend({
	tagname : 'div',
	className: 'users_list',
	childView : User,
	initialize : function(){
		console.log(this.collection.toJSON())
	},
	onShow: function(){
		this.$el.append('<div id="addUsers"><h3>Add</h3></div>')
	}
	
});

module.exports = List;