const path = require('path');

// To access built-in plugins
const webpack = require('webpack'); 

// Generates index.html automatically
const HtmlWebpackPlugin = require('html-webpack-plugin');

// Generates favicons automatically
const FaviconsWebpackPlugin = require('favicons-webpack-plugin');

// Source and Build directories
const BUILD_DIR = path.resolve(__dirname, 'dist');
const SRC_DIR = path.resolve(__dirname, 'src');

module.exports = (env, argv) => {
    const isDevelopmentMode = argv.mode === 'development';

    return {
        entry: SRC_DIR + '/index.js',
        output: {
            path: BUILD_DIR,
            filename: 'bundle.js',
            publicPath: '/',
            assetModuleFilename: 'assets/[hash][ext][query]'
        },
        module: {
            rules: [
                {
                    test: /\.js$/,
                    include: SRC_DIR,
                    loader: 'babel-loader',
                    options: {
                    	presets: [
                    		'@babel/preset-env',
                    		['@babel/preset-react', { runtime: 'automatic'}]
                    	]
                    }
                },
                {
                    test: /\.css$/,
                    include: SRC_DIR,
                    use: ['style-loader', 'css-loader'],
                },
                {
                	test: /\.(svg|png|gif|jpg|jpeg)$/, 
                	type: 'asset/resource'
                },
                {
                	test: /\.(ttf|woff|woff2|otf)$/,
                	type: 'asset/resource'
                },
                {
                	test: /\.(html|txt)$/,
                	type: 'asset/resource'
                }
            ],
        },
        resolve: {
            modules: [path.join(__dirname, 'src'), 'node_modules']
        },
        plugins: [
            ...(isDevelopmentMode ? [new webpack.HotModuleReplacementPlugin()] : []),
            new HtmlWebpackPlugin({
                title: 'JS Webpack Boilerplate'
            }),
            new FaviconsWebpackPlugin({
                logo: './src/favicon.svg',
                cache: true,
                prefix: 'favicons/',
                inject: true,
                favicons: {},
            }),
        ],
        devServer: {
            static: BUILD_DIR,
            compress: true,
            hot: true,
            open: true,
            port: 3000,
        },
        devtool: isDevelopmentMode ? 'eval-source-map' : 'source-map'
    }
};
