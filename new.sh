#!/bin/bash
if [ "$1" ]; then

cd src/views
for file in $(ls)
do
if [ $file == $1 ];then
    echo $1'\033[33m 目录已存在, 请使用其他名称 \033[0m'
    exit
fi
done
mkdir $1
cd $1

echo "" > main.js
echo "import 'css/global.less'
import './$1.less'" > main.js


echo "" > index.html
echo '<!DOCTYPE html>
<html lang="zh">
  <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width,initial-scale=1,maximum-scale=1, minimum-scale=1,user-scalable=no">
      <meta name="renderer" content="webkit">
      <meta http-equiv="X-UA-Compatible" content="IE=Edge,chrome=1">
      <meta name="format-detection" content="telephone=no">
      <meta name="msapplication-tap-highlight" content="no">
      <meta http-equiv="Expires" content="0">
      <meta http-equiv="Pragma" content="no-cache">
      <meta http-equiv="Cache-control" content="no-cache">
      <meta http-equiv="Cache" content="no-cache">
      <link rel="icon" href="favicon.ico">
      <title>'$2'</title>
  </head>
  <body>
  </body>
</html>' > index.html

echo "" > $1.less



echo $1'\033[32m 文件已生成 \033[0m'

gulp setout

else
    echo "\033[33m 文件名称不能为空 \033[0m" "参考输入(举例): npm run new about"
fi