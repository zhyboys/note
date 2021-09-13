# 024 Sequelize注册登录

导入模型对象，模型对象.方法名即可操作数据库增删改查。

```js
/* Sequelize处理注册登录

 */
const User = require('../db/model/user')
async function getUser(username, password) {
    // username = escape(username)
    // password = escape(password)
    if (password){
        // let result = await User.findOne({
        let result = await User.findAll({
            where: {
                username: username,
                password: password
            }
        })
        return result
        // let sql = `select * from user where username = ${username} and password = ${password}`
        // let result = await exc(sql)
        // return result
    }else {
        let result = await User.findAll({
            where: {
                username: username
            }
        })
        return result
        // let sql = `select * from user where username = ${username}`
        // let result = await exc(sql)
        // return result
    }
}

async function createUser({username, password, sex}){
    // let sql = `insert into user (username, password, sex) values('${username}','${password}','${sex}')`
    // let result = await exc(sql)
    // return result
    let result = await User.create({
        username: username,
        password: password,
        sex: sex
    })
    return  result['dataValues']
}
module.exports = {
    getUser,
    createUser
}
```