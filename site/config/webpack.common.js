const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
	entry: path.resolve(__dirname, '../src/index.tsx'),
	output: {
		filename: 'bundle.[hash].js',
		path: path.resolve(__dirname, '../build'),
	},
	resolve: {
		alias: {
			'@tiny': path.resolve(__dirname, '../../components'),
		},
		extensions: ['.ts', '.tsx', '.js', '.jsx', '.json']
	},
	module: {
		rules: [{
			test: /\.jsx?$/,
			exclude: /node_modules/,
			use: 'babel-loader',
		}, {
			test: /\.tsx?$/,
			exclude: /node_modules/,
			use: {
				loader: 'ts-loader',
				options: {
					configFile: path.resolve(__dirname, 'tsconfig.json'),
				}
			},
		}, {
			test: /\.css$/,
			exclude: /node_modules/,
			use: [
				'style-loader',
				'css-loader'
			]
		}, {
			test: /\.scss$/,
			exclude: /node_modules/,
			use: [
				'style-loader',
				'css-loader',
				'sass-loader',
				'postcss-loader',
			]
		}, {
			test: /\.mdx?$/,
			use: [
				'babel-loader',
				'@mdx-js/loader'
			]
		}, {
			test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
			use: [
				{
					loader: 'url-loader',
					options: {
						limit: 10240,
						name: path.join('img/[name].[hash:7].[ext]')
					}
				}]
		}, {
			test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
			use: [{
				loader: 'url-loader',
				options: {
					limit: 10240,
					name: path.join('font/[name].[hash:7].[ext]')
				}
			}]
		}]
	},
	plugins: [
		new CopyWebpackPlugin([
			{
				from: path.resolve(__dirname, '../public'),
				to: path.resolve(__dirname, '../build'),
				ignore: ['*.html']
			}
		])
	]
};
