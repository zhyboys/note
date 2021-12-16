# 06 每日面试题node与Vue

## 122.什么是nodejs？我们在哪里使用它？

Nodejs是服务器端的一门技术。它是基于Google V8 JavaScript引擎而开发的。用来开发可扩展的服务端程序。

## 123.为什么要使用node js？

nodejs会让我们的编程工作变得简单，它主要包含如下几点几个好处:

执行快速。

永远不会阻滞。

JavaScript是通用的编程语言。

异步处理机制。

避免并行所带来的问题。

## 124.nodejs有哪些特点？

是单线程的，但是有很高的可扩展性，使用JavaScript作为主流编程语言。使用的是异步处理机制和事件驱动。处理高效。

## 125.为什么nodejs是单线程的？

Nodejs使用的是单线程没错，但是通过异步处理的方式，可以处理大量的数据吞吐量，从而有更好的性能和扩可扩展性。

## 126.NPM的作用是什么?

Node package manager, 主要有两个功能。

它是一个网端模块的存储介质。

它的另一个作用是安装程序依赖和版本管理。

## 127.什么是事件循环机制eventloop

1)要说eventloop先来理解同步和异步：

所有的线程，都是有同步队列，和异步队列，

立即执行的任务队列，这些都是属于同步任务，比如一个简单的函数；

请求接口发送ajax，发送promise，或时间计时器等等，这些就是异步任务。

2)、任务队列-事件循环：

同步任务会立刻执行，进入到主线程当中，异步任务会被放到任务队列（Event Queue）当中。`Event Queue 单词的意思就是任务队列。`

等待同步代码执行完毕后，返回来，再将异步中的任务放到主线程中执行,反复这样的循环，这就是事件循环。`也就是先执行同步，返回来按照异步的顺序再次执行`

## 128.vue优点？

答：轻量级框架：只关注视图层，是一个构建数据的视图集合，大小只有几十kb；

简单易学：国人开发，中文文档，不存在语言障碍 ，易于理解和学习；

双向数据绑定：保留了angular的特点，在数据操作方面更为简单；

组件化：保留了react的优点，实现了html的封装和重用，在构建单页面应用方面有着独特的优势；

视图，数据，结构分离：使数据的更改更为简单，不需要进行逻辑代码的修改，只需要操作数据就能完成相关操作；

虚拟DOM：dom操作是非常耗费性能的， 不再使用原生的dom操作节点，极大解放dom操作，但具体操作的还是dom不过是换了另一种方式；

运行速度更快:相比较与react而言，同样是操作虚拟dom，就性能而言，vue存在很大的优势。

## 129.什么是MVVM,谈谈你对mvvm的理解

MVVM模式的理解

MVVM是Model-View-ModelView的缩写

模型-视图-视图模型。

【模型】指的是后端传递的数据。

【视图】指的是所看到的页面。

【视图模型】mvvm模式的核心，它是连接view和model的桥梁。

它有两个方向：

一是将【模型】转化成【视图】，即将后端传递的数据转化成所看到的页面。实现的方式是：数据绑定。

二是将【视图】转化成【模型】，即将所看到的页面转化成后端的数据。

实现的方式是：DOM 事件监听。这两个方向都实现的，我们称之为数据的双向绑定。

总结：

- MVVM是前端视图层的概念，主要关注于 视图层分离，也就是说：MVVM把前端的视图层，分为了 三部分 Model, View , VM ViewModel。
- m   model数据层:Vue中数据层 都放在data 里面。
- v   view视图:Vue中view 即 我们的HTML页面。
- vm （view-model）控制器将数据和视图层建立联系，vm即Vue 的实例。

## 129.双向数据绑定原理

Vue的双向数据绑定的原理主要是通过`Object对象的defineProperty属性，重写data的set和get函数来实现的`,这里对原理不做过多描述，主要还是来实现一个实例。为了使代码更加的清晰，这里只会实现最基本的内容，主要实现v-model，v-bind 和v-click三个命令，其他命令也可以自行补充。

- 当数据发生变化的时候，视图也就发生变化
- 当视图发生变化的时候，数据也会跟着同步变化

