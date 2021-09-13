# 023 Sequelize替换MySQL

以字符串方式在node中写sql语句，写错不报错。

sequelize以对象方式操作数据库。



## 01 安装

```bash
npm i sequelize # This will install v6
npm i mysql2
```

安装mysql2，是因为sequelize支持多种数据库操作，需要操作什么数据库就需要再安装相应依赖。



## 02 上次使用

上次使用就是基本使用，由于没有学，特列出。

```js
/*
什么是数据库连接池？
默认情况下有一个人要使用数据库，那么就必须创建一个连接
默认情况下有一个人不用数据库了，为了不占用资源，那么就必须销毁一个连接
但是频繁的创建和销毁连接是非常消耗服务器性能的，所以为了提升服务器性能就有了连接池

数据库连接池是负责分配、管理和释放数据库连接，
它允许应用程序重复使用一个现有的数据库连接，而不是再重新建立一个
 */

// 1. 导入Sequelize
const Sequelize = require('sequelize')

// 2. 配置连接信息
/*
第一个参数：要操作的数据库名
第二个参数：数据库用户名
第三个参数：数据库密码
第四个参数：其他的配置信息
 */
const sequelize = new Sequelize('demo', 'root', 'root', {
    host: '127.0.0.1',
    port: 3306,
    dialect: 'mysql', // 要操作的数据库类型
    pool: {
        max: 5, // 最多有多少个连接
        min: 0, // 最少有多少个连接
        idle: 10000, // 当前连接多久没有操作就断开
        acquire: 10000 // 多久没有获取到连接就断开
    }
})
// 3. 测试配置是否正确
sequelize.authenticate()
.then(()=>{
    console.log('ok');
})
.catch(err=>{
    console.log(err);
})
```

定义模型

```js
const seq = require('../seq')

/*
第一个参数：用于指定表的名称
第二个参数：用于指定表中有哪些字段
第三个参数：用于配置表的一些额外信息
 */
/*
注意点：
1. sequelize在根据模型创建表的时候，会自动将我们指定的表的名称变成复数
2. sequelize在根据模型创建表的时候，会自动增加两个字段 createAt/updateAt
 */
let User = sequelize.define('user', {
    id:{
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    username: {
        type: Sequelize.STRING, // varchar(255)
        allowNull: false,
        unique: true
    },
    password: {
        type: Sequelize.TINYINT,
        defaultValue: 66
    },
    gender: {
        type: Sequelize.ENUM(['男', '女', '妖']),
        defaultValue: '妖'
    }
}, {
    freezeTableName: true, // 告诉sequelize不需要自动将表名变成复数
    // tableName: 'student', // 自定义表名
    timestamps: false, // 不需要自动创建 createAt/updateAt 这两个字段
    indexes: [ // 指定索引
        {
            name: 'idx_age', // 索引名称
            fields: ['age'], // 索引字段名称
        }
    ]
})
```



## 03 本次使用

在数据库demo存在的情况下运行sync.js可以创建出一张表user。（老师用的npm run dev ，但尝试多次在不引入这些新文件的情况下是无法执行这些代码的。未解之谜。。。）

`seq.js`

```js
/*
什么是数据库连接池？
默认情况下有一个人要使用数据库，那么就必须创建一个连接
默认情况下有一个人不用数据库了，为了不占用资源，那么就必须销毁一个连接
但是频繁的创建和销毁连接是非常消耗服务器性能的，所以为了提升服务器性能就有了连接池

数据库连接池是负责分配、管理和释放数据库连接，
它允许应用程序重复使用一个现有的数据库连接，而不是再重新建立一个
 */
const { MYSQL_CONFIG } = require('../config/db')
// 1. 导入Sequelize
const Sequelize = require('sequelize')

// 2. 配置连接信息
/*
第一个参数：要操作的数据库名
第二个参数：数据库用户名
第三个参数：数据库密码
第四个参数：其他的配置信息
 */
const seq = new Sequelize(MYSQL_CONFIG.databaseName,
    MYSQL_CONFIG.databaseUserName,
    MYSQL_CONFIG.databasePassword,
    MYSQL_CONFIG.conf)

module.exports = seq
```

`配置`

```
MYSQL_CONFIG = {
    databaseName: 'demo',
    databaseUserName: 'root',
    databasePassword : 'root',
    conf: {
        host: '127.0.0.1',
        port: 3306,
        dialect: 'mysql', // 要操作的数据库类型
        pool: {
            max: 5, // 最多有多少个连接
            min: 0, // 最少有多少个连接
            idle: 10000, // 当前连接多久没有操作就断开
            acquire: 10000 // 多久没有获取到连接就断开
        }
    }
}
```

`model/user.js`

```js
const seq = require('../seq')
const Sequelize = require('sequelize')
/*
第一个参数：用于指定表的名称
第二个参数：用于指定表中有哪些字段
第三个参数：用于配置表的一些额外信息
 */
/*
注意点：
1. sequelize在根据模型创建表的时候，会自动将我们指定的表的名称变成复数
2. sequelize在根据模型创建表的时候，会自动增加两个字段 createAt/updateAt
 */
let User = seq.define('user', {
    id:{
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    username: {
        type: Sequelize.STRING, // varchar(255)
        allowNull: false,
        unique: true
    },
    password: {
        type: Sequelize.STRING, // varchar(255)
        allowNull: false,
        unique: false
    },
    gender: {
        type: Sequelize.ENUM(['男', '女', '妖']),
        defaultValue: '妖'
    }
}, {
    freezeTableName: true, // 告诉sequelize不需要自动将表名变成复数
    // tableName: 'student', // 自定义表名
    timestamps: false, // 不需要自动创建 createAt/updateAt 这两个字段
})

module.exports = User
```

`sync.js`

```js
const seq = require('./seq')

// 0. 导入模型
require('./model/user')

// 3. 测试配置是否正确
seq.authenticate()
.then(()=>{
    console.log('ok');
})
.catch(err=>{
    console.log(err);
})

// 执行同步方法，创建表
seq.sync().then(()=>{
    console.log('sync ok');
    process.exit()
})
```