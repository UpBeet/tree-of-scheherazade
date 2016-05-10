var express = require('express');
var path = require('path');
var app = new express();
var PORT = 3000;

app.get('/', function(req, res) {
  console.log('im here');
  res.sendFile(__dirname + '/index.html');
});

app.use('**/cs', express.static(path.resolve(__dirname + '/build/css')));
app.use('**/js', express.static(path.resolve(__dirname + '/build/js')));

app.listen(PORT, function(error) {
  if (error) {
    console.error(error);
  }
  else {
    console.info('==> 🌎  Listening on port %s. Open up http://localhost:%s/ in your browser.', PORT, PORT);
  }
});