## 130.为什么使用key?

答：需要使用key来给每个节点做一个唯一标识，Diff算法就可以正确的识别此节点。

作用主要是为了高效的更新虚拟DOM。

## 131.分别简述computed和watch的使用场景

答：computed:

　　　　当一个属性受多个属性影响的时候就需要用到computed

　　　　最典型的栗子： 购物车商品结算的时候

watch:

　　　　当一条数据影响多条数据的时候就需要用watch

　　　　栗子：搜索数据

## 132.简述Vue的响应式原理

当一个Vue实例创建时，vue会遍历data选项的属性，用 Object.defineProperty 将它们转为 getter/setter并且在内部追踪相关依赖，在属性被访问和修改时通知变化。 每个组件实例都有相应的 watcher 程序实例，它会在组件渲染的过程中把属性记录为依赖，之后当依赖项的 setter 被调用时，会通知 watcher 重新计算，从而致使它关联的组件得以更新。

## 133.Vue.js特点

> 简洁：页面由HTML模板+Json数据+Vue实例组成
>
> 数据驱动：自动计算属性和追踪依赖的模板表达式
>
> 组件化：用可复用、解耦的组件来构造页面
>
> 轻量：代码量小，不依赖其他库
>
> 快速：精确有效批量DOM更新
>
> 模板友好：可通过npm，bower等多种方式安装，很容易融入

## 134.计算属性和watch的区别

> 在我们运用vue的时候一定少不了用计算属性computed和watch
>
> computed计算属性是用来声明式的描述一个值依赖了其它的值。当你在模板里把数据绑定到一个计算属性上时，Vue 会在其依赖的任何值导致该计算属性改变时更新 DOM。这个功能非常强大，它可以让你的代码更加声明式、数据驱动并且易于维护。
>
> watch监听的是你定义的变量,当你定义的变量的值发生变化时，调用对应的方法。就好在div写一个表达式name，data里写入num和lastname,firstname,在watch里当num的值发生变化时，就会调用num的方法，方法里面的形参对应的是num的新值和旧值，而计算属性computed,计算的是Name依赖的值,它不能计算在data中已经定义过的变量。

## 135.v-show和v-if指令的共同点和不同点？

> v-show指令是通过修改元素的displayCSS属性让其显示或者隐藏
>
> v-if指令是直接销毁和重建DOM达到让元素显示和隐藏的效果

## 136.v-on可以监听多个方法吗？

> 可以。

```
<input type="text" :value="name" @input="onInput" @focus="onFocus" @blur="onBlur" />
```

## 137.v-on 常用修饰符

> .stop 该修饰符将阻止事件向上冒泡。同理于调用 event.stopPropagation() 方法
>
> .prevent 该修饰符会阻止当前事件的默认行为。同理于调用 event.preventDefault() 方法
>
> .self 该指令只当事件是从事件绑定的元素本身触发时才触发回调
>
> .once 该修饰符表示绑定的事件只会被触发一次

## 138.v-for key的作用。

> 当Vue用 v-for 正在更新已渲染过的元素列表是，它默认用“就地复用”策略。如果数据项的顺序被改变，Vue将不是移动DOM元素来匹配数据项的改变，而是简单复用此处每个元素，并且确保它在特定索引下显示已被渲染过的每个元素。 为了给Vue一个提示，以便它能跟踪每个节点的身份，从而重用和重新排序现有元素，你需要为每项提供一个唯一 key 属性。key属性的类型只能为 string或者number类型。
>
> key 的特殊属性主要用在 Vue 的虚拟 DOM 算法，在新旧 nodes 对比时辨识 VNodes。如果不使用 key，Vue 会使用一种最大限度减少动态元素并且尽可能的尝试修复/再利用相同类型元素的算法。使用 key，它会基于 key 的变化重新排列元素顺序，并且会移除 key 不存在的元素。

## 139.v-for 与 v-if 的优先级

> v-for比v-if优先，如果每一次都需要遍历整个数组，将会影响速度，尤其是当之需要渲染很小一部分的时候。

## 140.简单说一下Vue2.x响应式数据原理

