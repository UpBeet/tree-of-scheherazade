/* eslint-disable */
var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var extractCSS = new ExtractTextPlugin('css/main.css');

module.exports = {
  entry: {
    client: './src/client/app.js',
  },

  output: {
    path: path.resolve('build'),
    filename: 'js/[name].js',
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
        include: [
          path.resolve(__dirname, 'src/client'),
        ],
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
    ],
  },

  plugins: [
    extractCSS,
  ],
};
