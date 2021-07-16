const path = require('path');
const buildPath = path.resolve(__dirname, 'dist');
const { CleanWebpackPlugin } = require('clean-webpack-plugin'); 
const HtmlWebpackPlugin = require('html-webpack-plugin');
var webpack = require("webpack");

module.exports = {

	devtool: 'source-map',

	entry: {
		main: '/src/js/main.js',
		// pages
		index: '/src/js/index.js',
		index: '/public/js/index.js',
		contact: '/public/js/contact.js',
		faq: '/public/js/faq.js',
		skills: '/public/js/skills.js',
		work: '/public/js/work.js',
		"404": '/public/js/404.js',
	},

	output: {
		filename: '[name].[hash:20].js',
		path: buildPath
	},

	module: {
		rules: [
			// load JS
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: 'babel-loader',
				options: {
					presets: ['@babel/preset-env']
				}
			},
			// load CSS
			{
				test: /\.css$/,
				use: [
				"style-loader",
				"css-loader"
				]
			},
			// load images (base64 < 8192B)
			{
				test: /\.(png|jpg|gif|webp)$/,
				type: 'asset/resource',
				generator: {
					filename: 'img/[name][hash].[ext]'
				}
			},
			// load icons
			{
				test: /\.(eot|woff|woff2|ttf)([\?]?.*)$/,
				type: 'asset/resource'
			},
			// load testing "interface"
			{
				test: /\test\.(js$|css)/,
				use: 'mocha-loader',
				exclude: /node_modules/
			},
			// inline SVGs
			{
				test: /\.svg$/,
				use: 'html-loader'
			}
		]
	},


	plugins: [
		new CleanWebpackPlugin({}),
		/* INDEX */
		new HtmlWebpackPlugin({
			template: '/public/index.html',
			inject: true,
			chunks: ['main', 'index'],
			filename: 'index.html'
		}),
		new HtmlWebpackPlugin({
			template: '/public/contact.html',
			inject: true,
			chunks: ['main', 'contact'],
			filename: 'contact.html'
		}),
		new HtmlWebpackPlugin({
			template: '/public/faq.html',
			inject: true,
			chunks: ['main', 'faq'],
			filename: 'faq.html'
		}),
		new HtmlWebpackPlugin({
			template: '/public/skills.html',
			inject: true,
			chunks: ['main', 'skills'],
			filename: 'skills.html'
		}),
		new HtmlWebpackPlugin({
			template: '/public/work.html',
			inject: true,
			chunks: ['main', 'work'],
			filename: 'work.html'
		}),
		new HtmlWebpackPlugin({
			template: '/public/404.html',
			inject: true,
			chunks: ['main', '404'],
			filename: '404.html'
		}),
		new webpack.ProvidePlugin({
			$: "jquery",
			jQuery: "jquery"
		})
	],
	output: {
		filename: '[name].[contenthash].js',
		 path: path.resolve(__dirname, 'dist'),
	},
};