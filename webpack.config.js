const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: path.resolve(__dirname, 'src/index.jsx'),
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    resolve: {
        extensions: ['.js', '.json', '.jsx'],
        alias: {
            
        }
    },
    module: {
        rules: [{
            test: /\.jsx?$/,
            loader: 'babel-loader',
            exclude: /node_modules/,
            query: {
                cacheDirectory: true,
                presets: ['@babel/preset-react']
            }
        },
        {
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
                loader: 'babel-loader'
            }
        },
        {
            test: /\.css$/,
            use: ['style-loader', 'css-loader']
        },
        {
            test: /\.less$/,
            exclude: /\.module.(less)$/,
            use: [
                {
                    loader: 'style-loader'
                },
                {
                    loader: 'css-loader',
                    options: {
                        sourceMap: true
                    }
                },
                {
                    loader: 'less-loader',
                    options: {
                        sourceMap: true
                    }
                }
            ]
        },
        {
            test: /\.module.less$/,
            use: [
                {
                    loader: 'style-loader'
                },
                {
                    loader: 'css-loader',
                    options: {
                        modules: {
                            localIdentName: '[local]-[hash:base64:5]'
                        },
                        localsConvention: 'camelCase',
                        sourceMap: true
                    }
                },
                {
                    loader: 'less-loader',
                    options: {
                        sourceMap: true
                    }
                }
            ]
        },
        {
            test: /\.(png|jpg|gif)$/,
            use: [{
                loader: 'file-loader'
            }]
        },
        {
            test: /\.svg$/,
            use: [{
                loader: 'file-loader'
            }]
        },
        {
            type: 'javascript/auto',
            test: /\.json$/,
            use: [{
                loader: 'file-loader',
                options: {
                    name: './json/[name].[ext]'
                }
            }]
        },
        {
            test: /\.(ttf|eot|woff|woff2)$/,
            use: [{
                loader: 'file-loader'
            }]
        }]
    },
    devServer: {
        hot: true,
        historyApiFallback: true,
        contentBase:  path.resolve(__dirname, 'dist'),
        port: 9000
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'public/index.html' // source html
        })
    ]
};