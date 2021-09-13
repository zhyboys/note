# 44 小项目补充知识

## 01 普通方法和箭头函数区别


1. 普通函数/方法中的this, 谁调用就是谁

2. 箭头函数中的this, 是父作用域的this，不是调用者

3. 箭头函数中的this永远都只看它所属的作用域的this，无法通过bind/call/apply来修改

```javascript
       function demo() {
            console.log(this); // Window
        }
        demo();
        // window.demo();
        */
        /*
        let p = {
            name: "lnj",
            say: function () {
                console.log(this); // {name: "lnj", say: ƒ}
            },
            // 因为没有将箭头函数放到其它的函数中, 所以箭头函数属于全局作用域
            // 在JS中只有定义一个新的函数才会开启一个新的作用域
            hi: () => {
                console.log(this); // Window 
            }
        }
        p.say();
        p.hi();
        console.log(this); // Window
        */
        /*
        function Person() {
            this.name = "lnj";
            this.say = function () {
                console.log(this); // Person
            }
            // 因为将箭头函数放到其它的函数中, 所以箭头函数属于其它函数(当前的其它函数就是构造函数)
            // 既然箭头函数属于构造函数, 所以箭头函数中的this就是构造函数的this
            this.hi = () =>{
                console.log(this); // Person
            }
        }
        let p = new Person();
        p.say();
        p.hi();
        */

        function Person() {
            this.name = "lnj";
            this.say = function () {
                console.log(this); // {name: "zs"}
            }
            this.hi = () =>{
                console.log(this); // Person
            }
        }
        let p = new Person();
        p.say.call({name: "zs"});
        // 注意点: 箭头函数中的this永远都只看它所属的作用域的this
        //         无法通过bind/call/apply来修改
        p.hi.call({name: "zs"});
```

## 02 将数字转为相应字母

键码值

`fromCharCode`

```javascript
let char = String.fromCharCode(num);
```

## 03 事件

搜索w3school中的DOM Event有很多，

onkeydown是键盘按下事件function(event),event有两个属性，keycode和key。

## 04 大小写转换

```javascript
"ABC".toLowerCase();
"abc".toUpperCase();
```

