# 03 webpack配置

使用webpack配置自动打包编译。

```html
目录结构
src----index.html
	|--js
		|--index.ts
<!--
1.初始化一个自动打包的webpack项目[配置文件见下]
2.通过tsc --init初始化TypeScript配置文件
3.通过npm install typescript ts-loader安装对应loader
4.修改webpack配置文件【不用修改，修改好的】
entry: "./src/js/index.ts",
resolve: {
    extensions: [ '.tsx', '.ts', '.js' ]
},
rules: [
    // ts编译配置
    {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
    }
]
-->
```



```js
// webpack.config.js
const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const Webpack = require("webpack");

module.exports = {
    /*
    devServer: 自动检测文件变化
    * */
    devServer: {
        contentBase: "./bundle",
        open: true,
        port: 9090,
        hot: true, // 开启热更新, 只要开启了热更新就不会自动刷新网页了
        hotOnly: true // 哪怕不支持热更新也不要刷新网页
    },
    /*
    配置sourcemap
    * */
    devtool: "cheap-module-eval-source-map",
    /*
    mode: 指定打包的模式
    * */
    mode: "development", // "production" | "development"
    /*
    entry: 指定需要打包的文件
    * */
    // entry: "./src/js/index.js",
    entry: "./src/js/index.ts",
    /*
    output: 指定打包之后的文件输出的路径和输出的文件名称
    * */
    output: {
        /*
        filename: 指定打包之后的JS文件的名称
        * */
        filename: "js/bundle.js",
        /*
        path: 指定打包之后的文件存储到什么地方
        * */
        path: path.resolve(__dirname, "bundle")
    },
    resolve: {
        extensions: [ '.tsx', '.ts', '.js' ]
    },
    /*
    module: 告诉webpack如何处理webpack不能够识别的文件
    * */
    module: {
        rules: [
            // ts编译配置
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/
            }
        ]
    },
    /*
    plugins: 告诉webpack需要新增一些什么样的功能
    * */
    plugins: [
        new HtmlWebpackPlugin({
        template: "./src/index.html",
        }),
        new CleanWebpackPlugin(),
        new Webpack.HotModuleReplacementPlugin(),
        new CopyWebpackPlugin([{
            from: './src/lib',
            to: './lib'
        }])
    ]
};
```

```json
// package.json
{
  "name": "01-webpack-introductory",
  "version": "1.0.0",
  "description": "",
  "main": "src/js/index.js",
  "scripts": {
    "dev": "npx webpack-dev-server --config webpack.config.js",
    "build": "npx webpack --config webpack.config.js"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "devDependencies": {
    "clean-webpack-plugin": "^3.0.0",
    "copy-webpack-plugin": "^5.1.1",
    "html-webpack-plugin": "^3.2.0"
  },
  "dependencies": {
    "@types/jquery": "^3.5.0",
    "jquery": "^3.5.1",
    "reflect-metadata": "^0.1.13",
    "ts-loader": "^4.5.0",
    "typescript": "^3.9.5",
    "webpack": "^4.43.0",
    "webpack-cli": "^3.3.12",
    "webpack-dev-server": "^3.11.0"
  }
}
```