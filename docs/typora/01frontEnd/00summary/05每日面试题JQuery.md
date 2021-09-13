# 05 每日面试题JQuery

## 89.jQuery 库中的 $() 是什么？

$() 函数是 jQuery() 函数的别称,$() 函数用于将任何对象包裹成 jQuery 对象，接着你就被允许调用定义在 jQuery 对象上的多个不同方法。你甚至可以将一个选择器字符串传入 $() 函数，它会返回一个包含所有匹配的 DOM 元素数组的 jQuery 对象。

## 90.网页上有 5 个 `<div>` 元素，如何使用 jQuery来选择它们？

$("div")，这样会返回一个包含所有 5 个 div 标签的 jQuery 对象。

## 91. jQuery 里的 ID 选择器和 class 选择器有何不同？

ID 选择器使用 ID 来选择元素，比如 #element1，而 class 选择器使用 CSS class 来选择元素。当你只需要选择一个元素时，使用 ID 选择器，而如果你想要选择一组具有相同 CSS class 的元素，就要用 class 选择器。

## 92. 如何在点击一个按钮时使用 jQuery 隐藏一个图片？

```js
$('#ButtonToClick').click(function(){

  $('#ImageToHide').hide();

});
```

## 93.$(document).ready() 是个什么函数？为什么要用它？

ready() 函数用于在文档进入ready状态时执行代码。当DOM 完全加载（例如HTML被完全解析DOM树构建完成时），jQuery允许你执行代码。使用$(document).ready()的最大好处在于它适用于所有浏览器，jQuery帮你解决了跨浏览器的难题。

## 94.JavaScript window.onload 事件和 jQuery ready 函数有何不同？

JavaScript window.onload 事件和 jQuery ready 函数之间的主要区别是，前者除了要等待 DOM 被创建还要等到包括大型图片、音频、视频在内的所有外部资源都完全加载。如果加载图片和媒体内容花费了大量时间，用户就会感受到定义在 window.onload 事件上的代码在执行时有明显的延迟。

　　另一方面，jQuery ready() 函数只需对 DOM 树的等待，而无需对图像或外部资源加载的等待，从而执行起来更快。使用 jQuery $(document).ready() 的另一个优势是你可以在网页里多次使用它，浏览器会按它们在 HTML 页面里出现的顺序执行它们，相反对于 onload 技术而言，只能在单一函数里使用。鉴于这个好处，用 jQuery ready() 函数比用 JavaScript window.onload 事件要更好些。

## 95.$(this) 和 this 关键字在 jQuery 中有何不同？

这对于很多 jQuery 初学者来说是一个棘手的问题，其实是个简单的问题。$(this) 返回一个 jQuery 对象，你可以对它调用多个 jQuery 方法，比如用 text() 获取文本，用val() 获取值等等。而 this 代表当前元素，它是 JavaScript 关键词中的一个，表示上下文中的当前 DOM 元素。你不能对它调用 jQuery 方法，直到它被 $() 函数包裹，例如 $(this)。

##  96.jQuery中 detach() 和 remove() 方法的区别是什么? 

尽管 detach() 和 remove() 方法都被用来移除一个DOM元素, 两者之间的主要不同在于 detach() 会保持对过去被解除元素的跟踪, 因此它可以被取消解除, 而 remove() 方法则会保持过去被移除对象的引用. 你也还可以看看 用来向DOM中添加元素的 appendTo() 方法.

## 97.你如何利用jQuery来向一个元素中添加和移除CSS类? (答案)

　　通过利用 addClass() 和 removeClass() 这两个 jQuery 方法。动态的改变元素的class属性可以很简单例如. 使用类“.active"来标记它们的未激活和激活状态，等等

                .addClass("类名")添加元素      .remove()  删除样式类   

## 98.jQuery.get() 和 jQuery.ajax() 方法之间的区别是什么?

　　ajax() 方法更强大，更具可配置性, 让你可以指定等待多久，以及如何处理错误。get() 方法是一个只获取一些数据的专门化方法。

## 99.jQuery 中的方法链是什么？使用方法链有什么好处？

　　方法链是对一个方法返回的结果调用另一个方法，这使得代码简洁明了，同时由于只对 DOM 进行了一轮查找，性能方面更加出色。

## 100.如何用jQuery禁用浏览器的前进后退按钮？

实现代码如下：

```
$(document).ready(function() {
    window.history.forward(1);
    //OR window.history.forward(-1);
　　});
```

## 101. jquery中`$.get()`提交和`$.post()`提交有区别吗？

- 相同点：都是异步请求的方式来获取服务端的数据；
- 不同点：

