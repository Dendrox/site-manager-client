var $          = require('jquery'),
	_          = require('underscore'),
	Marionette = require('backbone.marionette'),
    Module     = require('./module');

var Controller = Marionette.Controller.extend({
    initialize : function(){
        console.log('session-controller : init')
    },
    viewTransactions : function(){
        $('#page_title').html('Account');
        var view = new Module.Views.Transactions();
        this.renderView(view) 
    },
    viewIncoming : function(){
        $('#page_title').html('Incoming');
        var collection = window.App.instance.get('user').get('incoming');
        var view = new Module.Views.Incoming({collection : collection});
        this.renderView(view);
    },
    viewOutgoing : function(){
        $('#page_title').html('Outgoing');
        var collection = window.App.instance.get('user').get('outgoing');
        var view = new Module.Views.Outgoing({collection : collection});
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