const path = require('path');
const {
    CleanWebpackPlugin
} = require('clean-webpack-plugin');
// 不再将样式内嵌到 JS bundle 而是独立分离压缩的 CSS 文件
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
let { entry, pages } = require('./page.config')

module.exports = {
    entry,
    resolve: {
        alias: {
            'css': path.resolve(__dirname, '../', 'src/assets/css/'),
            'font': path.resolve(__dirname, '../', 'src/assets/font/'),
            'img': path.resolve(__dirname, '../', 'src/assets/img/'),
            'js': path.resolve(__dirname, '../', 'src/assets/js/'),
        }
    },
    stats: {
        children: false
    },
    module: {
        noParse: /jquery/,
        rules: [{
                test: /\.less$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            publicPath: '../',
                            hmr: process.env.NODE_ENV === 'development', // 热更新
                        }
                    },
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
                use: [{
                    loader: 'file-loader',
                    options: {
                        name: '[name].[ext]',
                        outputPath: 'font',
                    },
                }]
            },
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                  loader: 'babel-loader',
                  options: {
                    presets: ['@babel/preset-env']
                  }
                }
            },
            {
                test: /\.(png|jpg|gif|svg)$/,
                use: [{
                    loader: 'file-loader',
                    options: {
                        name: '[name].[ext]',
                        outputPath: 'img',
                    },
                }]
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({
            filename: 'css/[name].css',
        }),
        ...pages
    ],
};