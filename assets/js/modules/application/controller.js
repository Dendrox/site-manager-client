var $          = require('jquery'),
	_          = require('underscore'),
	Marionette = require('backbone.marionette'),
	LoginView  = require('../session/views/index'),
    HeaderView = require('../user/views/index'),
    AdminView  = require('../admin/views/index'),
    Module     = require('./module');

var Controller = Marionette.Controller.extend({
    initialize : function(){
        console.log('application: controller');
    },
    showHeader : function(view){
        window.App.headerRegion.show(view);
    },
    login : function() {
    	var view = new LoginView();
    	this.renderView(view);
    },
    navHome : function(){
    	$('#page_title').html('Options');

        var app_model = window.App.instance;
    	var view      = new Module.Views.Index({model: app_model});
        var header    = new HeaderView({model : window.App.instance.get('user')});

        this.showHeader(header);
    	this.renderView(view);
    },
    addMaterials : function(){
        $('#page_title').html('Add Materials');

        var view = new Module.Views.Add();
        this.renderView(view);
    },
    searchMaterials : function(){
        $('#page_title').html('Search Materials');

        var view = new Module.Views.Search();
        this.renderView(view);
    },
    showAdminOptions: function(){
        $('#page_title').html('Admin Options');
        var view = new AdminView();

        this.renderView(view)
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