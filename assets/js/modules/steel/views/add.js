var $ = require('jquery'),
	Marionette = require('backbone.marionette'),
	Backbone   = require('backbone'),
    Template   = require('./templates/add.hbs'),
    ItemClass  = require('../../steel_class/collection'),
    Model      = require('../model');

Backbone.$ = $;

Add = Marionette.ItemView.extend({
	id : 'add-steel-view',
	tagName : 'div',
	className : 'add-steel-el',
	template : Template,
	events : {
		'click input#submit-form' : 'submitForm',
		'change select.steel_type' : 'renderSections'
	},
	initialize : function(){
		this.collection = new ItemClass();
		var self = this;
		this.collection.fetch()
		.done(function(response){
			self.onShow();
		})
		.fail(function(response){
			console.log(response)
		})
		this.listenTo( this.collection, 'reset', this.render);
		
	},
	onShow : function(){
		// Render Type Options
		this.collection.each(function(model){
			var type = model.get('type');
			var id = model.id;
			this.$el.find($('.steel_type')).append('<option value="'+id+'">'+type+'</option>');
		}, this);
	},
	renderSections : function(e){
		this.$el.find($('.steel_section')).empty().append('<option value="">Please select</option>');
		this.$el.find($('.steel_grade')).empty().append('<option value="">Please select</option>');

		var typeID = $(e.currentTarget).val();
		if(typeID.length){
			var type = this.collection.get(typeID);
			var validSections = type.get('sections');
			var grades = type.get('grades');

			var _this = this;

			// Render Section Options
			$.each(validSections, function(value, section){
				_this.$el.find($('.steel_section')).append('<option value="'+value+'">'+section+'</option>');
			});

			// Render Grade Options
			$.each(grades, function(value, grade){
				_this.$el.find($('.steel_grade')).append('<option value="'+value+'">'+grade+'</option>');
			});	
		};//end if
	},
	submitForm : function(){
		var options = {};
		var user = window.App.instance.get('user');
		options.extension = ('add-steel')
		options.type = this.$el.find($('.steel_type option:selected')).text();
		options.section = this.$el.find($('.steel_section option:selected')).text();
		options.grade = this.$el.find($('.steel_grade option:selected')).text();
		options.length = this.$el.find($('#length ')).val();
		options.quantity = this.$el.find($('#quantity')).val();
		options.comments = this.$el.find($('#comments')).val();

		// Steel Log Data
		options.added_by = user.username;
		options.date_added = moment().toDate();

		var steel_item = new Model(options);
		steel_item.save()
		.done(function(response){
			console.log(response)
		})
		.fail(function(response){
			console.log(response);
		})
	}
});

module.exports = Add;