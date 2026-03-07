const path = require('path');
const webpack = require('webpack');

const __DEV__ = process.env.NODE_ENV === 'development';
const filename = __DEV__ ? 'tiny.js' : 'tiny.min.js';

module.exports = {
  mode: process.env.NODE_ENV,
  entry: path.resolve(__dirname, 'components/index.ts'),
  output: {
    filename,
    path: path.resolve(__dirname, 'dist'),
    library: {
      name: 'tiny',
      type: 'umd',
    },
    globalObject: 'this',
    clean: true,
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
  },
  module: {
    rules: [{
      test: /\.tsx?$/,
      exclude: /node_modules/,
      use: 'babel-loader',
    }],
  },
  devtool: __DEV__ ? 'eval-source-map' : 'source-map',
  externals: {
    react: {
      root: 'React',
      commonjs2: 'react',
      commonjs: 'react',
      amd: 'react',
    },
    'react-dom': {
      root: 'ReactDOM',
      commonjs2: 'react-dom',
      commonjs: 'react-dom',
      amd: 'react-dom',
    },
  },
};
