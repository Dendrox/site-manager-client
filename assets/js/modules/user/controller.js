var $          = require('jquery'),
	_          = require('underscore'),
	Marionette = require('backbone.marionette'),
    Module     = require('./module');

var Controller = Marionette.Controller.extend({
    initialize : function(){
        console.log('session-controller : init')
    },
    viewTransactions : function(){
        var view = new Module.Views.Transactions();
        this.renderView(view) 
    },
    viewIncoming : function(){
        var view = new Module.Views.Incoming();
        this.renderView(view);
    },
    viewOutgoing : function(){
        var view = new Module.Views.Outgoing();
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