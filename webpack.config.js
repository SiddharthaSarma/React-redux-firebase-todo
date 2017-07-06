var webpack = require('webpack');
var Dotenv = require('dotenv-webpack');
var path = require('path');
module.exports = {

  // Entry point for the bundle, path and filename to main module
  entry: './public/app.jsx',
  node: {
    fs: "empty"
  },
  output: {
    // Output directory as an absolute path
    path: __dirname,
    // Filename as relative path within output path
    filename: './public/bundle.js',
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  module: {
    // Loader required for JSX
    loaders: [{
      test: /\.jsx$/,
      exclude: /node_modules/,
      loader: 'babel-loader',
      query: {
        presets: ['react', 'es2015', 'stage-0']
      }
    }]
  },
  plugins: [
    new Dotenv({
      path: path.join(__dirname , '.env'),
      safe: false
    })
  ]

};