const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = [
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
    })
]