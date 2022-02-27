# 01 Vue双向数据绑定原理上

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>01-Vue基本模板</title>
    <!--1.下载导入Vue.js-->
    <script src="js/vue.js"></script>
</head>
<body>
<div id="app">
    <input type="text" v-model="name">
    <p>{{ name }}</p>
</div>
<script>
    // 2.创建一个Vue的实例对象
    let vue = new Vue({
        // 3.告诉Vue的实例对象, 将来需要控制界面上的哪个区域
        el: '#app',
        // 4.告诉Vue的实例对象, 被控制区域的数据是什么
        data: {
            name: "李南江"
        }
    });
    /*
    1.Vue响应式的原理(数据改变界面就会改变)是什么?
      时时监听数据变化, 一旦数据发生变化就更新界面
    2.Vue是如何实现时时监听数据变化的?
      通过原生JS的defineProperty方法
    3.defineProperty方法的特点
      可以直接在一个对象上定义一个新属性，或者修改一个对象的现有属性， 并返回这个对象
    4.defineProperty用法
    obj: 需要操作的对象
    prop: 需要操作的属性
    descriptor: 属性描述符
    Object.defineProperty(obj, prop, descriptor)
    * */
    let obj = {name: '李南江'};
    // 需求: 给obj对象动态新增一个name属性, 并且name属性的取值必须是lnj
    Object.defineProperty(obj, 'name', {
        // 可以通过value来告诉defineProperty方法新增的属性的取值是什么
        value: 'lnj',
        // 默认情况下通过defineProperty新增的属性的取值是不能修改的
        // 如果想修改, 那么就必须显示的告诉defineProperty方法
        // writable: true
        writable: true,
        // 默认情况下通过defineProperty新增的属性是不能删除的
        // 如果想上传, 那么就必须显示的告诉defineProperty方法
        configurable: true,
        // 默认情况下通过defineProperty新增的属性是不能迭代的
        // 如果想迭代, 那么就必须显示的告诉defineProperty方法
        enumerable: true
    });
    console.log(obj);
    // 注意点: 默认情况下通过defineProperty新增的属性的取值是不能修改的
    // obj.name = 'it666';
    // console.log(obj);
    // 注意点: 默认情况下通过defineProperty新增的属性是不能删除的
    // delete obj.name
    // console.log(obj);
    // 注意点: 默认情况下通过defineProperty新增的属性是不能遍历(迭代的)
    // for(let key in obj){
    //     console.log(key, obj[key]);
    // }
</script>
</body>
</html>
```

