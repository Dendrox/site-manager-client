var $ = require('jquery')
	Marionette = require('backbone.marionette'),
    UserView = require('./user');



UsersView = Marionette.CollectionView.extend({
	tagname : 'div',
	childView : UserView
});

module.exports = UsersView;