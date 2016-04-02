var expect = require('chai').expect;
var http = require('http');

describe('homepage', function() {
  var options, app, server;

  beforeEach(function(done) {
    app = require('../src/app');
    options = {
      host: 'localhost',
      port: '2222'
    };
    server = app.listen(2222, function() {
      done();
    });
  });
  afterEach(function() {
    server.close();
  });
  it('should have an h1 tag with Todo List', function(done) {
    http.request(options, function(response) {
      var body = '';
      response.on('data', function(chunk) {
        body += chunk;
      });
      response.on('end', function() {
        expect(body).to.contain('Todo List');
        done();
      });
    }).end();
  });
});
