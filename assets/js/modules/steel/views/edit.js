var $ = require('jquery')
	Marionette = require('backbone.marionette'),
	Backbone = require('backbone'),
	_ = require('underscore'),
    Template = require('./templates/edit.hbs'),
    SteelTypes = require('../../steel_class/collection');

require('jquery-ui');

Edit = Marionette.ItemView.extend({
	id : 'steel_edit-view',
	tagName : 'div',
	className : 'edit_item',
	template : Template,
	events : {
		'click input#submit-form'  : 'validateForm',
		'click input#cancel-form'  : 'cancelForm',
		'change select.steel_type' : 'renderSections',
		'change select#job_number' : 'renderProject',
		'focus input#date_col'     : 'selectDate',
		'click div.add_project'    : 'addProjectForm'

	},
	initialize : function(){
		var self = this;

		this.formValid  = false;
		this.jobExists  = true;

		// NOTE: This may need to be moved
		this.model.fetch().done(function(response){
			self.getValidTypes()

		}).fail(function(response){
			console.log(response)
		});
		
	},
	addProjectForm: function(e){
		$(e.currentTarget).hide();
		this.$el.find('#job_number').hide();
		this.$el.find('#job_number2').val('').show();
		this.$el.find('#project').val('').attr("readonly", false);
		this.jobExists = false;
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

			// Remove selected section from sections[]
			// and the selected grade from grades[]
			self.model.set('sections', _.without(self.model.get('sections'), self.model.get('section')));
			self.model.set('grades', _.without(self.model.get('grades'), self.model.get('grade')));

			window.App.instance.get('sites').fetch();

			self.render(self.model);
		});
	},
	renderProject: function(e){
		e.preventDefault();

		var collection = window.App.instance.get('sites');

		var project = _.find(collection.models, function(site){
			return site.get('job_number') == $(e.currentTarget).val()
		});

		this.$el.find('#project').val(project.get('project'))

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
	onRender: function(){
		var self = this;
		var collection = window.App.instance.get('sites').toJSON();

		if(this.model.get('job_number')){
			$.each(collection, function(i, val){
				if(val.job_number !== self.model.get('job_number'))
					self.$el.find('#job_number').append('<option project="'+val.project+'" value="'+val.job_number+'">'+val.job_number+'</option>');
			});
		}
	},
	selectDate : function(){
		this.$el.find('#date_col').datepicker({ 
			minDate: 0,
			dateFormat: 'dd-mm-yy'
		});
	},
	cancelForm : function(){
		window.history.back();
	},
	submitForm : function(options){
		var self = this;

		this.model.save(options).always(function(){
			self.$el.find('form.add_steel').empty();
		}).done(function(response){
			Backbone.history.navigate('transactions/outgoing', {trigger: true})
			console.log(response);
		});
	},
	validateForm: function(){
		var options = {};
		options.extension  = ('/update-steel');
		options.type       = this.$el.find('.steel_type option:selected').text();
		options.section    = this.$el.find('.steel_section option:selected').text();
		options.grade      = this.$el.find('.steel_grade option:selected').text();
		options.length     = this.$el.find('#length ').val();
		options.quantity   = this.$el.find('#quantity').val();
		options.project    = this.$el.find('#project').val();

		if(this.jobExists)
			options.job_number = this.$el.find('#job_number option:selected').text()
		else
			options.job_number = this.$el.find('#job_number2').val()

		options.date_col   = this.$el.find('#date_col').val();
		options.comments   = this.$el.find('#comments').val();
		options.added_by   = window.App.instance.get('user').get('username');
		options.date_added = moment().format("DD-MM-YYYY HH:MM").toString();

		var _this = this;

		// NOTE: Need to find a better way to do this
		var counter = 0;
		var inputsToValidate = [
			options.type, 
			options.section, 
			options.grade, 
			options.length, 
			options.quantity,
			options.project,
			options.job_number,
			options.date_col
		];

		// Loop through each item to check for empty strings
		$.each(inputsToValidate, function(key, value){
			if(value === '' || value === 'Please select' ){
				_this.$el.find('.error').append('<h3>Submission Failed!</h3><p>Please fill in all fields</p>');
				_this.$el.find('.error').show();
				setTimeout(function(){
					_this.$el.find('.error').fadeOut();
				}, 3000);
				return false;
			}
			else {
				counter++;
			}
			if(key === (inputsToValidate.length - 1))
				_this.submitForm(options);
		});
	},

});

module.exports = Edit;