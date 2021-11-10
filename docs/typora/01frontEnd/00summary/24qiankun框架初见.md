# 24 qiankun框架初见

> 官网：https://qiankun.umijs.org/zh/guide/tutorial#%E4%B8%BB%E5%BA%94%E7%94%A8
> 解决报错问题后并不能让父嵌套子



## 1 报错解决

报错一：解决了下子应用的端口号
  devServer: {
    port: 8877, // 端口号
    headers: {
      'Access-Control-Allow-Origin': '*'
    }
  },

报错二：router报错是需要注释掉router的一段代码，因为注册了两次

报错三：output not allowed 是需要嵌套一层
  configureWebpack: {
    output: {
      library: `${packageName}-[name]`,
      libraryTarget: 'umd', // 把微应用打包成 umd 库格式
      jsonpFunction: `webpackJsonp_${packageName}`
    }
  }



## 2 不能嵌套：

方案一：
百度关键词：基于vue搭建qiankun
https://www.cnblogs.com/goloving/p/14994957.html
方案二：
主应用的entry: { scripts: ['//127.0.0.1:8877/main.js'] },改为entry: '//localhost:8877',

-----------------

至此嵌套成功

