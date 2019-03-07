const merge = require('webpack-merge');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const baseConfig = require('./webpack.config.base');

module.exports = merge(baseConfig, {
  mode: 'production',
  plugins: [
    new CleanWebpackPlugin(['build']),
  ]
});