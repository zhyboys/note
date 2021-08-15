# 搭建博客

## 01 安装初始化

1. 安装node并检测，cmd输入`node -v`显示`v14.15.0`，输入`npm -v`显示`6.14.8`。表示安装成功。

2. 安装cnpm并检测，cmd输入`npm install -g cnpm --registry=https://registry.npm.taobao.org`。

   ```
   安装后会显示安装路径
   C:\Users\26254\AppData\Roaming\npm\cnpm -> C:\Users\26254\AppData\Roaming\npm\node_modules\cnpm\bin\cnpm
   + cnpm@6.1.1
   added 688 packages from 971 contributors in 31.368s
   ```

4. 输入cnpm -v检测是否正常，判断是否需要配置环境变量。

   ```
   path下添加C:\Users\26254\AppData\Roaming\npm因该是吧？？？反正我没配。
   ```

5. 全局安装vuepress：cmd中输入`cnpm install -g vuepress`

6. 在cmd中，输入`E:`，选择你要操作的盘。

7. 在cmd中，输入`cd work`进入要操作的文件夹work。

8. 老师的work文件夹下有`anji demo source stuJava testjava`这几个文件夹。

9. 在cmd中，输入`dir`查看目录解构。

10. 在cmd中，输入`mkdir vuepress-blog`创建文件夹vuepress-blog文件夹作为目录，把博客项目看成一本书，的目录。

11. 在cmd中，进行项目初始化，初始化后生成一个package.json文件。

    ```bash
    cd vuepress-blog
    npm init -y
    ```

12. 在package.json文件旁边新建一个docs文件夹，目的是存放书。

13. 进入docs文件夹，新建md文件，名为README.md，并在README（首页），写入以下内容：

    ```markdown
    ---
    home: true
    heroImage: /img/logo.jpg
    actionText: 快速上手 →
    actionLink: /zh/guide/
    features:
    - title: 简洁至上
      details: 以Markdown 为中心的项目结构，以最少的配置帮助你专注于写作。
    - title: Vue驱动
      details: 享受vue+webpack的开发体验，在Markdown中使用vue组件，同时可以使用vue来开发自定义主题。
    - title: 高性能
      details: VuePress 为每个页面预渲染生成静态的HTML，同时在页面被加载时，将作为SPA运行。
    footer: MIT Licensed | Copyright @ 2018-present Evan You
    ---
    ```

    

## 02 核心配置

1. 在cmd中，进入docs文件夹内`cd docs`。

2. 在cmd中，输入`mkdir .vuepress`创建.vuepress文件夹，因为带点，所以不用命令有可能创建失败。

3. 在cmd中，输入`cd .vuepress`进入，输入`touch config.js`创建config.js文件。也可以直接鼠标右击创建txt文件改名js文件。

   1. config.js文件时整个项目的核心配置文件，所有菜单、栏目相关的配置均在该模块中。
   2. 事实上我输入命令touch显示不认识该命令，只好手动建文件了。

4. 在config.js中输入以下内容：

   ```js
   module.exports = {
   	title: '桓',
   	description: '军哥带你上王者',
   	dest: './dist',//一般不配，默认在.vuepress目录下
   	port: '7777',
   	head: [
           ['link',{ rel: 'icon', href: '/logo.jpg' }]
   		// ['link', { rel: 'icon', href: '/img/logo.favicon' }],
   		// ['link', { rel: 'stylesheet', href: '/css/style.css' }],
   		// ['script', { charset: 'utf-8', src: '/js/main.js' }],//添加js
   ],
   	markdown: {
   		lineNumbers: true
   	},
   	themeConfig: {
           // nav: require("./nav.js"),
           nav: [{
               text: '懵逼指南',link:'/guide/'
           }],
           // sidebar: require("./sidebar.js"),
           sidebar: {'/guide/':[
               {
                   title:'新手指南',
                   collapsable: true,
                   children:[
                       '/guide/notes/one'
                   ]
               },
               {
                   title:'新手指南',
                   collapsable: true,
                   children:[
                       '/guide/notes/two'
                   ]
               }
           ]},
   		sidebarDepth: 2,
   		lastUpdated: 'last Updated',
   		searchMaxSuggestoins: 10,
   		serviceWorker: {
   			UpdatePopup: {
   				message: "有新的内容.",
   				buttonText: '更新'
   			}
   		},
   		editLinks: true,
   		editLinkText: '在GitHub上编辑此页！'
   	}
   }
   ```

