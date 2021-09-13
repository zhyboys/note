# 87 vue中使用Swiper



## 01 安装

```sh
npm install swiper vue-awesome-swiper --save
```



## 02 导入

### 2.1 全局使用

```js
import Vue from 'vue'
import VueAwesomeSwiper from 'vue-awesome-swiper'

// import style (>= Swiper 6.x)
import 'swiper/swiper-bundle.css'

// import style (<= Swiper 5.x)
import 'swiper/css/swiper.css'

Vue.use(VueAwesomeSwiper, /* { default options with global component } */)
```

### 2.2 局部使用

```js
import { Swiper, SwiperSlide, directive } from 'vue-awesome-swiper'

// import style (>= Swiper 6.x)
import 'swiper/swiper-bundle.css'

// import style (<= Swiper 5.x)
import 'swiper/css/swiper.css' //此项目用到

export default {
  name: 'Banner',
  data () {
    return {
      swiperOptions: {
        pagination: {
          el: '.swiper-pagination'
        },
        loop: true,
        autoplay: {
          delay: 1000,
          stopOnLastSlide: false, // 播放到最后一个后是否停止播放
          disableOnInteraction: false // 用户操作后是否停止autoplay
        },
        // 告诉swiper数据是异步加载的。
        observer: true,
        observeParents: true,
        observeSlideChildren: true
        // Some Swiper option/callback...
      }
    }
  },
  components: {
    Swiper,
    SwiperSlide
  },
  directives: {
    swiper: directive
  }
}
```



## 03 覆盖样式

如果想覆盖swiper的样式，必须在style中去掉scoped设置全局样式。否则无法覆盖。



## 04 停止轮播bug

如果是从网络上获取的数据，自动轮播到最后一页就不自动轮播了。老师说的bug，我用的5.X（5.1.0）版本并没有此bug。

解决方案：

> 只需在swiper组件上加v-if='数据.--'

```html
<swiper ref="mySwiper" :options="swiperOptions" class="banner" v-if="banners.length">
```



## 05 指定分页器类名

```js
pagination: {
  el: '.swiper-pagination',
  bulletClass: 'my-bullet',
  bulletActiveClass: 'my-active-bullet'
},
```
