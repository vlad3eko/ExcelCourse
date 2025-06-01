const path = require('path')
const HtmlWebpackPlugin = require("html-webpack-plugin");
const {CleanWebpackPlugin} = require("clean-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin")
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
	context: path.resolve(__dirname, 'src'),
	entry: './index.js',
	output: {
		// hash = autoload new version
		filename: 'bundle.[hash].js',
		path: path.resolve(__dirname, 'dist')
	},
	// AutoLoad .js
	resolve: {
		extensions: ['.js'],
		// reduction path for file\folder
		alias: {
			'@': path.resolve(__dirname, 'src'),
			'core': path.resolve(__dirname, 'src/core')
		}
	},
	// Add plug for HTML
	plugins: [
		new HtmlWebpackPlugin({
			template: "index.html"
		}),
		new CleanWebpackPlugin(),
		new CopyPlugin([
			{
				from: path.resolve(__dirname, 'src/favicon.ico'),
				to: path.resolve(__dirname, 'dist')
			}
		]),
		new MiniCssExtractPlugin({
			filename: 'bundle.[hash].css'
		})
	],
}