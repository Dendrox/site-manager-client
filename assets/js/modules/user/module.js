var $        = require('jquery'),
	Backbone = require('backbone'),
	Model    = require('./model'),
	Views    = require('./view');
	// Router   = require('./router');

Backbone.$ = $;

Module = {
	Model  : Model,
	Views  : Views
}
// new Router();

module.exports = Module;