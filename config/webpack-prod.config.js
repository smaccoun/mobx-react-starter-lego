const merge = require('webpack-merge');
const webpackCommon = require('./webpack-common.config');
const {CLIENT, DIST} = require('./paths');
const webpack = require('webpack');
require('babel-polyfill');

module.exports = merge(webpackCommon, {
  devtool: 'source-map',
  entry: {
    main: `${CLIENT}/index.js`
  },
  output: {
    path: `${DIST}`,
    filename: 'bundle.js',
    publicPath: '/'
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  }
});
