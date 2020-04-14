const { smart } = require('webpack-merge');
const base = require('./webpack.base');
const webpack = require('webpack');

module.exports = smart(base, {
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
        contentBase: './dist',
        hot: true,
        port: 9000
    },
    plugins: [
        new webpack.NamedModulesPlugin(), // 当开启 HMR 的时候使用该插件会显示模块的相对路径
        new webpack.HotModuleReplacementPlugin(), //模块热替换插件
    ]
});