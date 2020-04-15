
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        detail: './src/views/detail/main.js',
        index: './src/views/index/main.js',
        test: './src/views/test/main.js',
        
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
        new HtmlWebpackPlugin({
            filename: 'test.html',
            chunks: ['test'],
            template: './src/views/test/index.html'
        }),
        
    ]
}