import path from 'path';
import { fileURLToPath } from 'url';

// To access built-in plugins
import webpack from 'webpack';

// Generates index.html automatically
import HtmlWebpackPlugin from 'html-webpack-plugin';

// Generates favicons automatically
import FaviconsWebpackPlugin from 'favicons-webpack-plugin';

// Get __dirname equivalent for ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Source and Build directories
const BUILD_DIR = path.resolve(__dirname, 'dist');
const SRC_DIR = path.resolve(__dirname, 'src');

export default (env, argv) => {
    const isDevelopmentMode = argv.mode === 'development';

    return {
        entry: SRC_DIR + '/index.tsx',
        output: {
            path: BUILD_DIR,
            filename: 'bundle.js',
            publicPath: '/',
            assetModuleFilename: 'assets/[hash][ext][query]'
        },
        module: {
            rules: [
                {
                    test: /\.tsx?$/,
                    include: SRC_DIR,
                    use: 'ts-loader',
                    exclude: /node_modules/
                },
                {
                    test: /\.js$/,
                    include: SRC_DIR,
                    loader: 'babel-loader',
                    options: {
                    	presets: [
                    		'@babel/preset-env',
                    		['@babel/preset-react', { runtime: 'automatic' }]
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
                },
                {
                	test: /\.(mp3|wav|ogg)$/,
                	type: 'asset/resource'
                }
            ],
        },
        resolve: {
            extensions: ['.tsx', '.ts', '.js', '.jsx'],
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
