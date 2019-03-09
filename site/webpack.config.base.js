/**
 * Created by wangdi on 17/11/18.
 */
const path = require('path');
const autoprefixer = require('autoprefixer');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
	entry: path.resolve(__dirname, 'app/index.tsx'),
	output: {
		filename: 'bundle.[hash].js',
		path: path.join(__dirname, '/build')
	},
	resolve: {
		extensions: ['.js', '.ts', '.tsx', '.json']
	},
	module: {
		rules: [
			{
				test: /\.tsx?$/,
				use: "awesome-typescript-loader"
			},
			{
				enforce: "pre",
				test: /\.tsx?$/,
				use: "source-map-loader"
			},
			{
				test: /\.css$/,
				use: [
					require.resolve('style-loader'),
					{
						loader: require.resolve('css-loader'),
						options: {
							importLoaders: 1,
						},
					},
					{
						loader: require.resolve('postcss-loader'),
						options: {
							plugins: () => [autoprefixer]
						}
					},
				],
			},
			{
				test: /\.scss$/,
				use: ['style-loader', 'css-loader', 'sass-loader'],
			},
			{
				test: /\.(ttf|eot|svg|woff|woff2)(\?.+)?$/,
				use: 'file-loader'
			},
			{
				test: /\.(jpe?g|png|gif)(\?.+)?$/,
				use: 'url-loader',
			},
			{
				test: /\.md$/,
				use: 'raw-loader'
			}
		]
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: path.resolve(__dirname, 'public/index.html')
		}),
		new CopyWebpackPlugin([
			// {
			// 	from: path.resolve(__dirname, 'public/assets'),
			// 	to: path.resolve(__dirname, 'build/assets')
			// },
			{
				from: path.resolve(__dirname, 'public/favicon.ico'),
				to: path.resolve(__dirname, 'build')
			},
		]),
	]
};