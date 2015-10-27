var $        = require('jquery'),
	Backbone = require('backbone'),
	Model    = require('./model'),
	View     = require('./views/index'),
	Router   = require('./router');

Backbone.$ = $;

Module = {
	Model  : Model,
	View   : View,
	Router : Router,
}


new Router();

module.exports = Module;