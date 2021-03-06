const path = require('path');
const argv = require('yargs').argv;
// const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const isDevelopment = argv.mode === 'development';
const isProduction = !isDevelopment;
const distPath = path.join(__dirname, '../build');

const config = {
    entry: {
        main: './src/index.js'
    },
    output: {
        filename: 'bundle.js',
        path: distPath
    },
    module: {
        rules: [{
            test: /\.html$/,
            use: 'html-loader'
        }, {
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            use: [{
                loader: 'babel-loader',
                options: {
                    // presets: ['env', 'react']
                    presets: ["env", "react", "stage-2", "react-app"]
                }
            }]
        }, {
            test: /\.scss$/,
            exclude: /node_modules/,
            use: [
                isDevelopment ? 'style-loader' : ExtractTextPlugin.loader,
                'css-loader',
                {
                    loader: 'postcss-loader',
                    options: {
                        plugins: [
                            isProduction ? require('cssnano') : () => {},
                            require('autoprefixer')({
                                browsers: ['last 2 versions']
                            })
                        ]
                    }
                },
                'sass-loader'
            ]
        }, {
            test: /\.(gif|png|jpe?g|svg)$/i,
            use: [{
                loader: 'file-loader',
                options: {
                    name: '/images/[name].[ext]'
                }
            }, {
                loader: 'image-webpack-loader',
                options: {
                    mozjpeg: {
                        progressive: true,
                        quality: 70
                    }
                }
            },
            ],
        }, {
            test: /\.(eot|ttf|woff|woff2)$/,
            use: {
                loader: 'file-loader',
                options: {
                    name: 'fonts/[name][hash].[ext]'
                }
            },
        }]
    },
    plugins: [
        new ExtractTextPlugin({
            filename: 'css/[name].css',
            // chunkFilename: '[id].css'
        }),
        new HtmlWebpackPlugin({
            template: './public/index.html'
        })
    ],
    // optimization: isProduction ? {
    //         minimizer: [
    //             new UglifyJsPlugin({
    //                 sourceMap: true,
    //                 uglifyOptions: {
    //                     compress: {
    //                         inline: false,
    //                         drop_console: true
    //                     },
    //                 },
    //             }),
    //         ],
    //     } : {},
    devServer: {
        contentBase: distPath,
        port: 9000,
        compress: true,
        open: true
    }
};

module.exports = config;
