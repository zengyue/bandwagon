'use strict';

exports.index = function* () {
  const users = yield this.mongo.collection('users').findOne();
  yield this.render('home.html', users);
};
