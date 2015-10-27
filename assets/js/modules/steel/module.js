var $          = require('jquery'),
	Backbone   = require('backbone'),
	Model      = require('./model'),
	Collection = require('./collection'),
	Views      = require('./view');

Backbone.$ = $;

module.exports = {
	Model      : Model,
	Collection : Collection,
	Views      : Views
}



