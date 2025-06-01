const path = require('path')
const HtmlWebpackPlugin = require("html-webpack-plugin");
const {CleanWebpackPlugin} = require("clean-webpack-plugin");
const {CopyWebpackPlugin} = require("copy-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin")

module.exports = {
	context: path.resolve(__dirname, 'src'),
	entry: './index.js',
	output: {
		// hash = autoload new version
		filename: 'bundle.[hash].js',
		path: path.resolve(__dirname, 'dist')
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
	],
}