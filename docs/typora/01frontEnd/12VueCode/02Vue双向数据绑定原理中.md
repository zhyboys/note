# 02 Vue双向数据绑定原理中

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
    1.defineProperty方法
    defineProperty除了可以动态修改/新增对象的属性以外
    还可以在修改/新增的时候给该属性添加get/set方法
    2.defineProperty get/set方法特点
    只要通过defineProperty给某个属性添加了get/set方法
    那么以后只要获取这个属性的值就会自动调用get, 设置这个属性的值就会自动调用set
    3.注意点:
    如果设置了get/set方法, 那么就不能通过value直接赋值, 也不能编写writable:true
    * */
    let obj = {};
    let oldValue = '李南江';
    Object.defineProperty(obj, 'name', {
        // value: oldValue,
        // writable: true,
        configurable: true,
        enumerable: true,
        get(){
            console.log("get方法被执行了");
            return oldValue;
        },
        set(newValue){
            if(oldValue !== newValue){
                console.log("set方法被执行了");
                oldValue = newValue;
            }
        }
    });
    console.log(obj.name);
    obj.name = 'lnj';
</script>
</body>
</html>
```

