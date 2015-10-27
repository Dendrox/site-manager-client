var $ = require('jquery')
	Marionette = require('backbone.marionette'),
	Backbone = require('backbone'),
    Template = require('../templates/my_posts.hbs');

PostView = Marionette.ItemView.extend({
	id : 'posts-view',
	tagName : 'div',
	className : 'list_item',
	template : Template,
	events : {
		'click button.edit' : 'editPost',
		'click button.delete' : 'deleteItem'
	},
	initialize : function(){
		
	},
	onShow : function(){
		console.log(this.model)
	},
	editPost : function(){
		Backbone.history.navigate('edit/'+this.model.id, {trigger : true})
	},
	deleteItem : function(){
		this.model.set('extension', 'delete-steel')
		this.model.destroy()
		.done(function(response){
			console.log(response)
		})
		.fail(function(response){
			console.log(response)
		})
	}

});

module.exports = PostView;