Vue在初始化数据时，会使用`Object.defineProperty`重新定义data中的所有属性，当页面使用对应属性时，首先会进行依赖收集(收集当前组件的`watcher`)如果属性发生变化会通知相关依赖进行更新操作(`发布订阅`)。

## 141.说一下v-model的原理

`v-model`本质就是一个语法糖，可以看成是`value + input`方法的语法糖。 可以通过model属性的`prop`和`event`属性来进行自定义。原生的v-model，会根据标签的不同生成不同的事件和属性。

## 142. vue.js的两个核心是什么？

> 数据驱动、组件系统

## 143.vue如何兼容ie的问题。

> babel-polyfill插件

## 144.说一下Vue的生命周期

`beforeCreate`是new Vue()之后触发的第一个钩子，在当前阶段data、methods、computed以及watch上的数据和方法都不能被访问。在beforeCreate生命周期执行的时候，data和methods中的数据都还没有初始化。不能在这个阶段使用data中的数据和methods中的方法

`created`在实例创建完成后发生，当前阶段已经完成了数据观测，也就是可以使用数据，更改数据，在这里更改数据不会触发updated函数。可以做一些初始数据的获取，在当前阶段无法与Dom进行交互，如果非要想，可以通过vm.$nextTick来访问Dom。data 和 methods都已经被初始化好了，如果要调用 methods 中的方法，或者操作 data 中的数据，最早可以在这个阶段中操作

`beforeMount`发生在挂载之前，在这之前template模板已导入渲染函数编译。而当前阶段虚拟Dom已经创建完成，即将开始渲染。在此时也可以对数据进行更改，不会触发updated。执行到这个钩子的时候，在内存中已经编译好了模板了，但是还没有挂载到页面中，此时，页面还是旧的

`mounted`在挂载完成后发生，在当前阶段，真实的Dom挂载完毕，数据完成双向绑定，可以访问到Dom节点，使用$refs属性对Dom进行操作。

`beforeUpdate`发生在更新之前，也就是响应式数据发生更新，虚拟dom重新渲染之前被触发，你可以在当前阶段进行更改数据，不会造成重渲染。

`updated`发生在更新完成之后，当前阶段组件Dom已完成更新。要注意的是避免在此期间更改数据，因为这可能会导致无限循环的更新。

`beforeDestroy`发生在实例销毁之前，在当前阶段实例完全可以被使用，我们可以在这时进行善后收尾工作，比如清除计时器。

`destroyed`发生在实例销毁之后，这个时候只剩下了dom空壳。组件已被拆解，数据绑定被卸除，监听被移出，子实例也统统被销毁。

## 145.你都做过哪些Vue的性能优化？

### 编码阶段

- 尽量减少data中的数据，data中的数据都会增加getter和setter，会收集对应的watcher
- v-if和v-for不能连用
- 如果需要使用v-for给每项元素绑定事件时使用事件代理
- SPA 页面采用keep-alive缓存组件
- 在更多的情况下，使用v-if替代v-show
- key保证唯一
- 使用路由懒加载、异步组件
- 防抖、节流
- 第三方模块按需导入
- 长列表滚动到可视区域动态加载
- 图片懒加载

### SEO优化

- 预渲染
- 服务端渲染SSR

### 打包优化

- 压缩代码
- Tree Shaking/Scope Hoisting
- 使用cdn加载第三方模块
- 多线程打包happypack
- splitChunks抽离公共文件
- sourceMap优化

### 用户体验

- 骨架屏
- PWA

还可以使用缓存(客户端缓存、服务端缓存)优化、服务端开启gzip压缩等。

## 146.axios是什么？怎么使用？描述使用它实现登录功能的流程？

第一问

请求后台资源的模块。npm install axios -S装好，然后发送的是跨域，需在配置文件中config/index.js进行设置。后台如果是Tp5则定义一个资源路由。js中使用import进来，然后.get或.post。返回在.then函数中如果成功，失败则是在.catch函数中

第二问根据项目回答.

## 147.SPA 单页面的理解，它的优缺点分别是什么？

优点：

用户体验好、快，内容的改变不需要重新加载整个页面，避免了不必要的跳转和重复渲染；

