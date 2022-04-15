# 04 构建自定义Vue实例

我们是怎样使用vue的。

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>01-Vue基本模板</title>
    <!--1.下载导入Vue.js-->
<!--    <script src="js/vue.js"></script>-->
    <script src="js/nue.js"></script>
</head>
<body>
<div id="app">
    <input type="text" v-model="name">
    <p>{{ name }}</p>
    <p>{{age}}</p>
    <ul>
        <li>6</li>
        <li>6</li>
        <li>6</li>
    </ul>
</div>
<script>
    /*
    1.要想使用Vue必须先创建Vue的实例, 创建Vue的实例通过new来创建, 所以说明Vue是一个类
      所以我们要想使用自己的Vue,就必须定义一个名称叫做Vue的类
    2.只要创建好了Vue的实例, Vue就会根据指定的区域和数据, 去编译渲染这个区域
      所以我们需要在自己编写的Vue实例中拿到数据和控制区域, 去编译渲染这个区域
      注意点: 创建Vue实例的时候指定的控制区域可以是一个ID名称, 也可以是一个Dom元素
      注意点: Vue实例会将传递的控制区域和数据都绑定到创建出来的实例对象上
              $el/$data
    * */
    // 2.创建一个Vue的实例对象
    // let vue = new Vue({
    let vue = new Nue({
        // 3.告诉Vue的实例对象, 将来需要控制界面上的哪个区域
        el: '#app',
        // el: document.querySelector('#app'),
        // 4.告诉Vue的实例对象, 被控制区域的数据是什么
        data: {
            name: "李南江",
            age: 33
        }
    });
    console.log(vue.$el);
    console.log(vue.$data);
</script>
</body>
</html>
```

vue怎么实现。

```js
class Nue {
    constructor(options){
        // 1.保存创建时候传递过来的数据
        if(this.isElement(options.el)){
            this.$el = options.el;
        }else{
            this.$el = document.querySelector(options.el);
        }
        this.$data = options.data;
        // 2.根据指定的区域和数据去编译渲染界面
        if(this.$el){
            new Compiler(this)
        }
    }
    // 判断是否是一个元素
    isElement(node){
        return node.nodeType === 1;
    }
}
class Compiler {
    constructor(vm){
        this.vm = vm;
    }
}
```

