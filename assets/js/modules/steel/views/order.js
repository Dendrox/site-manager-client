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
		'input input#date_req' : 'validateDate'
		//'change input#order_quantity' : 'validateQuantity'
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
		})
	},
	selectDate : function(){
		var now = moment()._d;
		var dateAvailable = moment(this.model.get('date_col'), 'DD-MM-YYYY')._d;

		this.$el.find('#date_req').datepicker({ 
			minDate: dateAvailable,
			dateFormat: 'dd/mm/yy'
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
						extension    : 'order-steel',
						ordered_by   : window.App.instance.get('user').get('username'),
						date_ordered : moment().valueOf(),
						quantity     : quantity_ordered,
						job_number   : parseInt(self.$el.find('#job_number').val()),
						location     : self.$el.find('#location').val(),
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
			'extension'   : 'update-steel',
			'quantity'     : new_quantity
		}).done(function(response){

			// Merge order options with model and replace quantity
			var order_details = _.extend(_.pick(model.attributes, 'type', 'section', 'length', 'grade', 'added_by', 'date_added'), options);
			

			var order = new SteelItem(order_details);

			order.save().done(function(response){
				console.log(response);
			}).fail(function(err){
				console.log(err);
			})
			
			_this.$el.find($('.confirmation')).show();
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