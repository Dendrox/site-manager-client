var $        = require('jquery'),
	Backbone = require('backbone'),
	Model    = require('./model'),
	Views    = require('./view');

	Backbone.$ = $;

Module = {
	Model : Model,
	Views : Views
}

module.exports = Module;