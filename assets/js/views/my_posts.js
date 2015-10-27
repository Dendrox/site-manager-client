var $ = require('jquery')
	Marionette = require('backbone.marionette'),
    PostView = require('./my_post');

PostsView = Marionette.CollectionView.extend({
	tagname : 'div',
	childView : PostView,
	initialize : function(){
		var user = window.App.instance.get('user');
		this.collection.fetch({data : $.param({added_by : user.username})})
		.done(function(response){
			console.log(response)
		})
		.fail(function(response){
			console.log(response)
		})
	}
});

module.exports = PostsView;