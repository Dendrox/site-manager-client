var $        = require('jquery'),
	Backbone = require('backbone'),
	Model    = require('./model'),
	View     = require('./views/index'),
	Router   = require('./router');

Backbone.$ = $;

module.exports = {
	Model  : Model,
	View   : View,
	Router : Router
};