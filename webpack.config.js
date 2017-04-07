var webpack = require('webpack');
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

var BUILD_DIR = path.resolve(__dirname, 'build');
var APP_DIR = path.resolve(__dirname, 'app');

var config = {
  entry: APP_DIR + '/app.js',
  output: {
    path:  BUILD_DIR,
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        include: APP_DIR,
        test: /.jsx?$/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'react', 'babel-preset-stage-0']
        }
      }
    ]
  },
  devtool: 'source-map',
  // Redundent configuration: but you'd configure the dev server here.
  devServer: {
    contentBase: __dirname
  },
  plugins: [new HtmlWebpackPlugin({
    template: path.join(APP_DIR, 'index.html')
  })]
};

module.exports = config;
