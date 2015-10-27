var $ = require('jquery')
	Marionette = require('backbone.marionette'),
	Backbone = require('backbone'),
    Template = require('./templates/outgoing.hbs');

var Item = Marionette.ItemView.extend({
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

List = Marionette.CollectionView.extend({
	tagname : 'div',
	childView : Item,
	initialize : function(){
		this.collection = window.App.instance.get('user').get('outgoing');
	}
});

module.exports = List;