# 077 EggJs中Service注意点

```js
/*
注意点:
1.service目录必须放在app目录中
2.service目录支持多级目录, 如果是多级目录, 那么在调用的时候可以使用链式调用
  this.ctx.service.abc.def.text.xxx();
3.service中的js文件, 如果是以_或者首字母都是大写, 那么在调用的时候必须转换成驼峰命名
  get_user.js --- getUser
  GetUser.js --- getUser  
* */
```

