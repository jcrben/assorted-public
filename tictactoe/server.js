
var express = require('express');
var path = require('path');
var app = express();

var host, port;
if (process.env.NODE_ENV === 'production') {
  host = '0.0.0.0';
  port = 5000;
} else {
  host = 'localhost';
  port = 3000;
}

app.use(express.static(path.join(__dirname, 'public')));

var server = app.listen(port, host, function listeningCb() {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});