1. 1. 请求方式不同：`$.get()` 方法使用GET方法来进行异步请求的。`$.post()` 方法使用POST方法来进行异步请求的。
   2. 参数传递方式不同：get请求会将参数跟在URL后进行传递，而POST请求则是作为HTTP消息的实体内容发送给Web服务器的，这种传递是对用户不可见的。
   3. 数据传输大小不同：get方式传输的数据大小不能超过2KB 而POST要大的多
   4. 安全问题： GET 方式请求的数据会被浏览器缓存起来，因此有安全问题。

## 102.写出一个简单的`$.ajax()`的请求方式？

```
$.ajax({
    url:'http://www.baidu.com',
    type:'POST',
    data:data,
    cache:true,
    headers:{},
    beforeSend：function(){},
    success:function(){},
    error:function(){},
    complete:function(){}
});
```

## 103.为什么使用jQuery

因为jQuery是轻量级的框架，它有强大的选择器，出色的DOM操作的封装，有可靠的事件处理机制，完善的ajax(它的ajax封装的非常的好，不需要考虑复杂浏览器的兼容性和XMLHttpRequest对象的创建和使用的问题) ,出色的浏览器的兼容性,而且支持链式操作，隐式迭代;行为层和结构层的分离，还支持丰富的插件，jquery的文档也非常的丰富。

## 104.你知道jquery中的选择器吗，请讲一下有哪些选择器？

选择器大致分为:基本选择器，层次选择器，过滤选择器，表单选择器

## 105.jquery中的选择器 和 css中的选择器有区别吗？

jQuery选择器支持CSS里的选择器，jQuery选择器可用来添加样式和添加相应的行为，CSS 中的选择器是只能添加相应的样式。

## 106.你觉得jquery中的ajax好用吗，为什么？

好用的。因为jQuery提供了一些日常开发中夙瑶的快捷操作，例 load，ajax，get，post等等，所以使用jQuery开发ajax将变得极其简单，我们就可以集中精力在业务和用户的体验上，不需要去理会那些繁琐的XMLHttpRequest对象了。ajax() 方法更强大，更具可配置性, 让你可以指定等待多久，以及如何处理错误。

## 107.你在jquery中使用过哪些插入节点的方法，它们的区别是什么？

答:append(),appendTo(),prepend(),prependTo(),after(),insertAfter() before(),insertBefore()

内添加

1.append在文档内添加元素

2.appendTo()把匹配的元素添加到对象里

3.prepend()在元素前添加

4.prependTo()把匹配的元素添加到对象前

外添加

1.after()在元素之后添加

2.before()在元素之前添加

3.insertAfter()把匹配元素在对象后添加

4.insertBefore()把匹配元素在对象前添加

## 108.jquery中有哪些方法可以遍历节点？

children() 取得匹配元素的子元素集合,只考虑子元素不考虑后代元素

next() 取得匹配元素后面紧邻的同辈元素

prev() 取得匹配元素前面紧邻的同辈元素

siblings() 取得匹配元素前后的所有同辈元素

closest() 取得最近的匹配元素

find() 取得匹配元素中的元素集合,包括子代和后代

## 109.jQuery 能做什么？

1 获取页面的元素

2 修改页面的外观

3 改变页面大的内容

4 响应用户的页面操作

5 为页面添加动态效果

6 无需刷新页面，即可以从服务器获取信息

7 简化常见的javascript任务

## 110.jQuery 里的 each() 是什么函数？你是如何使用它的？

each() 函数就像是 Java 里的一个 Iterator，它允许你遍历一个元素集合。你可以传一个函数给 each() 方法，被调用的 jQuery 对象会在其每个元素上执行传入的函数。

## 111.使用CDN加载 jQuery库的主要优势是什么？

除了报错节省服务器带宽以及更快的下载速度这许多的好处之外, 最重要的是，如果浏览器已经从同一个CDN下载类相同的jQuery版本, 那么它就不会再去下载它一次，因此今时今日，许多公共的网站都将jQuery用于用户交互和动画, 如果浏览器已经有了下载好的jQuery库，网站就能有非常好的展示机会。

## 112.var,let,const的区别

- 使用 var 声明的变量，其作用域为全局作用域或者为所在的函数内局部作用域，且存在变量提升现象
- 使用 let 声明的变量，其作用域为该语句所在的代码块内{}，不存在变量提升
- 使用 const 声明的是常量，在后面出现的代码中不能再修改该常量的值

## 113.ES6的新语法

\1. let

let将会具有块级作用域，即在{}之间有效,同时不允许在为声明前进行使用

\2. const

const为常量，不允许修改他的值

\3. 模板字符串

\4. 增强的对象字面量：【给对象属性赋值时，无需写成键值对】

\5. 解构赋值

