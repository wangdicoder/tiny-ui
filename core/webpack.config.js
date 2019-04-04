const path = require('path');
const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const __DEV__ = process.env.NODE_ENV === 'development';
const filename = __DEV__ ? 'tiny.js' : 'tiny.min.js';

module.exports = {
    mode: process.env.NODE_ENV,
    entry: path.resolve(__dirname, 'src/index.ts'),
    output: {
        filename,
        path: path.resolve(__dirname, 'dist'),
        library: 'tiny',
        libraryTarget: 'umd',
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
    module: {
        rules: [{
            test: /\.tsx?$/,
            use: 'ts-loader',
            exclude: /node_modules/,
        }],
    },
    plugins: [
        new CleanWebpackPlugin({
            cleanOnceBeforeBuildPatterns: ['./dist'],
        }),
        new webpack.SourceMapDevToolPlugin({
            filename: 'tiny.map'
        }),
    ],
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
