var $ = require('jquery'),
	Marionette = require('backbone.marionette'),
	Backbone = require('backbone'),
	Controller = require('./controller'),
	ExtendRouter = require('./views/router_extend'),
	Application = require('./modules/application/module'),
	AppRouter   = require('./modules/application/router'),
	SteelRouter = require('./modules/steel/router'),
	UserRouter  = require('./modules/user/router'),
	User = require('./models/user');

Backbone.$ = $;

App = new Marionette.Application();

App.views = {};
App.data  = {};
App.instance = new Application.Model();

// Add Viewing Regions
App.addRegions({
	mainRegion : '#main-region',
	headerRegion : '#header-region',
	filterRegion : '#filter-region'
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

	Backbone.history.start();
});

App.start();
module.exports = App;