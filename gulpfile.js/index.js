const { series, src } = require('gulp')
const through = require('through2')
const fs = require('fs')

function getPagesInfo(cb) {
    let pages = [],
        entry = {}
    src('./src/views/**/main.js')
        .pipe(through.obj(
            (chunk, enc, callback) => {
                let filename = chunk.path.split('/src/views/')[1].slice(0, -8)
                var page = `{
            filename: '${filename}.html',
            chunks: ['${filename}'],
            template: './src/views/${filename}/index.html'
        }`
                pages.push(page)
                entry[filename] = `./src/views/${filename}/main.js`
                callback(null, chunk)
            },
            (callback) => {
                setConfigInfo(entry, pages, cb)
                callback()
            }
        ))
}

function setConfigInfo(entry, pages, cb) {
    let eStr = ``
    Object.entries(entry).forEach(item => {
    eStr+= `${item[0]}: '${item[1]}',
        `
    })
    let pStr = ``
    pages.forEach(item => {
    pStr+=`new HtmlWebpackPlugin(${item}),
        `
    })

let pageConfig = `
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        ${eStr}
    },
    pages: [
        ${pStr}
    ]
}`
    writeInfo(pageConfig)
    cb()
}

function writeInfo(info) {
    fs.writeFile('config/page.config.js', info ,  function(err) {
        if (err) {
            return console.error(err);
        }
        console.log("页面配置数据写入成功！");
    });
}

exports.setout = series(getPagesInfo)