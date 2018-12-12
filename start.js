
/**
 * Module dependencies.
 */

var app = require('./app');
var debug = require('debug')('mserver:server');

/**
 * Get port from environment and store in Express.
 */

var port = normalizePort(process.env.PORT || '3000');

app.listen(port, function() {
  console.log('Listening on port: ' + port);
});


function normalizePort(val) {
  var port = parseInt(val, 10);

  if (isNaN(port)) {
    // named pipe
    return val;
  }

  if (port >= 0) {
    // port number
    return port;
  }

  return false;
}

/**
 * Event listener for HTTP server "listening" event.
 */

function onListening() {
}
