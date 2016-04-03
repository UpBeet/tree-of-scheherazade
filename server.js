// var webpack = require('webpack');
// var webpackDevMiddleware = require('webpack-dev-middleware');
// var config = require('./webpack.config');

var express = require('express');
var path = require('path');
var app = new express();
var PORT = 3000;

// var compiler = webpack(config);
// app.use(webpackDevMiddleware(compiler,
// { noInfo: true, publicPath: config.output.publicPath }));

app.get('/', function(req, res) {
  res.sendFile(__dirname + '/index.html');
});

app.use('**/css', express.static(path.resolve(__dirname + '/build/css')));
app.use('**/js', express.static(path.resolve(__dirname + '/build/js')));

app.listen(PORT, function(error) {
  if (error) {
    console.error(error);
  } else {
    console.info('==> 🌎  Listening on port %s. Open up http://localhost:%s/ in your browser.', PORT, PORT);
  }
});
