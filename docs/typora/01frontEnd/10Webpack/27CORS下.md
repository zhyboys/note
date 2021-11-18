# 27 CORS跨域下

    注意点:
    devServer只能解决开发阶段的跨域问题, 并不能解决项目上线之后的跨域问题
    原因非常简单, 因为项目上线之后是将打包好的文件上传到服务器, 而打包好的文件中并没有devServer
    所以项目上线之后要想解决跨域问题还是需要依赖后端开发人员

## 01 简化冗余

无非就是`webpack.config.js`中写法一改为写法二

**写法一：**

```js
devServer: {
    contentBase: "./bundle",
    open: true,
    port: 9090,
    /*
    proxy: {
        // 以下配置的含义:
        // 当我们在代码中发送请求到/user的时候, devServer就会自动将我们请求的地址替换为
        // http://127.0.0.1:3000/user
        "/user": {
            target: "http://127.0.0.1:3000",
            changeOrigin: true,     // 域名跨域
            secure: false,          // https跨域
        },
        "/login": {
            target: "http://127.0.0.1:3000",
            changeOrigin: true,     // 域名跨域
            secure: false,          // https跨域
        },
    }
     */
```
**写法二：**

```js
devServer: {
    contentBase: "./dist",
    open: true,
    port: 9090,
    proxy: [{
            context:["/api", "/login"],
            target: "http://127.0.0.1:3000", // 代理地址
            changeOrigin: true,     // 域名跨域
            secure: false,          // https跨域
        	pathRewrite:{"": "/api"} // 路径重写, 将路径中的/user /login前加上/api
    }]
}
```