基于上面一点，SPA 相对对服务器压力小；

前后端职责分离，架构清晰，前端进行交互逻辑，后端负责数据处理；

缺点：

初次加载耗时多：为实现单页 Web 应用功能及显示效果，需要在加载页面的时候将 JavaScript、CSS 统一加载，部分页面按需加载；

前进后退路由管理：由于单页应用在一个页面中显示所有的内容，所以不能使用浏览器的前进后退功能，所有的页面切换需要自己建立堆栈管理；

SEO 难度较大：由于所有的内容都在一个页面中动态替换显示，所以在 SEO 上其有着天然的弱势。

## 148. js的哪些操作会造成内存泄露

(1) 意外的全局变量（未经声明的变量，直接this创建的变量）

(2) 计时器（计时器未被清除的时候就一直存在）或回调函数

(3) Dom清空或删除时，事件未清除导致的内存泄漏

(4) 闭包

(5) 控制台过多的console.log()

## 149.再说一下vue2.x中如何监测数组变化

使用了函数劫持的方式，重写了数组的方法，Vue将data中的数组进行了原型链重写，指向了自己定义的数组原型方法。这样当调用数组api时，可以通知依赖更新。如果数组中包含着引用类型，会对数组中的引用类型再次递归遍历进行监控。这样就实现了监测数组变化。

## 150.keep-alive了解吗

`keep-alive`可以实现组件缓存，当组件切换时不会对当前组件进行卸载。

常用的两个属性`include/exclude`，允许组件有条件的进行缓存。

两个生命周期`activated/deactivated`，用来得知当前组件是否处于活跃状态。

keep-alive的中还运用了`LRU(Least Recently Used)`算法。

## 151.vue路由hash模式和history模式实现原理及区别

#### hash 模式：

\#后面 hash 值的变化，不会导致浏览器向服务器发出请求，浏览器不发出请求，就不会刷新页面通过监听 hashchange 事件可以知道 hash 发生了哪些变化，然后根据 hash 变化来实现更新页面部分内容的操作。

#### history 模式：

history 模式的实现，主要是 HTML5 标准发布的两个 API，pushState 和 replaceState，这两个 API 可以改变 url，但是不会发送请求。这样就可以监听 url 变化来实现更新页面部分内容的操作。

#### 区别

url 展示上，hash 模式有“#”，history 模式没有

刷新页面时，hash 模式可以正常加载到 hash 值对应的页面，而 history 没有处理的话，会返回 404，一般需要后端将所有页面都配置重定向到首页路由

兼容性，hash 可以支持低版本浏览器和 IE。

## 152.vue路由传参

### 一、router-link路由导航

**父组件:** 使用`<router-link to = "/跳转路径/传入的参数"></router-link>`

例如：`<router-link to="/a/123">routerlink传参</router-link>`

**子组件:** this.$route.params.num接收父组件传递过来的参数

```
mounted () {
  this.num = this.$route.params.num
}
```

**路由配置:**：`{path: '/a/:num', name: A, component: A}`

**地址栏中的显示:**：`http://localhost:8080/#/a/123`

### 二、调用$router.push实现路由传参

**父组件:** 绑定点击事件，编写跳转代码

```
<button @click="deliverParams(123)">push传参</button>
  methods: {
    deliverParams (id) {
      this.$router.push({
        path: `/d/${id}`
      })
    }
  }
```

**子组件:** this.$route.params.id接收父组件传递过来的参数

```
mounted () {
  this.id = this.$route.params.id
}
```

**路由配置:**：`{path: '/d/:id', name: D, component: D}`

**地址栏中的显示:**：`http://localhost:8080/#/d/123`

### 三、通过路由属性中的name匹配路由，再根据params传递参数

**父组件:** 匹配路由配置好的属性名

```
<button @click="deliverByName()">params传参</button>
    deliverByName () {
      this.$router.push({
        name: 'B',
        params: {
          sometext: '一只羊出没'
        }
      })
    }
```

**子组件:**

```
<template>
  <div id="b">
    This is page B!
    <p>传入参数：{{this.$route.params.sometext}}</p>
  </div>
</template>
```

