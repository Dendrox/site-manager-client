var $ = require('jquery'),
	Marionette = require('backbone.marionette'),
	Backbone = require('backbone');

Backbone.$ = $;

App = new Marionette.Application();

App.views = {};
App.data  = {};
App.apiURL = 'http://localhost:8080/api';
//'https://intense-thicket-2598.herokuapp.com/api';


// NOTE: This needs to be moved maybe to a boot module
var Controller   = require('./controller'),
	ExtendRouter = require('./views/router_extend'),
	Application  = require('./modules/application/module'),
	AppRouter    = require('./modules/application/router'),
	SteelRouter  = require('./modules/steel/router'),
	UserRouter   = require('./modules/user/router'),
	User         = require('./models/user');

App.instance = new Application.Model();

// Add Viewing Regions
App.addRegions({
	mainRegion : '#main-region',
	headerRegion : '#header-region',
	filterRegion : '#filter-region',
	loadingRegion : '#loading-region'
});


if(window.sessionStorage.token){
    console.log('token exists!')
    window.location.href = '/#home';
}
else{
    console.log('token no exist')
    window.location.href = '/#login';
}

App.on('start', function() {

	App.router = new AppRouter();
	App.router.steel = new SteelRouter();
	App.router.user = new UserRouter();

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