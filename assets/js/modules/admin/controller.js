var $          = require('jquery'),
	_          = require('underscore'),
    Marionette = require('backbone.marionette'),
	Module     = require('./module');

var Controller = Marionette.Controller.extend({
    initialize : function(){
        console.log('admin: controller');
    },
    showUsers: function(){
        $('#page_title').html('List Users');
        var collection = new Module.Collection();

        var self = this;

        collection.fetch().always(function(res){
            var view = new Module.Views.List({collection: collection});
            self.renderView(view);
        })
        
    },
    addUser: function(){
        $('#page_title').html('Add Users');
        var model = new Module.Model();
        var view = new Module.Views.Add({model: model});
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