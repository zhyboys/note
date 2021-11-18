# 24 配置watch

虽然好用，**一般不用**，用什么？见篇25 dev-server

```html
<!--
1.什么是watch?
webpack 可以监听打包文件变化，当它们修改后会重新编译打包
那么如何监听打包文件变化呢?  使用 watch

2.watch相关配置watchOptions
poll: 1000 // 每隔多少时间检查一次变动
aggregateTimeout:  // 防抖, 和函数防抖一样, 改变过程中不重新打包, 只有改变完成指定时间后才打包
ignored: 排除一些巨大的文件夹, 不需要监控的文件夹, 例如 node_modules
-->
```



```js
module.exports = {
    watch: true,
    watchOptions: {
        aggregateTimeout: 300, // 防抖, 和函数防抖一样, 改变过程中不重新打包, 只有改变完成指定时间后才打包
        poll: 1000, // 每隔多少时间检查一次变动ms
        ignored: /node_modules/ // 排除一些巨大的文件夹, 不需要监控的文件夹
    },
}
```