**路由配置:** 路径后面不需要再加传入的参数，但是name必须和父组件中的name一致

`{path: '/b', name: 'B', component: B}`

**地址栏中的显示:** 可以看出地址栏**不会带**有传入的参数，且再次刷新页面后**参数会丢失**

`http://localhost:8080/#/b`

### 四、通过query来传递参数

**父组件:**

```
<button @click="deliverQuery()">query传参</button>
    deliverQuery () {
      this.$router.push({
        path: '/c',
        query: {
          sometext: '这是小羊同学'
        }
      })
    }
```

**子组件:**

```
<template>
  <div id="C">
    This is page C!
    <p>这是父组件传入的数据: {{this.$route.query.sometext}}</p>
  </div>
</template>
```

**路由配置:** 不需要做任何修改

`{path: '/c', name: 'C', component: C}`

**地址栏中的显示:** (中文做了转码)

`http://localhost:8080/#/c?sometext=%E8%BF%99%E6%98%AF%E5%B0%8F%E7%BE%8A%E5%90%8C%E5%AD%A6`

## 153.vuex是什么？怎么使用？哪种功能场景使用它？

Vuex 是一个专为 Vue.js 应用程序开发的状态管理模式。它采用集中式存储管理应用的所有组件的状态，并以相应的规则保证状态以一种可预测的方式发生变化。简单来说就是：应用遇到多个组件共享状态时，使用vuex。

场景：多个组件共享数据或者是跨组件传递数据时

vuex的流程

页面通过mapAction异步提交事件到action。action通过commit把对应参数同步提交到mutation，mutation会修改state中对应的值。最后通过getter把对应值跑出去，在页面的计算属性中，通过，mapGetter来动态获取state中的值

## 154.vuex有哪几种属性

有五种,分别是State , Getter , Mutation , Action , Module (就是mapAction)

\1. state：vuex的基本数据，用来存储变量

\2. geeter：从基本数据(state)派生的数据，相当于state的计算属性

\3. mutation：提交更新数据的方法，必须是同步的(如果需要异步使用action)。每个mutation 都有一个字符串的 事件类型 (type) 和 一个 回调函数 (handler)。回调函数就是我们实际进行状态更改的地方，并且它会接受 state 作为第一个参数，提交载荷作为第二个参数。

\4. action：和mutation的功能大致相同，不同之处在于 ==》1. Action 提交的是 mutation，而不是直接变更状态。 2. Action 可以包含任意异步操作。

\5. modules：模块化vuex，可以让每一个模块拥有自己的state、mutation、action、getters,使得结构非常清晰，方便管理

## 155.Vue.js中ajax请求代码应该写在组件的methods中还是vuex的actions中？

一、如果请求来的数据是不是要被其他组件公用，仅仅在请求的组件内使用，就不需要放入vuex 的state里。

二、如果被其他地方复用，这个很大几率上是需要的，如果需要，请将请求放入action里，方便复用，并包装成promise返回，在调用处用async await处理返回的数据。如果不要复用这个请求，那么直接写在vue文件里很方便

## 156.Vuex中actions和mutations的区别

Mutation 更改 Vuex 的 store 中的状态的唯一方法是提交 mutation。Vuex 中的 mutation 非常类似于事件：每个 mutation 都有一个字符串的 事件类型 (type) 和 一个 回调函数 (handler)。这个回调函数就是我们实际进行状态更改的地方，并且它会接受 state 作为第一个参数

Action 类似于 mutation，不同在于：

- Action 提交的是 mutation，而不是直接变更状态。
- Action 可以包含任意异步操作。 .

## 157.为什么 Vue 组件中 data 必须是一个函数？

​	如果 `data` 是一个对象，当复用组件时，因为 `data` 都会指向同一个引用类型地址，其中一个组件的 `data` 一旦发生修改，则其他重用的组件中的 data 也会被一并修改。
​	如果 `data` 是一个返回对象的函数，因为每次重用组件时返回的都是一个新对象，引用地址不同，便不会出现如上问题。

## 158.Vue 如何清除浏览器缓存？

（1）项目打包的时候给每个打包文件加上 hash 值，一般是在文件后面加上时间戳；
    
