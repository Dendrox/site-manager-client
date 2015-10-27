// var $ = require('jquery')
// 	Marionette = require('backbone.marionette'),
// 	Backbone = require('backbone'),
//     Template = require('../templates/steel_item.hbs');

// SteelItemView = Marionette.ItemView.extend({
// 	id : 'steel_item-view',
// 	tagName : 'div',
// 	className : 'list_item',
// 	template : Template,
// 	events : {
// 		'click div.steel-item' : 'orderItem'
// 	},
// 	initialize : function(){
		
// 	},
// 	onShow : function(){
// 		console.log('steel-item-view')
// 	},
// 	orderItem : function(){
// 		var item_id = this.model.id;
// 		this.model.save({
// 			'available' : false, 
// 			'extension' : 'update-steel',
// 		})
// 		.done(function(response){
// 			console.log(response);
// 			Backbone.history.navigate('order-steel/'+item_id, {trigger:true});
// 		})
// 	}

// });

// module.exports = SteelItemView;