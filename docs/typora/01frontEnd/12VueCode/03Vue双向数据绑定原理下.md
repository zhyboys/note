# 03 Vue双向数据绑定原理下

为什么：为什么可以直接` value = newValue `修改obj里的内容？

其实set和get修改和返回的都是value，根本就不是obj.xxx。

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
    需求: 快速监听对象中所有属性的变化
    * */
    let obj = {
        name: 'lnj',
        // name: {a: 'abc'},
        age: 33
    };
    class Observer{
        // 只要将需要监听的那个对象传递给Observer这个类
        // 这个类就可以快速的给传入的对象的所有属性都添加get/set方法
        constructor(data){
            this.observer(data);
        }
        observer(obj){
            if(obj && typeof obj === 'object'){
                // 遍历取出传入对象的所有属性, 给遍历到的属性都增加get/set方法
                for(let key in obj){
                    this.defineRecative(obj, key, obj[key])
                }
            }
        }
        // obj: 需要操作的对象
        // attr: 需要新增get/set方法的属性
        // value: 需要新增get/set方法属性的取值
        defineRecative(obj, attr, value){
            // 如果属性的取值又是一个对象, 那么也需要给这个对象的所有属性添加get/set方法
            this.observer(value);
            Object.defineProperty(obj, attr, {
                get(){
                    return value;
                },
                set:(newValue)=>{
                    if(value !== newValue){
                        // 如果给属性赋值的新值又是一个对象, 那么也需要给这个对象的所有属性添加get/set方法
                        this.observer(newValue);
                        value = newValue;
                        console.log('监听到数据的变化, 需要去更新UI');
                    }
                }
            })
        }
    }
    new Observer(obj);
    // obj.name = 'it666';
    // obj.age = 666;
    // obj.name.a = 'it666';
    obj.name = {a: 'abc'};
    obj.name.a = 'it666';
</script>
</body>
</html>
```