（2）在 html 文件中加入 meta 标签，content 属性设置为**no-cache**;
    
（3） 在后端服务器中进行禁止缓存设置。

## 159.Vue-cli 项目中每个文件夹和文件的用处大致是什么？

（1）**bulid 文件夹**：存放 webpack 的相关配置以及脚本文件，实际开发中一般用来配置 less、babel 和配置 webpack.base.config.js 文件。
    
（2）**config 文件夹**：常用到此文件夹下的 config.js (index.js) 配置开发环境的端口号，是否开启热加载或者设置生产环境的静态资源相对路径、是否开启 gzip 压缩、npm run build 命令打包生成静态资源的名称和路径等。
    
（3）**node_modules 文件夹**：存放 npm install 命令下载的开发环境和生产环境的各种依赖。
    
（4）**src 文件夹** ：存放组件源码、图片样式资源、入口文件、路由配置等。

## 160.Vue-cli 项目中 assets 和 static 文件夹有什么区别？

两者都是用于存放项目中所使用的静态资源文件的文件夹。其区别在于：
    
** assets 中**的文件在运行 npm run build 的时候**会打包**，简单来说就是会被压缩体积，代码格式化之类的。打包之后也会放到 static 中。**static 中**的文件则**不会被打包**。

> 将图片等未处理的文件放在assets中，打包减少体积。而对于第三方引入的一些资源文件如iconfont.css等可以放在static中，因为这些文件已经经过处理了。

## 161.`$nextTick`是什么？

> vue实现响应式并不是数据发生变化后dom立即变化，而是按照一定的策略来进行dom更新。
>
> `$nextTick` 是在下次 DOM 更新循环结束之后执行延迟回调，在修改数据之后使用 $nextTick，则可以在回调中获取更新后的 DOM

## 162.$nextTick的使用

答：当你修改了data的值然后马上获取这个dom元素的值，是不能获取到更新后的值，

你需要使用$nextTick这个回调，让修改后的data值渲染更新到dom元素之后在获取，才能成功。

## 163.请说下封装 vue 组件的过程？

答：1. 建立组件的模板，先把架子搭起来，写写样式，考虑好组件的基本逻辑。(os：思考1小时，码码10分钟，程序猿的准则。)

　　2. 准备好组件的数据输入。即分析好逻辑，定好 props 里面的数据、类型。

　　3. 准备好组件的数据输出。即根据组件逻辑，做好要暴露出来的方法。

　　4. 封装完毕了，直接调用即可

## 164.params和query的区别

答：用法：query要用path来引入，params要用name来引入，接收参数都是类似的，分别是this.$route.query.name和this.$route.params.name。

url地址显示：query更加类似于我们ajax中get传参，params则类似于post，说的再简单一点，前者在浏览器地址栏中显示参数，后者则不显示

注意点：query刷新不会丢失query里面的数据

params刷新 会 丢失 params里面的数据。

## 165.$route 和 $router 的区别

答：$router是VueRouter的实例，在script标签中想要导航到不同的URL,使用$router.push方法。返回上一个历史history用$router.to(-1)

$route为当前router跳转对象。里面可以获取当前路由的name,path,query,parmas等。

## 166.点击穿透

<https://www.jianshu.com/p/c8ab1e065a07>

## 167.什么是vue的生命周期

Vue 实例从开始创建、初始化数据、编译模板、挂载Dom和渲染、更新和渲染、卸载等一系列过程，这是 Vue 的生命周期

## 168.vue的生命周期的八个钩子函数

参见:144

## 169.第一次页面加载会触发哪几个钩子？

答：beforeCreate， created， beforeMount， mounted

## 170.created和mounted的区别

created:在模板渲染成html前调用，即通常初始化某些属性值，然后再渲染成视图。

mounted:在模板渲染成html后调用，通常是初始化页面完成后，再对html的dom节点进行一些需要的操作。

# 化身面试官出30+Vue面试题，超级干货（附答案）｜牛气冲天新年征文

<https://juejin.cn/post/6930897845369356295>

<https://juejin.cn/post/6844904012848840712>