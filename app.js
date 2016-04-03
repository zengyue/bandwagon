'use strict';

var koa = require('koa');
var logger = require('koa-logger');
var route = require('./app/route');
var nunjucks = require('koa-nunjucks-render');

var app = koa();

// middleware
app.use(logger());

// nunjucks render
app.use(nunjucks('./app/views', {}));

// route middleware
route(app);

// listen
app.listen(3000);
