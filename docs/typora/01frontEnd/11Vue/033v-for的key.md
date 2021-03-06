# 33 v-for的key

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>34-Vue-v-for-key</title>
    <script src="js/vue.js"></script>
</head>
<body>
<!--
1.v-for注意点
1.1v-for为了提升性能, 在更新已渲染过的元素列表时，会采用“就地复用”策略。
也正是因为这个策略, 在某些时刻会导致我们的数据混乱
例如: 在列表前面新增了内容
1.2为了解决这个问题, 我们可以在渲染列表的时候给每一个元素加上一个独一无二的key
v-for在更新已经渲染过的元素列表时, 会先判断key是否相同, 如果相同则复用, 如果不同则重新创建

2.key属性注意点
不能使用index的作为key,因为当列表的内容新增或者删除时index都会发生变化
-->
<!--这里就是MVVM中的View-->
<div id="app">
    <form>
        <input type="text" v-model="name">
        <input type="submit" value="添加" @click.prevent="add">
    </form>
    <ul>
<!--        <li v-for="(person,index) in persons" :key="person.id">-->
        <li v-for="(person,index) in persons" :key="index">
            <input type="checkbox">
            <span>{{index}} --- {{person.name}}</span>
        </li>
    </ul>
</div>
<script>
    // 这里就是MVVM中的View Model
    let vue = new Vue({
        el: '#app',
        // 这里就是MVVM中的Model
        data: {
            persons: [
                {name: "zs", id: 1},
                {name: "ls", id: 2},
                {name: "ww", id: 3}
                ],
            name: ""
        },
        // 专门用于存储监听事件回调函数
        methods: {
            add(){
                let lastPerson = this.persons[this.persons.length - 1];
                let newPerson = {name: this.name, id: lastPerson.id + 1};
                // this.persons.push(newPerson);
                this.persons.unshift(newPerson);
                this.name = "";
            }
        },
        // 专门用于定义计算属性的
        computed: {
        }
    });
</script>
</body>
</html>
```