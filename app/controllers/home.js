'use strict';

exports.index = function* () {
  this.mongo.collection('users').insertOne({users: 'test'}, function (err, doc) {
    console.log(doc);
  });

  this.body = yield this.mongo.collection('users').findOne();

  // this.body = yield this.render('home.html', {
  //   message: 'Hello World!',
  //   engine: 'Thomas The Tank',
  //   helicopter: true
  // });
}
