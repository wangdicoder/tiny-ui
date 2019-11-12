const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const baseConfig = require('./webpack.common');

const devConfig = {
  mode: 'development',
  devtool: 'eval-source-map',
  // output: {
  // 	publicPath: path.resolve(__dirname, 'public'),
  // },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: path.join(__dirname, '../public/index.html'),
      inject: true,
    }),
    new webpack.HotModuleReplacementPlugin(),
  ],
  devServer: {
    host: 'localhost',
    port: 3000,
    historyApiFallback: true,
    overlay: {
      errors: true,
    },
    inline: true,
    hot: true,
  },
};

module.exports = merge(baseConfig, devConfig);
