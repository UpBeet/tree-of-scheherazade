/* eslint-disable */
var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var extractCSS = new ExtractTextPlugin('css/main.css');

module.exports = {
  entry: {
    client: './index',
  },

  output: {
    path: path.resolve('build'),
    filename: 'js/[name].js',
    publicPath: '/static/',
  },

  module: {
    loaders: [
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        loader: extractCSS.extract(['css-loader', 'sass-loader']),
      },
      {
        test: /\.js$/,
        exclude: /(node_modules|build)/,
        loader: 'babel-loader',
      },
    ],
  },

  plugins: [
    extractCSS,
  ],
};
