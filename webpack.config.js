const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {
    CleanWebpackPlugin
} = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin'); // 不再将样式内嵌到 JS bundle 而是独立分离压缩的 CSS 文件
const webpack = require('webpack');

module.exports = {
    entry: {
        index: './src/views/index/index.js',
        detail: './src/views/detail/index.js'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: './js/[name].bundle.js',
        chunkFilename: './js/[name].bundle.js',
    },
    // optimization: {
    //     splitChunks: {
    //     chunks: 'all',
    //     },
    // },
    devtool: 'inline-source-map',
    devServer: {
        contentBase: './dist',
        hot: true,
        port: 9000
    },
    stats: {
        children: false
    },
    module: {
        rules: [{
                test: /\.less$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader',
                        options: {
                            importLoaders: 1
                        }
                    },
                    'postcss-loader',
                    'less-loader'
                ]
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: [
                    'file-loader',
                ],
            },
            {
                test: /\.js$/,
                use: ['babel-loader'],
                // 不检查node_modules下的js文件
                exclude: '/node_modules/'
            },
            {
                test: /\.(png|jpg|gif|svg)$/,
                use: [{
                    loader: 'file-loader',
                    options: {}
                }]
            }
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NamedModulesPlugin(),
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({
            filename: '[name].css',
        }),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            title: 'index',
            chunks: ['index'],
            template: './src/views/index/index.html',
        }),
        new HtmlWebpackPlugin({
            filename: 'detail.html',
            title: 'detail',
            chunks: ['detail'],
            template: './src/views/detail/index.html',
        }),
    ],
};