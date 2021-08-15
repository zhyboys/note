# 80 html-loader配置



配置原因如下：

```html
<!--
1.初始化HTML中的代码
2.利用rem+视口释放的方式来适配移动端
注意点: 如果在HTML文件中用到了字符串模板`<p></p>`, 字符串模板中用到了变量, 那么html-plugin是无法处理的, 所以会报错
        如果想解决这个问题, 那么我们需要再借助一个loader, html-loader
3.借助postcss-pxtorem实现自动将px转换成rem-----见篇81
4.借助webpack实现CSS3/ES678语法的兼容（不用管，cli已实现）
5.借助fastclick解决移动端100~300ms的点击事件延迟问题---见篇83
6.初始化默认的全局样式
注意点: 在移动端开发中, 一般情况下我们不需要让字体大小随着屏幕尺寸的变化而变化
        由于我们是通过视口缩放来适配移动端的, 所以我们不能直接设置字体大小, 否则字体大小就会随着屏幕尺寸的变化而变化
-->
```

## 01 安装

方法：百度搜索npm官网---->官网搜索html-loader查看下载方式

```sh
# 安装html-loader
cnpm install -D html-loader
```

**问题：报错**

```js
this.getOptions is not a function
```

**解决：安装低版本**

```sh
cnpm install -D html-loader@0.5.5
```



## 02 配置

新建vue.config.js进行配置

```js
module.exports = {
  /* 部署应用包的基本URL, 不设置可能会出现打包后项目找不到资源问题 */
  publicPath: './',

  configureWebpack: {
    module: {
      rules: [
        {
          test: /\.(html)$/,
          exclude: /node_modules/,
          use: {
            loader: 'html-loader',
            options: {
              minimize: true
            }
          }
        }
      ]
    }
  }
}
```