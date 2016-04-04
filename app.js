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

// mongodb middleware
app.use(mongo({
  db: 'test'
}));

// route middleware
route(app);

// listen
app.listen(3000);
