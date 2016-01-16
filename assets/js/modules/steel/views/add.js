var $          = require('jquery'),
	Marionette = require('backbone.marionette'),
	Backbone   = require('backbone'),
    Template   = require('./templates/add.hbs'),
    Model      = require('../model'),
    Sites      = require('../../sites/module');

require('jquery-ui');

Backbone.$ = $;

Add = Marionette.ItemView.extend({
	id        : 'add-steel-view',
	tagName   : 'div',
	className : 'add-steel-el',
	template  : Template,
	events : {
		'click input#submit-form'  : 'validateForm',
		'click input#cancel-form'  : 'cancelForm',
		'click button#view'        : 'viewOutgoing',
		'click button#home'        : 'goHome',
		'change select.steel_type' : 'renderSections',
		'change select#job_number' : 'renderProject',
		'focus input#date_col'     : 'selectDate',
		'click div.add_project'    : 'addProjectForm'
	},
	addProjectForm: function(e){
		$(e.currentTarget).hide();
		this.$el.find('#job_number').hide();
		this.$el.find('#job_number2').val('').show();
		this.$el.find('#project').val('').attr("readonly", false);
		this.jobExists = false;
	},
	initialize : function(){
		this.formValid  = false;
		this.jobExists  = true;
		console.log(moment().valueOf());
	},
	onShow : function(){
		// Render Type Options
		var self = this;
		var data = [];

		this.collection.each(function(model, i){
			var type = model.get('type');
			var id   = model.id;

			self.$el.find('.steel_type').append('<option value="'+id+'">'+type+'</option>');
		}, this);

		window.App.instance.get('sites').fetch().done(function(response){
			$.each(response, function(i, val){
				self.$el.find('#job_number').append('<option project="'+val.project+'" value="'+val.job_number+'">'+val.job_number+'</option>');
			});
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
		this.$el.find('.steel_section').empty().append('<option value="">Please select</option>');
		this.$el.find('.steel_grade').empty().append('<option value="">Please select</option>');

		var typeID = $(e.currentTarget).val();

		if(typeID.length){
			var type = this.collection.get(typeID);
			var validSections = type.get('sections');
			var grades = type.get('grades');

			var _this = this;

			// Render Section Options
			$.each(validSections, function(value, section){
				_this.$el.find('.steel_section').append('<option value="'+value+'">'+section+'</option>');
			});

			// Render Grade Options
			$.each(grades, function(value, grade){
				_this.$el.find('.steel_grade').append('<option value="'+value+'">'+grade+'</option>');
			});	
		};//end if
	},
	cancelForm : function(){
		window.history.back();
	},
	submitForm : function(options){
		var _this = this;

		var steel_item = new Model(options);
		this.$el.find('form.add_steel').empty();

		steel_item.save().done(function(response){
			_this.$el.find($('.confirmation')).show();
		}).fail(function(response){
			// NOTE: Some thing needs to go here
			console.log(response);
		})
	},
	selectDate : function(){
		this.$el.find('#date_col').datepicker({ 
			minDate: 0,
			dateFormat: 'dd-mm-yy'
		});
	},
	validateForm: function(){
		var options = {};
		options.extension  = ('add-steel');
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
	viewOutgoing: function(){
		this.$el.find($('.confirmation')).hide();
		Backbone.history.navigate('transactions/outgoing', {trigger: true});
	},
	goHome: function(){
		this.$el.find($('.confirmation')).hide();
		Backbone.history.navigate('home', {trigger: true});
	}
});

module.exports = Add;