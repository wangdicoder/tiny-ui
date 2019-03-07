const webpack = require('webpack');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.config.base');

module.exports = merge(baseConfig, {
  mode: 'development',
  devtool: 'eval-source-map',
  devServer: {
    contentBase: './build',
    port: 3000,
    inline: true,
    open: true,
    hot: true,
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
});