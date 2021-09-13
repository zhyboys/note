# 101 nextTick

详情见从零玩转vue视频158：歌手界面快捷导航上



```js
watch: {
  list () {
    this.$nextTick(() => {
      console.log(this.$refs.group)
    })
  }
},
```

（1）list是从服务器请求的数据

（2）请求完数据渲染到group中

（3）当数据请求完后拿到group的渲染后的高度。

（4）但是，拿不到。

（5）原因：请求完数据后，数据变了，但group还没生成。

（6）解决：nextTick。如上所示。



```
注意点
watch只能监听数据的变化，数据变化的时候不一定已经渲染完了。
所以为了保证是渲染完成之后再去获取，我们可以借助vue的$nextTick方法来实现。
也就是说在$nextTick回调函数中一定能拿到渲染完成的数据，因为$nextTick的回调函数只有渲染完后才执行。
```

