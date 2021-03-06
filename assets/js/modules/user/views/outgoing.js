var $          = require('jquery')
	Marionette = require('backbone.marionette'),
	Backbone   = require('backbone'),
    Template   = require('./templates/outgoing.hbs');

var Item = Marionette.ItemView.extend({
	id        : 'posts-view',
	tagName   : 'div',
	className : 'list_item',
	template  : Template,
	events : {
		'click li#edit'        : 'editPost',
		'click li#delete'      : 'deleteItem',
		'click button.options' : 'showOptions'
	},
	initialize : function(){
		var self = this;
		$(document).on('click', function(e) {
		    if(!$(e.target).is('.actions-container')) {
		      self.$el.find('.actions-container').css({'display' : 'none'});
		    }
		});
	},
	showOptions : function(e){
		e.preventDefault();
		
		this.$el.find('.actions-container').css({'display' : 'block'});
		e.stopPropagation();
	},
	editPost : function(){
		Backbone.history.navigate('edit/'+this.model.id, {trigger : true})
	},
	deleteItem : function(){
		this.model.set('extension', 'delete-steel');

		var self = this;

		this.model.destroy().done(function(response){
			self.$el.remove()

		}).fail(function(response){
			console.log(response)
		});
	}
});

List = Marionette.CollectionView.extend({
	tagname    : 'div',
	childView  : Item,
	className  : 'posts-view',
	initialize : function(){
		var self = this;
		this.collection.fetch({
			data : $.param({added_by : window.App.instance.get('user').get('username')})
		}).done(function(){
			
		});
	}
});

module.exports = List;