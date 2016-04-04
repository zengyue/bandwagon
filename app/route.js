'use strict';

const route = require('koa-route');

module.exports = function(app) {
  app.use(route.get('/', require('./controllers/home').index));
};
