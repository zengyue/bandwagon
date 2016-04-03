'use strict';

exports.index = function* () {
  this.body = yield this.render('home.html', {
    message: 'Hello World!',
    engine: 'Thomas The Tank',
    helicopter: true
  });
}
