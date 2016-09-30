const {CLIENT} = require('./paths')

const preLoaders = {
  lint: {
    test: /\.(js|jsx)$/,
    loader: 'eslint',
    include: CLIENT
  }
}

const cssLoader = [
    'style-loader',
    'css-loader?' + ['localIdentName=[local]__[hash:base64:4]', 'modules', 'importLoaders=1', 'sourceMap'].join('&'),
    'postcss-loader'
].join('!');

const loaders = {
  js: {
        test: /\.(js|jsx)$/,
        loaders: ['babel'],
        include: CLIENT
  },

  css: {
      // Transform our own .css files using PostCSS and CSS-modules
      test: /\.css$/,
      include: CLIENT,
      loader: cssLoader
  },

  vendorCss: {
      // Do not transform vendor's CSS with CSS-modules
      test: /\.css$/,
      include: /node_modules/,
      loader: 'style!css!postcss'
  },

  json: {
    test: /\.json$/,
    loader: 'json'
  },

  images: {
      test: /\.(jpg|png|svg)$/,
      loader: 'file',
      query: {
          name: '[name].[hash].[ext]'
      },
  },

  fonts: {
      test: /\.(eot|ttf|woff|woff2)$/,
      loader: 'url',
      query: {
          name: '[name].[hash].[ext]',
          limit: 25000,
      },
  }
}

module.exports = {preLoaders, loaders}
