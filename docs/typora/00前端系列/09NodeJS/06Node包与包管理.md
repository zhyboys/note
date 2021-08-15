# 06 Node包与包管理

## 00 常用

```
npm install cnpm -g –registry=https://registry.npm.taobao.org  安装CNPM
```





## 01 Node包

```
1.什么是包?
前面说过在编写代码的时候尽量遵守单一原则,
也就是一个函数尽量只做一件事情
例如: 读取数据函数/写入数据函数/生成随机数函数等等,
不要一个函数既读取数据又写入数据又生成随机数,
这样代码非常容易出错, 也非常难以维护

在模块化开发中也一样, 在一个模块(一个文件中)尽量只完成一个特定的功能
但是有些比较复杂的功能可能需要由多个模块组成,
例如: jQuery选择器相关的代码在A模块, CSS相关的代码在B模块, ...
      我们需要把这些模块组合在一起才是完成的jQuery
那么这个时候我们就需要一个东西来维护多个模块之间的关系
这个维护多个模块之间关系的东西就是"包"

简而言之: 一个模块是一个单独的文件, 一个包中可以有一个或多个模块

2.NodeJS包的管理
在NodeJS中为了方便开发人员发布、安装和管理包, NodeJS推出了一个包管理工具
NPM(Node Package Manager)
NPM不需要我们单独安装, 只要搭建好NodeJS环境就已经自动安装好了
NPM就相当于电脑上的"QQ管家软件助手", 通过NPM我们可以快速找到我们需要的包,
可以快速安装我们需要的包, 可以快速删除我们不想要的包等等
```

## 02 NPM使用

想安装包特定版本`npm install -g 包名@版本号`即可。

```
1.NPM包安装方式
- 全局安装  (一般用于安装全局使用的工具, 存储在全局node_modules中)
npm install -g 包名   (默认安装最新版本)
npm uninstall -g 包名
npm update -g 包名   (更新失败可以直接使用install)

- 本地安装 (一般用于安装当前项目使用的包, 存储在当前项目node_modules中)
npm install 包名
npm uninstall 包名
npm update 包名

2.初始化本地包
npm init   ->  初始化package.json文件
npm init -y -> 初始化package.json文件//-y就是yes的意思，省去了回撤确认的麻烦

npm install 包名 --save  //--save简写-s，目的是将下载的包记录在package.json，npm5之后可以省略save参数也会自动保存
npm install 包名 --save-dev //-dev是指定当前环境是开发环境

包描述文件 package.json, 定义了当前项目所需要的各种模块，以及项目的配置信息（比如名称、版本、许可证等元数据）。
npm install 命令根据这个配置文件，自动下载所需的模块，也就是配置项目所需的运行和开发环境
注意点:package.json文件中, 不能加入任何注释

- dependencies：生产环境包的依赖，一个关联数组，由包的名称和版本号组成
- devDependencies：开发环境包的依赖，一个关联数组，由包的名称和版本号组成

1.将项目拷贝给其它人, 或者发布的时候, 我们不会将node_modules也给别人, 因为太大
2.因为有的包可能只在开发阶段需要, 但是在上线阶段不需要, 所以需要分开指定

npm i               所有的包都会被安装//i就是install
npm i --production  只会安装dependencies中的包
npm i --development  只会安装devDependencies中的包
```

```
语义化版本：

"^3.1.1"  指定大版本3.xx

"~3.1.1"  指定中版本3.1.X

"3.1.1"   特定版本3.1.1
```

## 03 NRM与CNPM使用

```
1.什么是nrm?
由于npm默认回去国外下载资源, 所以对于国内开发者来说下载会比较慢
所以就有人写了一个nrm工具, 允许你将资源下载地址从国外切换到国内

npm install -g nrm   安装NRM
nrm --version 查看是否安装成功
npm ls    查看允许切换的资源地址
npm use taobao  将下载地址切换到淘宝

PS:淘宝资源地址和国外的地址内容完全同步,。淘宝镜像与官方同步频率目前为 10分钟 一次以保证尽量与官方服务同步

2.什么是cnpm?
由于npm默认回去国外下载资源, 所以对于国内开发者来说下载会比较慢
cnpm 就是将下载源从国外切换到国内下载, 只不过是将所有的指令从npm变为cnpm而已

npm install cnpm -g –registry=https://registry.npm.taobao.org  安装CNPM
cnpm -v  查看是否安装成功
使用方式同npm, 例如: npm install jquery 变成cnpm install jquery 即可
```

## 04 yarn使用

```
1.什么是YARN?
Yarn是由Facebook、Google、Exponent 和 Tilde 联合推出了一个新的 JS 包管理工具
Yarn 是为了弥补 npm5.0之前 的一些缺陷而出现的

注意点:
在npm5.0之前，yarn的优势特别明显.但是现在NPM已经更新到6.9.x甚至7.x了,
随着NPM的升级NPM优化甚至超越Yarn,所以个人还是建议使用NPM

2.NPM的缺陷:
2.1npm install的时候巨慢
   npm 是按照队列执行每个 package，也就是说必须要等到当前 package 安装完成之后，才能继续后面的安装
2.2同一个项目，npm install的时候无法保持一致性
  “5.0.3”表示安装指定的5.0.3版本，
  “~5.0.3”表示安装5.0.X中最新的版本，
  “^5.0.3”表示安装5.X.X中最新的版本
2.3... ...

3.YARN优点:
3.1速度快:
    - 并行安装: 而 Yarn 是同步执行所有任务，提高了性能
    - 离线模式：如果之前已经安装过一个软件包，用Yarn再次安装时之间从缓存中获取，就不用像npm那样再从网络下载了
3.2安装版本统一：
    - 为了防止拉取到不同的版本，Yarn 有一个锁定文件 (lock file) 记录了被确切安装上的模块的版本号
3.3... ...

4.YARN的安装
npm install -g yarn
yarn --version

5.YARN使用
5.1初始化包
npm init -y
yarn init -y

5.2安装包
npm install xxx --save
yarn add xxx
npm install xxx --save-dev
yarn add xxx --dev

5.3移除包
npm uninstall xxx
yarn remove xxx

5.4更新包
npm update xxx
yarn upgrade xxx --latest

5.5全局安装
npm install -g xxx
npm uninstall -g xxx
npm update -g xxx

yarn global add xxx
yarn global upgrade xxx
yarn global remove xxx
```

