const webpack = require('webpack'); // basico
const path = require('path'); // basico
const HtmlWebpackPlugin = require('html-webpack-plugin'); // gerar html

const ExtractTextPlugin = require('extract-text-webpack-plugin'); //css separado
const UglifyJSPlugin = require('uglifyjs-webpack-plugin'); //Empacotar


// Any directories you will be adding code/files into, need to be added to this array so webpack will pick them up
const defaultInclude = path.resolve(__dirname, './src');
const defaultOutput = path.join(__dirname, './dist');

module.exports = (env, argv) => {
	var config = {};

	//Entrada de dados de um arquivo react
	config.entry = path.join(defaultInclude, 'js/index.js')
	

	config.output = {
		//saida configurada para o diretorio 'dist'
		path: defaultOutput,
		//Saida do transpilador dos arquivos js e jsx, etc configuradas para 'index_bundle.js'
		filename: 'bundle.js'
	};

	config.plugins = [
		new ExtractTextPlugin('style.css'),
		new UglifyJSPlugin(),
		new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery"
		}),
		new HtmlWebpackPlugin({
			template: path.join(defaultInclude, 'index.html'),
			filename: 'index.html'
		}),
		new HtmlWebpackPlugin({
			template: path.join(defaultInclude, 'about.html'),
			filename: 'about.html'
		}),
		new HtmlWebpackPlugin({
			template: path.join(defaultInclude, 'resources.html'),
			filename: 'resources.html'
		}),
	];

	config.module = {
		rules: [
			{ // Configurações para compilar o js
				test: /.js?$/,
				exclude: /(node_modules|bower_components)/, // Exclui diretorios de serem compilados
				include: defaultInclude,
				use: [{
					loader: 'babel-loader',
					options: {
						presets: [ // Presets de formatação de codigo
							'@babel/preset-env', // "@babel/preset-env" preset mais atual para babel es5, usado para suporte em todos os navegadores
						]
					}
				}]
			},
			{	//file-loader exporta os arquivos direto
				test: /\.(jpe?g|ico|png|gif|svg)$/i,
				loader: 'file-loader?name=img/[name].[ext]',
			},
			{
				test: /\.s[ac]ss$/i,
				use: [
					'style-loader', // Creates `style` nodes from JS strings
					'css-loader', // Translates CSS into CommonJS
					'sass-loader', // Compiles Sass to CSS
				],
			},
		]
	}

	config.devServer = {
		publicPath: "/",
		contentBase: "./dist"
	};

	if (argv.mode === 'development') {
		config.devtool = 'source-map';
		config.mode = 'development';
	}
  
	if (argv.mode === 'production') {
		config.mode = 'production';
	}
  
	return config;
};
