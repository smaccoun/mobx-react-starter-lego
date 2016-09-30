const merge = require('webpack-merge');
const webpackCommon = require('./webpack-common.config');
const {CLIENT, DIST} = require('./paths');
const webpack = require('webpack');

module.exports = merge(webpackCommon, {
  devtool: 'cheap-eval-source-map',
  entry: [
    'react-hot-loader/patch',
    'webpack-dev-server/client?http://localhost:3000',
    'webpack/hot/only-dev-server',
    `${CLIENT}/index.js`
  ],
  output: {
    path: `${DIST}`,
    filename: 'bundle.js',
    publicPath: '/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  resolve: {
    extensions: ['', '.js', '.jsx']
  }
});
