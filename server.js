// Module dependencies
var application_root = __dirname,
	express = require('express'),
	path = require('path');

// Create Server
var app = express();

// Configure Server
app.configure( function(){
	// parses request body and populates request.body
	app.use( express.bodyParser() );

	//checks request.body for HTTP method Overrides
	app.use( express.methodOverride() );

	// perform route lookup based on URL and HTTP method
	app.use( app.router );

	// where to serve static content
	app.use( express.static( path.join( application_root, '/')));

	// show all errors in development
	app.use( express.errorHandler({ dumpExceptions: true, showStack: true}));
});

// Start Server
var port = process.env.PORT || 3000;
app.listen(port, function(){
	console.log('Server listening on port ', port, app.settings.env)
});

