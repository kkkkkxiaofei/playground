var path = require('path')

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
	}
}
