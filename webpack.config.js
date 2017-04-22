const path = require('path');
const LiveReloadPlugin = require('webpack-livereload-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
// const HtmlWebpackPlugin = require("html-webpack-plugin");
module.exports = {
	entry: './src/app.js',
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, 'codebase'),
		publicPath: "/codebase"
	},
	module: {
		loaders: [
			{
				test: /\.js$/,
				exclude: /(node_modules|bower_components)/,
				loader: 'babel-loader',
				// getOptions: {
				//     presets: ['env']
				// }
			}, {
				test: /\.scss$/,
				use: ExtractTextPlugin.extract({
					fallback: "style-loader",
					use: [
						{
							loader: 'css-loader',
						},
						{
							loader: 'sass-loader',
						},
						{
							loader: 'postcss-loader',
						}
					]
				})
			},
			{
				test: /\.(gif|png|jpe?g|svg)$/i,
				loaders: [
					'file-loader',
					{
						loader: 'image-webpack-loader',
						query: {
							progressive: true,
							optimizationLevel: 7,
							interlaced: false,
							pngquant: {
								quality: '65-90',
								speed: 4
							}
						}
					}
				]
			}
			// {
			//     test: /\.pug$/,
			//     use: [
			//         {
			//             loader: "html-loader"
			//         },
			//         {
			//             loader: "pug-html-loader"
			//         }
			//     ]
			// }
		]
	},
	plugins: [
		new LiveReloadPlugin(),
		new ExtractTextPlugin("app.css"),
		// new HtmlWebpackPlugin({
		//     title:"test",
		//     hash:true,
		//     template:"./src/templates/index.pug"
		// })
	]

};