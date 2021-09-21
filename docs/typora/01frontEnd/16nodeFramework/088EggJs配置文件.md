# 088 EggJs配置文件



## 1.多环境配置

基础功能-->配置-->多环境配置

```
config
|- config.default.js
|- config.prod.js
|- config.unittest.js
`- config.local.js
```

`config.default.js` 为默认的配置文件，所有环境都会加载这个配置文件，一般也会作为开发环境的默认配置文件。

当指定 env 时会同时加载默认配置和对应的配置(具名配置)文件，具名配置和默认配置将合并(使用[extend2](https://www.npmjs.com/package/extend2)深拷贝)成最终配置，具名配置项会覆盖默认配置文件的同名配置。如 `prod` 环境会加载 `config.prod.js` 和 `config.default.js` 文件，`config.prod.js` 会覆盖 `config.default.js` 的同名配置。





## 2.配置环境

配置环境有两种方式，详见文档，一种是新建一个env文件。

另一种是`EGG_SERVER_ENV=prod`



| NODE_ENV   | EGG_SERVER_ENV | 说明         |
| ---------- | -------------- | ------------ |
|            | local          | 本地开发环境 |
| test       | unittest       | 单元测试     |
| production | prod           | 生产环境     |



## 3.上线部署

上线是通过`egg-scripts`来启动的，所以需要安装该插件。

```json
"scripts": {
  "test": "echo \"Error: no test specified\" && exit 1",
  "dev": "cross-env EGG_SERVER_ENV=dev egg-bin dev",
  "prod": "cross-env EGG_SERVER_ENV=prod egg-scripts start --daemon",
  "stop": "egg-scripts stop"
},
```

