var $          = require('jquery'),
	Marionette = require('backbone.marionette'),
	Backbone   = require('backbone');

Backbone.$ = $;

// Set Remote and Local URLs
var remote_url = 'https://intense-thicket-2598.herokuapp.com/api';
var local_url  = 'http://localhost:8080/api';

App = new Marionette.Application();

// Required Modules and files for App Initialization
var Application   = require('./modules/application/module'),
	AppRouter     = require('./modules/application/router'),
	SteelRouter   = require('./modules/steel/router'),
	UserRouter    = require('./modules/user/router'),
	SessionRouter = require('./modules/session/router'),
	AdminRouter   = require('./modules/admin/router');

// Setup Application
App.views    = {};
App.data     = {};
App.apiURL   = remote_url;
App.instance = new Application.Model();

// Add Viewing Regions
App.addRegions({
	mainRegion    : '#main-region',
	headerRegion  : '#header-region',
	filterRegion  : '#filter-region',
	loadingRegion : '#loading-region'
});

// Return user to login screen if no session token exists
if(window.sessionStorage.token)
    window.location.href = '/#home'
else
    window.location.href = '/#login'

// Start Application
App.on('start', function() {
	
	// Initialise Routers
	App.router          = new AppRouter();
	App.router.steel    = new SteelRouter();
	App.router.user     = new UserRouter();
	App.router.sesssion = new SessionRouter();
	App.router.admin    = new AdminRouter();

	// Note: Needs to be removed
	$.ajaxSetup({
	    beforeSend:function(){
	        // show gif here, eg:
	        $("#loading").show();
	    },
	    complete:function(){
	        // hide gif here, eg:
	        $("#loading").hide()
	    }
	});

	Backbone.history.start();
});

App.start();

module.exports = App;