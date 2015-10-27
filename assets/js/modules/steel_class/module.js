var $           = require('jquery'),
	Backbone    = require('backbone'),
	Collection  = require('./collection'),
	Model    	= require('./model');
	// Router   = require('./router');

Backbone.$ = $;

Module = {
	Model      : Model,
	Collection : Collection
}


// new Router();

module.exports = Module;