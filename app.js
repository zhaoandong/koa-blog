var http = require("http");
var app = require("./lib/app");
var host = app.callback();

// module.exports = app;

// var http = require('http');

/**
 * Create HTTP server.
 */

// var server = http.createServer(app);

/**
 * Listen on provided port, on all network interfaces.
 */

// server.listen(3000);

app.listen(3000);

// http.createServer(host).listen(3000);