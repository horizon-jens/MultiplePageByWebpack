const path = require('path');
const { smart } = require('webpack-merge');
const base = require('./webpack.base');
// 压缩JavaScript
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
// 压缩css
const OptimizeCss = require('optimize-css-assets-webpack-plugin');


module.exports = smart(base, {
    mode: 'production',
    output: {
        path: path.resolve(__dirname, '../', 'dist'),
        filename: './js/[name].bundle.js',
        chunkFilename: './js/[name].bundle.js',
        publicPath: ""
    },
    optimization: {
        minimizer: [
            new OptimizeCss(),
            new UglifyJsPlugin({
                cache: true, //缓存
                parallel: true, //并发多个
                sourceMap: false //源码映射
            })
        ]
    }
});