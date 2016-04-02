module.exports = function(port) {
  port = port || 3333;

  var app = require('./app.js');
  var server = app.listen(port, function() {
    console.log('App listening on port ' + port);
  });
  return server;
};
