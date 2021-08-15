# 04 jQuery对象

```js
$(function () {
    /*
    * 1.什么是jQuery对象
    * jQuery对象是一个伪数组
    *
    * 2.什么是伪数组?
    * 有0到length-1的属性, 并且有length属性，但本质是个对象
    */
    var $div = $("div");
    console.log($div);

    var arr = [1, 3, 5];
    console.log(arr);
});
```

