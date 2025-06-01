const path = require('path')
const HtmlWebpackPlugin = require("html-webpack-plugin");

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
		new HtmlWebpackPlugin()
	]
}