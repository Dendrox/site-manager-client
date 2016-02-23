var $ = require('jquery')
	Marionette = require('backbone.marionette'),
	Backbone = require('backbone'),
	moment = require('moment'),
	SteelItem = require('../model'),
    Template = require('./templates/order.hbs');
require('jquery-ui');

var fieldsToValidate = 4;

Order = Marionette.ItemView.extend({
	id : 'steel_order-view',
	tagName : 'div',
	className : 'display_item',
	template : Template,
	events : {
		'click button.confirm_order' : 'validateOrder',
		'click button.cancel_order' : 'cancelOrder',
		'click button#view' : 'viewOrder',
		'click button#home' : 'goHome',
		'focus input#date_req' : 'selectDate',
		'focusout input#date_req' : 'hideDateHint',
		'input input#date_req' : 'validateDate',
		'change select#job_number' : 'renderProject',
		'click div.add_project' : 'addProjectForm'
		//'change input#order_quantity' : 'validateQuantity'
	},
	addProjectForm: function(e){
		$(e.currentTarget).hide();
		this.$el.find('#job_number').hide();
		this.$el.find('#job_number2').show();
		this.$el.find('#project').val('').attr("readonly", false);
		this.jobExists = false;
	},
	hideDateHint : function(){
		this.$el.find('div.hint').fadeOut();
	},
	initialize : function(){
		var self = this;
		this.model.fetch()
		.done(function(response){
			console.log(response);
			self.render();
		})
		.fail(function(response){
			console.log(response)
		});
		this.jobExists = true;
	},
	onShow: function(){
		console.log('ordee form');
		var self = this;
		window.App.instance.get('sites').fetch().done(function(response){
			$.each(response, function(i, val){
				self.$el.find('#job_number').append('<option project="'+val.project+'" value="'+val.job_number+'">'+val.job_number+'</option>');
			})
		});
	},
	renderProject: function(e){
		e.preventDefault();

		var collection = window.App.instance.get('sites');

		var project = _.find(collection.models, function(site){
			return site.get('job_number') == $(e.currentTarget).val()
		});

		this.$el.find('#project').val(project.get('project'))
		this.$el.find('#job_number2').val(parseInt($(e.currentTarget).val()))

	},
	selectDate : function(){
		var now = moment()._d;
		var dateAvailable = moment(this.model.get('date_col'), 'DD-MM-YYYY')._d;

		this.$el.find('#date_req').datepicker({ 
			minDate: dateAvailable,
			dateFormat: 'dd-mm-yy'
		});
		if( moment(dateAvailable).isAfter(now) ){
			this.$el.find('div.hint').fadeIn();
		}
	},
	validateOrder : function(){
		var self = this;
		var errors = false;

		if(this.validateQuantity() === false)
			return false;

		this.$el.find('input').each(function(key, input){
			if(input.value === ''){
				errors = true;
				$('#'+input['id']).addClass('fieldError')
			}
			if(errors === true && (key+1) === fieldsToValidate){
				self.$el.find('.error .text').empty().append('<h3>Order Failed!</h3><p>Please fill in all fields</p>');
					
			    self.$el.find('.error').show();
			    setTimeout(function(){
					self.$el.find('.error').fadeOut();
				}, 3000);
				return false;ƒ

			}
			else{
				if((key+1) === fieldsToValidate && errors === false){
					var quantity_ordered = parseInt(self.$el.find('#order_quantity').val());
					var new_quantity = self.model.get('quantity') - quantity_ordered;

					var options = {
						extension    : 'create_order',
						ordered_by   : window.App.instance.get('user').get('username'),
						date_ordered : moment().format("DD-MM-YYYY HH:MM").toString(),
						quantity     : quantity_ordered,
						job_number   : parseInt(self.$el.find('#job_number2').val()),
						project      : self.$el.find('#project').val(),
						date_req     : self.$el.find('#date_req').val()
					};

					self.confirmOrder(quantity_ordered, new_quantity, self.model, options);
				}
			}
		});
	},
	validateQuantity : function(){
		var self = this;
		var val = this.$el.find('#order_quantity').val();

		if(val > this.model.get('quantity')){
			this.$el.find('.error .text').empty().append('<h3>Invalid Order!</h3><p>Quantity exceeds available amount of '+this.model.get('quantity')+'</p>');
					
		    this.$el.find('.error').show();
		    this.$el.find('#order_quantity').addClass('fieldError');
		    setTimeout(function(){
				self.$el.find('.error').fadeOut();
			}, 3000);
			return false;
		}
		else{
			this.$el.find('#order_quantity').removeClass('fieldError');
			this.$el.find('.error').fadeOut();
			return true;
		}
	},
	confirmOrder : function(quantity_ordered, new_quantity, model, options){
		var _this = this;


		this.$el.find('.steel_order').empty();
		this.model.save({
			//'available'   : false, 
			'extension'   : 'update-steel',// Merge order options with model and replace quantity
			'quantity'     : new_quantity
		}).done(function(response){
			_this.$el.find($('.confirmation')).show();
		});

		var order_details = _.extend(_.pick(model.attributes, 'type', 'section', 'length', 'grade', 'added_by', 'date_added'), options);
			

		var order = new SteelItem(order_details);

		console.log(order);

		order.save().done(function(response){
			console.log('res',response);
		}).fail(function(err){
			console.log(err);
		});
	},
	cancelOrder : function(){
		Backbone.history.navigate('search/steel', {trigger: true});
	},
	viewOrder: function(){
		this.$el.find($('.confirmation')).hide();
		Backbone.history.navigate('transactions/incoming', {trigger: true});
	},
	goHome: function(){
		this.$el.find($('.confirmation')).hide();
		Backbone.history.navigate('home', {trigger: true});
	}

});

module.exports = Order;