5. 在cmd中输入`cd ..`进入vuepress-blog文件夹，这是根目录，主要是这里面有个json文件。

6. 在cmd中输入命令`vuepress dev docs`运行一下试试。

7. 一般情况下不会报错，会显示链接http://localhost:7777/

8. 运行后浏览器中有可能会出现乱码，是因为编码问题。

   1. 把readme重新指定编码格式，我这次没出现这个问题。
   2. 在cmd中`ctrl+c`结束运行，再输入`vuepress dev docs`重新运行。

## 03 导航栏的配置

1. 找到在.vuepress文件夹下的config.js文件并打开。

2. 找到themeConfig主题配置。

3. 找到下面代码：

   ```js
   nav: [{
   	text: '懵逼指南',link:'/guide/'
   }],
   ```

4. 现在导航栏只有一个导航，数量较少，在数量较多时，简易引入新的js文件，怎么做？看下面步骤：

   1. 将config.js文件中nav的代码修改一下，把原来注释的取消注释，并把该注释的注释掉，就是改成引入的js路径文件。

   2. 在config.js文件所在文件夹中新建nav.js文件。

   3. 在nav.js文件中复制以下内容。

      ```js
      module.exports = [
      	{
      		text: '懵逼指南', link: '/guide/'
      	},
      
      	{
      		text: '面试宝典',
      		items: [
      			{ text: '初级开发篇', link: '/baodian/zero/' },
      			{ text: '中高进阶篇', link: '/baodian/high/' },
      		]
      	},
      	
      	{
      		text: '工具箱',
      		items: [
      			{
      				text: '在线编辑',
      				items: [
      					{ text: '图片压缩', link: 'https://tinypng.com/' }
      				]
      			},
      			{
      				text: '在线服务',
      				items: [
      					{text: '阿里云', link: 'https://www.aliyun.com/'},
      					{text: '腾讯云', link: 'https://cloud.tencent.com/'},
      				]
      			},
      			{
      				text: '博客指南',
      				items: [
      					{text: '掘金', link: 'https://juejin.im/'},
      					{text: 'CSDN', link: 'https://blog.csdn.net/'},
      				]
      			},
      		]
      	},
      
      ]
      ```

   4. 解释说明：

      1. 比如下面代码，text是标题，link是地址。

      2. link有两种，既可以是本地的`/guide/`跳到某个目录下，也可以是外链`https://www.aliyun.com/`。link还可以不写，不写你就在博客界面上点不动，仅此而已。

         ```js
         text: '懵逼指南', link: '/guide/'
         ```

      3. 如果想搞个下拉菜单（菜单之中有菜单）就弄个items就可以了。items中还可以有items。

      4. `/guide/`后面的那个斜杠默认是找readme文件的。

## 04 侧边栏配置

1. 首先在博客界面点击导航栏的某个，才能出现侧边栏。

2. 像配置导航栏一样，

3. 找到并删除或注释掉下面代码：

   ```javascript
   sidebar: {'/guide/':[
               {
                   title:'新手指南',
                   collapsable: true,
                   children:[
                       '/guide/notes/one'
                   ]
               },
               {
                   title:'新手指南',
                   collapsable: true,
                   children:[
                       '/guide/notes/two'
                   ]
               }
           ]},
   ```

4. 找到并取消注释下面代码：

   ```javascript
   // sidebar: require("./sidebar.js"),
   ```

5. 在config.js文件旁新建文件sidebar.js。这个文件作为总管控侧边栏js文件。

6. 在js文件中写入下面代码：

   ```js
   //由于一个一个手动配不利于维护，直接管控
   module.exports={
   	'/guide/':require('../guide/sidebar'),//懵逼指南的侧边栏，第一个模块下面的侧边栏//require函数里可以省略.js文件后缀名
   
   	'/baodian/zero':require('../baodian/zero/sidebar'),//第2个模块下面的侧边栏
   	'/baodian/high':require('../baodian/high/sidebar'),
   }
   ```

7. 显然上面需要在上级目录（与.vuepress同级）中新建两个文件夹`guide baodian`。

8. 下面先完成guide里的配置。

9. 在guide文件夹里新建README.md文件，内容随便写。

10. 在guide文件夹里新建sidebar.js文件作为侧边栏具体配置文件。并写入如下内容：

    ```js
    module.exports=
    [
    	{
            title:'新手指南',
            collapsable: true,
            children:
            [
                '/guide/notes/one'
            ]
        },
    
        {
            title:'芝麻学院',
            collapsable: true,
            children:
            [
                '/guide/notes/two'
            ]
        }
    ]
    ```

