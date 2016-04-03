'use strict';

var koa = require('koa');
var logger = require('koa-logger');
var route = require('./app/route');
var nunjucks = require('koa-nunjucks-render');
var mongo = require('koa-mongo');

var app = koa();

// middleware
app.use(logger());

// nunjucks render
app.use(nunjucks('./app/views', {}));

app.use(mongo({
  db: 'test'
}));
// app.use(mongo({
//   host: 'localhost',
//   port: 27017,
//   user: 'admin',
//   pass: '123456',
//   db: 'test',
//   max: 100,
//   min: 1,
//   timeout: 30000,
//   log: false
// }));

// route middleware
route(app);

// listen
app.listen(3000);
