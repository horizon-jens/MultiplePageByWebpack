const path = require('path');
const {
    CleanWebpackPlugin
} = require('clean-webpack-plugin');
// 不再将样式内嵌到 JS bundle 而是独立分离压缩的 CSS 文件
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
let PageInfo = require('./page.config')

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
    resolve: {
        alias: {
            'css': path.resolve(__dirname, 'src/assets/css/'),
            'font': path.resolve(__dirname, 'src/assets/font/'),
            'img': path.resolve(__dirname, 'src/assets/img/'),
            'js': path.resolve(__dirname, 'src/assets/js/'),
        }
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
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({
            filename: '[name].css',
        }),
        ...PageInfo
    ],
};