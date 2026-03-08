const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
const { merge } = require('webpack-merge');
const common = require('./webpack.common');

const devConfig = {
  mode: 'development',
  devServer: {
    port: 3000,
    open: true,
    hot: true,
    historyApiFallback: true,
  },
  target: 'web',
  plugins: [
    new ReactRefreshWebpackPlugin()
  ],
  devtool: 'eval-cheap-module-source-map',
  module: {
    rules: [
      {
        test: /.s?css$/,
        use: ['style-loader', 'css-loader', {
          loader: 'sass-loader',
          options: { api: 'modern' },
        }],
      },
    ],
  }
};

module.exports = merge(common, devConfig);
