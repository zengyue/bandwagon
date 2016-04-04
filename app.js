'use strict';

const koa = require('koa');
const logger = require('koa-logger');
const route = require('./app/route');
const nunjucks = require('koa-nunjucks-render');
const mongo = require('koa-mongo');
const app = koa();
const config = require('./config/config');

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
app.listen(config.port);
