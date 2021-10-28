# 09 loader特点

>提炼：
>
>loader 执行顺序是从下之上，从右至左

```html
<!--
4.loader特点:
4.1单一原则, 一个loader只做一件事情
4.2多个loader会按照从右至左, 从下至上的顺序执行
例如: 从右至左
      [ 'style-loader', 'css-loader' ]
      先执行css-loader解析css文件关系拿到所有内容,
      再执行style-loader将内容插入到HTML的HEAD代码中
例如: 从下至上
    [{
        loader: "style-loader"
    },{
        loader: "css-loader"
    }]
    先执行css-loader解析css文件关系拿到所有内容,
    再执行style-loader将内容插入到HTML的HEAD代码中
-->
```