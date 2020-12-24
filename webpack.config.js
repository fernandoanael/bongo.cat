const path = require('path')
const webpack = require('webpack')
const HtmlWebPackPlugin = require('html-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin')

module.exports = {
    mode: 'development',
    devtool: 'inline-source-map',
    entry: {
        app: './src/app.js',
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js',
        publicPath: '/'
    },
    target: 'web',
    devServer: {
        open: true,
        contentBase: 'dist/',
        publicPath: '/'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                },
                include: [
                    path.resolve(__dirname, './src')
                ]
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.(png|jpg|gif)$/i,
                use: {
                    loader: 'file-loader',
                    options: {
                        name: 'images/[name].[ext]'
                    }
                }
            },
        ]
    },
    plugins: [
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery'
        }),
        new HtmlWebPackPlugin({
            template: "./src/html/index.html",
            title: "Bongo Cat"
        }),
        new CopyPlugin({
            patterns: [
                {from: "./src/sounds", to: "./sounds"},
                {from: "./src/meta", to: "./meta"}
            ]
        })
    ]
}
