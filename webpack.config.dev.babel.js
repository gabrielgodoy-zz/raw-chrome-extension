import autoprefixer from 'autoprefixer';

const webpack = require('webpack');
let path = require('path');

module.exports = {
  entry: {
    background: [
      './src/assets/js/background/background.js',
      './src/assets/js/background/hot-reload.js',
    ],
    content_script: './src/assets/js/content_scripts/main.js',
  },
  module: {
    preLoaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'eslint-loader',
      },
    ],
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.styl$/,
        loaders: [
          'style-loader',
          'css-loader?sourceMap',
          'postcss-loader',
          'stylus-loader',
        ],
      },
      {
        test: /\.json$/,
        loader: 'json-loader',
      },
      {
        test: /\.(eot|otf|woff|woff2|ttf|svg)$/,
        loader: 'url-loader?limit=30000&name=[name].[ext]',
      },
      {
        test: /\.(png|jpg)$/,
        loader: 'file-loader?name=[path][name].[ext]',
      },
    ],
  },
  devtool: 'inline-source-map',
  output: {
    filename: '[name].js',
    path: path.resolve('dist'),
    publicPath: path.resolve('/'),
  },
  postcss() {
    return [autoprefixer({
      browsers: ['last 2 versions', 'ie >= 9'],
      remove: false,
    })];
  },
  resolve: {
    extensions: ['', '.js', '.styl'],
  },
};
