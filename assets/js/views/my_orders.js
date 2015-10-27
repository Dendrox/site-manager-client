var $ = require('jquery')
	Marionette = require('backbone.marionette'),
    OrderView = require('./my_order');

OrdersView = Marionette.CollectionView.extend({
	tagname : 'div',
	childView : OrderView,
	initialize : function(){
		var user = window.App.instance.get('user');
		this.collection.fetch({data : $.param({ordered_by : user.username})})
		.done(function(response){
			console.log(response)
		})
		.fail(function(response){
			console.log(response)
		})
	}
});

module.exports = OrdersView;