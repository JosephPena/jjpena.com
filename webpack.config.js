var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: './app/index.html'
});

module.exports = {
    entry: './app/index',
    output: {
        path: __dirname + '/dist',
        filename: 'bundle.js'
    },
  module: {
    loaders: [{
      test: /\.css$/,
      loaders: ['style', 'css']
    }]
  }
};