11. 解释说明：

    1. 如下代码指向的其实是notes文件夹里的one.md。

       ```js
       '/guide/notes/one'
       ```

    2. 如下代码表示可以折叠。

       ```js
        collapsable: true,
       ```

12. 显然guide文件夹下还需要新建一个文件夹`notes`。

13. notes文件夹下需要建两个文件分别是：one.md和two.md。里面随便写上一些话。

14. 下面再完成baodian里的配置。

15. 在baodian文件夹里新建zero和high两个文件夹。

16. 在zero文件夹里建sidebar.js文件。并写入如下内容：

    ```js
    module.exports=
    [
        {
            title: '初级宝典',
            collapsable: true,//表示可以折叠
            children: [
                '/baodian/zero/notes/bd1',
            ]
        },
        // { 
        //     title: '知码学院',
        //     collapsable: true,
        //     children: [
        //         '/guide/notes/two',
        //     ]
        // }
    ]
    ```

17. 在zero文件夹里新建README.md文件并写入如下内容：

    ```
    zero下的readme
    ```

18. 在zero文件夹下新建note文件夹

19. 在note文件夹里新建bd1.md文件，并写入如下内容：

    ```js
    # one
    
    ## 222222222222222
    
    ### 33333333333333333
    ​```
    title: '关于我'
    date: 2020-11-9 22:38:39 时间，按时间显示的话，就是根据此时间
    # 永久拦截
    permalink: '/guide'  /点击的话就跳转到这个目录
    isTimeLine: true  //是否显示时间线
    sidebar: true  //是否侧边栏
    isShowComment: true  //是否能评论
    ​```
    ```

20. 在high文件夹下新建sidebar.js文件，并写入如下内容：

    ```js
    module.exports=
    [
        {
            title: '高级宝典',
            collapsable: true,//表示可以折叠
            children: [
                '/baodian/high/notes/bd2',
            ]
        },
        // {
        //     title: '知码学院',
        //     collapsable: true,
        //     children: [
        //         '/guide/notes/two',
        //     ]
        // }
    ]
    ```

21. 在high文件夹下新建README.md文件，内容随便写。

22. 在high文件夹下新建notes文件夹

23. 在notes文件夹下新建bd2.md文件，内容随便写。

24. 运行一下试试：

## 05 静态资源配置

vuepress默认图片目录是`/docs/.vuepress/public/`。

1. 在.vuepress文件夹下新建public文件夹。
2. 在public文件夹下新建img文件夹。
3. 在img文件夹下放入两张图片，名为`logo.jpg  ad.jpg`。
4. 图片路径在Readme.md文件（只是让你知道，不需改）。

如何在导航栏也放logo？

1. 在public文件夹下新建css文件夹。

2. 通过浏览器开发者模式查看logo要放入的div的类名。

3. 在css文件夹中新建style.css文件。并写入下面内容：

   ```css
   #app .navbar .home-link span::before{
       display: inline-block;
       content: '';
       width: 3rem;
       height: 2.4rem;
       background: url('../img/logo.jpg') no-repeat;
       background-size: 100% 100%;
       vertical-align: middle;
   }
   ```

4. 在config.js中找到下面的内容取消注释：

   ```js
   // ['link', { rel: 'stylesheet', href: '/css/style.css' }],
   ```

5. 拓展（老师没讲具体操作）：另一张图片ad.jpg是为了添加个小广告，js可以使广告变成动态的。但是没细讲，所以也不用操作。

6. 运行一下试试。

7. 在config.js中有这么一句代码，意思是标签页的标签图标地址：

   ```js
   	['link', { rel: 'icon', href: '/img/logo.favicon' }],
   ```

   

## 06 部署

1. 在docs/.vuepress/config.js中设置正确的base。

   1. 如果你打算发布到`https://<USERNAME>.github.io`，则可以省略这一步，因为base默认值为`"/"`。

   2. 如果打算发布到`https://<username>.github.io/<REPO>`

      (也就是说你的仓库在`https://github.com<USERNAME>/<REPO>`),

      则将base设置为`"/<REPO>/"。`

2. 新建仓库，命名为`zhyboys.github.io`，zhyboys是用户名

