# 082 EggJs框架扩展上

基础功能-->框架扩展

```js
/*
1.EggJS扩展
默认情况下EggJS在Application、Context、Request、Response对象上
提供了很多常用的方法给我们使用, 但是有时候默认提供的这些方法可能不能满足我们的需求
此时我们就可以通过EggJS的扩展来给这些对象扩充自定义的方法
https://eggjs.org/zh-cn/basics/extend.html
* */
```

## 1.给application扩展

首先app目录下新建`extend/application.js`

```js
module.exports = {
    myTest(param) {
        // this 就是 app 对象，在其中可以调用 app 上的其他方法，或访问属性
        return `自定义扩展中的方法被调用了${param}`;
    },
};
```

使用扩展

```js
// console.log(this.ctx.app.myTest('123'));
```

## 2.给ctx扩展

首先创建`/app/extend/context.js`

```js
module.exports = {
    myTest(param) {
        // this 就是 ctx 对象，在其中可以调用 ctx 上的其他方法，或访问属性
        return `自定义扩展中的方法被调用了${param}`;
    },
};
```

使用扩展

```js
 // console.log(this.ctx.myTest('abc'));
```

## 3.给request扩展

同理创建`app/extend/request.js`

```js
module.exports = {
  get foo() {
    return this.get('x-request-foo');
  },
};
```

使用

```js
// console.log(this.ctx.request.myTest('666'));
```

## 4.给response扩展

同理创建`app/extend/response.js`

```js
module.exports = {
    myTest(param) {
        // this 就是 response 对象，在其中可以调用 response 上的其他方法，或访问属性
        return `自定义扩展中的方法被调用了${param}`;
    },
};
```

使用扩展

```js
// console.log(this.ctx.response.myTest('888'));
```

