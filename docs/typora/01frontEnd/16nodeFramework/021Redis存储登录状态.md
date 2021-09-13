# 021 Redis存储登录状态

1**获取cookie里的userid，没有就创建，~~用userid作为key保存在容器中分配一个空对象（之前有对象的话就不分配），将这个对象赋值地址给自定义req.session。~~再判断是否有req.session, 没有就使用自定义req.session作为空对象容器，判断redis中是否有userId数据，有就赋值给req.session, 没有就是空对象赋值给req.session**

```js
/**
 * 处理cookie和session
 * @param req
 * @param res
 */
const initCookieSession = async (req, res) => {
    // 1. 处理cookie(目的是获取userid)
    req.cookie = {}
    if (req.headers.cookie){
        req.headers.cookie.split(';').forEach(item => {
            let keyvalue = item.split('=')
            req.cookie[keyvalue[0]] = keyvalue[1]
        })
    }
    // 2. 获取用户唯一标识（没有就及进行设置）
    req.userId = req.cookie.userId
    if (!req.userId){
        req.userId = `${Date.now()}_${Math.random()}_it666`
        // 给当前用户分配容器
        // SESSION_CONTAINER[req.userId] = {}
        req.session = {}
        res.setHeader('Set-Cookie', `userId=${req.userId};path=/;httpOnly;expires=${getCookieExpires()}`)
    }
    // if (!SESSION_CONTAINER[req.userId]){
    //     // 给当前用户分配容器
    //     SESSION_CONTAINER[req.userId] = {}
    // }
    if (!req.session){
        req.session = await redisGet(req.userId) || {}
    }
    // req.session = SESSION_CONTAINER[req.userId]
}
```

2**没有req.session为空对象时一定未登录，代码向下执行，再进入到登录路由判断时向redis中写入userid的信息。**

```
let result = await loginCheck(req.body)
if (result.code === 200){
    req.session.username = result.data.username
    req.session.password = result.data.password
    req.session.sex = result.data.sex
    // 同步到Redis中
    redisSet(req.userId, req.session)
}
```

PS：觉得第一步的逻辑有点问题，如果第一次给session赋值空对象，并且已经登录了，那么就再也没有机会赋值有值的对象给session了。