6.**es6之函数相关语法**

(1)函数参数默认值

(2) 函数不定参数

(3) 箭头函数

7.**es6之class相关语法**

**8.****es6之http请求相关语法**

(1.)promise的使用

(2.)fetch的使用

9.**es6之async-await相关语法**

**等等**

## 114.说说你对数组的解构和对象的解构的理解?

## 115.map和set的区别

- map类似于对象，也是键值对的集合，但是“键”的范围不限制于字符串，各种类型的值（包含对象）都可以当作键。Map 也可以接受一个数组作为参数，数组的成员是一个个表示键值对的数组。注意Map里面也不可以放重复的项。
- Set类似于数组，但是它里面每一项的值是唯一的，没有重复的值，Set是一个构造函数，用来生成set的数据结构

## 116.set实现数组去重

第一种数组去重方法（使用Array.from）：

```
let arr = [12,43,23,43,68,12];
let item = new Set(arr);
console.log(item);//结果输出的是一个对象
//使用Array.from转成数组
let arr = [12,43,23,43,68,12];
let item = Array.from(new Set(arr));
console.log(item);// [12, 43, 23, 68]
```

第二种数组去重方法（使用...扩展运算符）：

```
let arr = [12,43,23,43,68,12];
let item = [...new Set(arr)];
console.log(item);//[12, 43, 23, 68]
```

## 117.JS的垃圾回收机制是什么?你得理解?

最常使用的方法叫做["引用计数"](https://en.wikipedia.org/wiki/Reference_counting)（reference counting）：语言引擎有一张"引用表"，保存了内存里面所有的资源（通常是各种值）的引用次数。如果一个值的引用次数是`0`，就表示这个值不再用到了，因此可以将这块内存释放。JS的垃圾回收机制是为了以防内存泄漏，垃圾回收机制就是间歇的不定期的寻找到不再使用的变量，并释放掉它们所指向的内存。

## 118.cookie、localStorage、sessionStorage的区别

\1. cookie：能存储内容较小，在4k左右，一般用作保存用户登录状态、记住密码，记住账号使用。不清除的话会一直存在，可以设置过期时间自动清除，设置的时候可以设置在不同的域下面。每次在和服务端交互都会放在header里面，所以若是储存太多会影响性能。

2.localStorage：HTML5 标准中新加入的技术，可保存内容在5M左右，不会自动清除，除非手动进行删除。

\3. sessionStorage：和localStorage类似，他们唯一区别就是sessionStorage保存在当前会话中，会话结束sessionStorage失效。会话一般是在关闭页面或者关闭浏览器失效。

## 119.前端性能优化相关理解

一般说来，web前端指网站业务逻辑之前的部分，包括浏览器加载、网站视图模型、图片服务、CDN服务等，主要优化手段有浏览器访问、使用反向代理才、CDN等。

1、减少http请求，合理浏览器缓存

2、启用压缩：HTML、CSS、javascript文件启用GZip压缩可达到较好的效果

3、CSS Sprites：合并 CSS图片，减少请求数的又一个好办法。

4、LazyLoad Images：在页面刚加载的时候可以只加载第一屏，当用户继续往后滚屏的时候才加载后续的图片

5、CSS放在页面最上部，javascript放在页面最下面：让浏览器尽快下载CSS渲染页面

6、异步请求Callback（就是将一些行为样式提取出来，慢慢的加载信息的内容）

7、Javascript代码优化

(1). DOM操作  

a.HTML Collection（HTML收集器，返回的是一个数组内容信息）  

  在脚本中 document.images、document.forms、getElementsByTagName()返回的都是HTMLCollection类型的集合，在平时使用的时候大多将它作为数组来使用，因为它有 length属性，也可以使用索引访问每一个元素。不过在访问性能上则比数组要差很多，原因是这个集合并不是一个静态的结果，它表示的仅仅是一个特定的查询，每次访问该集合时都会重新执行这个查询从而更新查询结果。所谓的“访问集合” 包括读取集合的 length属性、访问集合中的元素。  

  因此，当你需要遍历 HTML Collection的时候，尽量将它转为数组后再访问，以提高性能。即使不转换为数组，也请尽可能少的访问它，例如在遍历的时候可以将 length属性、成员保存到局部变量后再使用局部变量。    

b. 减少Reflow & Repaint    

  除了上面一点之外， DOM操作还需要考虑浏览器的Reflow和Repaint ，因为这些都是需要消耗资源的。

(3)避免使用 eval和 Function

每次 eval 或Function 构造函数作用于字符串表示的源代码时，脚本引擎都需要将源代码转换成可执行代码。这是很消耗资源的操作 —— 通常比简单的函数调用慢 100倍以上。  

  eval 函数效率特别低，由于事先无法知晓传给 eval 的字符串中的内容，eval在其上下文中解释要处理的代码，也就是说编译器无法优化上下文，因此只能有浏览器在运行时解释代码。这对性能影响很大。  

  Function 构造函数比 eval略好，因为使用此代码不会影响周围代码 ;但其速度仍很慢。  

  此外，使用 eval和 Function也不利于Javascript 压缩工具执行压缩。

(4) 减少作用域链查找

然后将拼接结果赋值给新变量。与之相比更为高效的做法是使用数组的 join方法，即将需要拼接的字符串放在数组中最后调用其 join方法得到结果。不过由于使用数组也有一定的开销，因此当需要拼接的字符串较多的时候可以考虑用此方法。

8、CSS选择符优化

在大多数人的观念中，都觉得浏览器对 CSS选择符的解析式从左往右进行的，例如  

\#toc A { color: #444; }这样一个选择符，如果是从右往左解析则效率会很高，因为第一个 ID选择基本上就把查找的范围限定了，但实际上浏览器对选择符的解析是从右往左进行的。如上面的选择符，浏览器必须遍历查找每一个 A标签的祖先节点，效率并不像之前想象的那样高。根据浏览器的这一行为特点，在写选择符的时候需要注意很多事项，有兴趣的童鞋可以去了解一下。

9.使用CDN（contentdistribute network，内容分发网络)

