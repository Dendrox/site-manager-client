var $ = require('jquery')
	Marionette = require('backbone.marionette'),
	Backbone = require('backbone'),
	_ = require('underscore'),
    Template = require('../templates/steel_edit.hbs'),
    SteelTypes = require('../collections/steel_types');

SteelEditView = Marionette.ItemView.extend({
	id : 'steel_edit-view',
	tagName : 'div',
	className : 'edit_item',
	template : Template,
	events : {
		'click input#submit-form' : 'submitForm',
		'change select.steel_type' : 'renderSections'
	},
	initialize : function(){
		var self = this;

		// NOTE: This may need to be moved
		this.model.fetch().done(function(response){
			self.getValidTypes()

		}).fail(function(response){
			console.log(response)
		});
		
	},
	getValidTypes : function(){
		this.steelTypes = new SteelTypes();

		var self = this;
		
		this.steelTypes.fetch()
		.done(function(response){
			self.steelTypes = response;
			var obj = {};

			obj.attributes = _.find(response, function(model){
				return model.type === self.model.get('type');
			});
			
			_.defaults(self.model.attributes, obj.attributes);

			// Remove from sthe selected section from sections[]
			// and the selected grade from grades[]
			self.model.set('sections', _.without(self.model.get('sections'), self.model.get('section')));
			self.model.set('grades', _.without(self.model.get('grades'), self.model.get('grade')));

			self.render(self.model);
		});
	},
	renderSections : function(e){

		var obj = {};
		var type = $(e.currentTarget).val();

		obj.attributes = _.find(this.steelTypes, function(model){
			return model.type === type;
		});

		var options = _.pick(obj.attributes, 'types', 'sections', 'grades')
		options.type = type;
		options.section = "";
		options.grade = "";

		_.extend(this.model.attributes, options);

		this.render(this.model);
	},
	submitForm : function(){
		var options = {};
		options.extension = ('/update-steel')
		options.type = this.$el.find($('.steel_type option:selected')).text();
		options.section = this.$el.find($('.steel_section option:selected')).text();
		options.grade = this.$el.find($('.steel_grade option:selected')).text();
		options.length = this.$el.find($('#length ')).val();
		options.quantity = this.$el.find($('#quantity')).val();
		options.comments = this.$el.find($('#comments')).val();

		this.model.save(options)
		.done(function(response){
			console.log(response);
		});
	}

});

module.exports = SteelEditView;