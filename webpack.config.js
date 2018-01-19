var path = require('path')
var HtmlWebpackPlugin = require('html-webpack-plugin'); //installed via npm

module.exports = {
	entry: './src/index.js',
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'app.js'
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				loaders: ['babel-loader'],
				exclude: '/node_modules/'
			}
		]
	},
	plugins: [
		new HtmlWebpackPlugin({ template: './index.html' })
	],
	devServer: {
		contentBase: path.resolve(__dirname, 'dist'),
		port: 3000
	}
}
