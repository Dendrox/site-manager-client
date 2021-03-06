var $          = require('jquery'),
	_          = require('underscore'),
	Marionette = require('backbone.marionette'),
    Session    = require('./model'),
	LoginView  = require('./views/index');

var Controller = Marionette.Controller.extend({
    initialize : function(){
        console.log('session-controller : init');
    },
    login : function() {
        console.log('login');
        var model = new Session();
    	var view  = new LoginView({model : model});
    	this.renderView(view);
    },
    renderView: function(view) {
        this.destroyCurrentView(view);
        window.App.mainRegion.show(view);
    },
    destroyCurrentView: function(view) {
        if (!_.isUndefined(window.App.views.currentView)) {
            window.App.views.currentView.destroy();
        }
        window.App.views.currentView = view;
    }
});

module.exports = Controller;