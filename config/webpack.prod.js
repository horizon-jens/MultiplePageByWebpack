const { smart } = require('webpack-merge');
const base = require('./webpack.base');
// 压缩JavaScript
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');


module.exports = smart(base, {
    mode: 'production',
    optimization: {
        minimizer: [
            new UglifyJsPlugin({
                exclude: "/node_modules/"
            })
        ]
    }
});