3. 在vuepress-blog文件夹里（与docs同级）新建deploy.sh文件，并写入下面内容：

   ```sh
   #!/usr/bin/env sh
   
   # 确保脚本抛出遇到的错误
   set -e
   
   # 生成静态文件 docs:build是在某文件配置的命令（名字是自己起的）
   npm run docs:build
   
   # 进入生成的文件夹
   cd dist
   
   # 如果是发布到自定义域名
   # echo 'www.example.com' > CNAME
   
   git init
   git add -A
   git commit -m 'deploy'
   
   # 如果发布到 https://<USERNAME>.github.io
   git push -f git@github.com:zhyboys/zhyboys.github.io.git master
   
   # 如果发布到 https://<USERNAME>.github.io/<REPO>
   # git push -f git@github.com:<USERNAME>/<REPO>.git master:gh-pages
   
   cd -
   ```

   注意要把

   ```
   git@github.com:zhyboys/zhyboys.github.io.git master
   ```

   中的用户名zhyboys修改为自己的。

4. 在package.json文件中加入一句话`"docs:build": "vuepress build docs"`，加入后的样子如下：

   ```javascript
     "scripts": {
       "test": "echo \"Error: no test specified\" && exit 1",
       "docs:build": "vuepress build docs"
     },
     "keywords": [],
   ```

   

5. 安装好git和小乌龟

6. 在vuepress-blog文件夹下右击，git bush here。

7. 工作区在哪就在那bush。

8. 输入命令`bash deploy.sh`

9. 搭建好的地址

10. > https://wwe.lanzous.com/iqQBNi8nnna

11. 需要用到的安装包：git node，小乌龟虽有，可以不用。链接：https://wwe.lanzous.com/iNL8Zi8nqwh

## 07 防忘记

新建分类

1. 新建分类需要在nav.js配置导航。
2. 新建分类（笔记文件夹）需要在siderbar.js配置侧边栏。
3. 新建分类的根目录需要新建siderbar.js分配题目。
4. 新建分类的根目录需要新建readme.md文件。

新建笔记

1. 新建笔记需要在新建分类的siderbar.js登记。

关于nav样式

1. 表示点击某个nav链接直接进入谋篇文章。

   ```json
   {text:"JavaScript",link:"/typora/00前端系列/02JavaScript/001概念"},
   ```

2. 表示点击某个nav直接进入文件夹下的README.md

   ```javascript
   {text: 'MySQL', link: '/typora/数据库MySQL/'},
   ```

关于siderbar样式

1. 没有分类标题，直接一竖列文章标题，不可折叠。

   ```js
     collapsable: false,//表示可以折叠
     children: [
         '/typora/数据库MySQL/01数据库操作',
        '/typora/数据库MySQL/02表的操作',
        '/typora/数据库MySQL/03数据的操作',
        '/typora/数据库MySQL/04Where条件',
        '/typora/数据库MySQL/05数据类型',
        '/typora/数据库MySQL/06SQL分类与字符集',
        '/typora/数据库MySQL/07列属性',
        '/typora/数据库MySQL/08数据完整性',
     ]
   
   ```

2. 有文章分类标题，可以折叠。

   ```js
   {
       title: '篇一',
       collapsable: true,//表示可以折叠
       children: [
       '/typora/数据库MySQL/01数据库操作',
       '/typora/数据库MySQL/02表的操作',
       '/typora/数据库MySQL/03数据的操作',
       '/typora/数据库MySQL/04Where条件',
   	]
   },
   {
      title: '篇二',
      collapsable: true,
      children: [
      '/typora/数据库MySQL/05数据类型',
      '/typora/数据库MySQL/06SQL分类与字符集',
      '/typora/数据库MySQL/07列属性',
      '/typora/数据库MySQL/08数据完整性',
      ]
   }
   ```

   
## 08 错误处理

1. 会有一个就是language MySQL not exist 我猜测并不是自己没有在sql代码中标记该语言，相反没有标记反倒应该不会报错，应该是vupress库中没有mysql语言。

2. 插入图片，当前图片路径必须带`./`，这点一定要注意，默认不带，需要修改。

3. 在开头使用下列的原因：这样写会导致只有侧边栏有题目，而正文不显示，可以添加序号，这样侧边栏显得有序。

   ```
   ---
   title: 02数据类型
   ---
   ```

4. 正文用#写标题侧边栏也会收录，但正文写一级标题用序号可能不太好看。

5. 不能写成序号后直接跟一句代码，否则编译出错，如下所示。

    ```js
    1. `数组类型 数组名[数组长度];`
    2. `数组类型 数组名[数组长度] = {1,2,3};`
    3. `数组类型 数组名[] = {1,2,3};`
    ```