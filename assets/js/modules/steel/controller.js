var $             = require('jquery'),
	_             = require('underscore'),
	Marionette    = require('backbone.marionette'),
    Module        = require('./module');

var Controller = Marionette.Controller.extend({
    initialize : function(){
        console.log('steel controller : init');
    },
    add : function(){
        $('#page_title').html('Add Steel');

        var collection = window.App.instance.get('steelTypes');
        var view        = new Module.Views.Add({collection : collection});

        this.renderView(view);
    },
    search : function(){
        $('#page_title').html('Search Steel');

        var collection = new Module.Collection();
        var view       = new Module.Views.List({collection : collection});

        this.renderView(view);
    },
    order : function(id){
        $('#page_title').html('Order');

        var model = new Module.Model({
            id : id,
            extension : 'steel_item'
        });
        var view  = new Module.Views.Order({model : model});

        this.renderView(view);
    },
    edit : function(id){
        $('#page_title').html('Edit');

        var model = new Module.Model({
            id : id,
            extension : 'steel_item'
        });
        var view  = new Module.Views.Edit({model : model});
        
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