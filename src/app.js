var path = require('path');
var express = require('express');
var app = express();

app.use(express.static(path.join(__dirname, '../app')));

app.get('/api/todo-items', function(req, res, next) {
  res.sendStatus(200);
});

module.exports = app;
