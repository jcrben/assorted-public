define(function(require) {
  var logger = require('./logger');
  var textTransformer = require('./textTransformer');

  for (var i = 0; i < 50; i++) {
    var text = textTransformer(i);
    logger(text);
  }

});