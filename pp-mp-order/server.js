'use strict';

const paypalConfig = require('../paypal/config.json')

/* function ppConfig()
 * 
 * Description: Returns the PayPal config from the root of pp-mp-examples
 *
 * @return: object
 */
global.ppConfig = () => {
	return paypalConfig
}

var app = require('./index');
var http = require('http');


var server;

/*
 * Create and start HTTP server.
 */

server = http.createServer(app);
server.listen(process.env.PORT || 8000);
server.on('listening', function () {
    console.log('Server listening on http://localhost:%d', this.address().port);
});
