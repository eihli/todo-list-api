var expect = require('chai').expect;
var request = require('supertest');
var app = require('../src/app');

describe('api', function() {
  describe('todo-items', function() {
    it('should respond with success status', function(done) {
      request(app)
        .get('/api/todo-items')
        .expect(200)
        .end(done);
    });
  });
});
