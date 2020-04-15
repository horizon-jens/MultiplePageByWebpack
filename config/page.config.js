
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        detail: './src/views/detail/main.js',
        index: './src/views/index/main.js',
        
    },
    pages: [
        new HtmlWebpackPlugin({
            filename: 'detail.html',
            chunks: ['detail'],
            template: './src/views/detail/index.html'
        }),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            chunks: ['index'],
            template: './src/views/index/index.html'
        }),
        
    ]
}