## 120.你能描述一下渐进增强和优雅降级之间的不同吗?

**优雅降级：**Web站点在所有新式浏览器中都能正常工作，如果用户使用的是老式浏览器，则代码会检查以确认它们是否能正常工作。由于IE独特的盒模型布局问题，针对不同版本的IE的hack实践过优雅降级了,为那些无法支持功能的浏览器增加候选方案，使之在旧式浏览器上以某种形式降级体验却不至于完全失效.

**渐进增强：**从被所有浏览器支持的基本功能开始，逐步地添加那些只有新式浏览器才支持的功能,向页面增加无害于基础浏览器的额外样式和功能的。当浏览器支持时，它们会自动地呈现出来并发挥作用。

# 121.[setTimeout、Promise、Async/Await 的区别](https://www.cnblogs.com/sugartang/p/11888854.html)

#### 1. setTimeout

![image](https://cdn.nlark.com/yuque/0/2021/gif/5375988/1612354310889-b946f7f3-e859-46bb-92c5-5331dc54b3e8.gif)

console.log('script start')    //1. 打印 script start

setTimeout(function(){

    console.log('settimeout')    // 4. 打印 settimeout

})    // 2. 调用 setTimeout 函数，并定义其完成后执行的回调函数

console.log('script end')    //3. 打印 script start

// 输出顺序：script start->script end->settimeout

![image](https://cdn.nlark.com/yuque/0/2021/gif/5375988/1612354310908-b8b857e3-3600-4f4f-bd37-50813f8e3282.gif)

#### 2. Promise

Promise本身是**同步的立即执行函数**， 当在executor中执行resolve或者reject的时候, 此时是异步操作， 会先执行then/catch等，当主栈完成后，才会去调用resolve/reject中存放的方法执行，打印p的时候，是打印的返回结果，一个Promise实例。

![image](https://cdn.nlark.com/yuque/0/2021/gif/5375988/1612354310876-8241f435-bd9d-4179-92cf-55b804a7ddeb.gif)

 console.log('promise111')

        let promise1 = new Promise(function (resolve) {
    
            console.log('promise222')
    
            resolve()
    
            console.log('promise333')
    
        }).then(function () {
    
            console.log('promise555')
    
        })
    
        setTimeout(function () {
    
            console.log('promise666')
    
        })
    
        console.log('promise444')

![image](https://cdn.nlark.com/yuque/0/2021/gif/5375988/1612354310932-649f6091-05a6-4cb8-9c1a-e5677915eb59.gif)

// 3. async/await

![image](https://cdn.nlark.com/yuque/0/2021/gif/5375988/1612354310878-ed16107f-a6e6-4983-a209-0d9d9fa164b7.gif)

async function async1() {

            console.log('async022');
    
            await async2();
    
            console.log('async055')
    
        }
    
        async function async2() {
    
            console.log('async033')
    
        }
    
        console.log('async011');
    
        async1();
    
        console.log('async044')
    
        // 输出顺序：script start->async1 start->async2->script end->async1 end
    
        // async 函数返回一个 Promise 对象，当函数执行的时候，一旦遇到 await 就会先返回，等到触发的异步操作完成，再执行函数体内后面的语句。可以理解为，是让出了线程，跳出了 async 函数体。