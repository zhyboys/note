# 100 axios发送多请求

同时发送多请求----详情见任务156歌手界面获取歌手数据，反正听的一脸懵。

**封装：**

```js
all: function (list) {
  return new Promise(function (resolve, reject) {
    axios.all(list)
      .then(axios.spread(function (...result) {
        resolve(result)
      }))
      .catch(function (err) {
        reject(err)
      })
  })
}
```



**导出**

```js
export const getLetterArtists = (letter) => {
  return new Promise(function (resolve, reject) {
    Network.all([
      // Network.get(`/artist/list?type=1&area=96&initial=b${letter}`)
      Network.get(`/artist/list?offset=0&area=7&limit=5&initial=b${letter}`),
      Network.get(`/artist/list?offset=0&area=96&limit=5&initial=b${letter}`),
      Network.get(`/artist/list?offset=0&area=8&limit=5&initial=b${letter}`),
      Network.get(`/artist/list?offset=0&area=16&limit=5&initial=b${letter}`),
      Network.get(`/artist/list?offset=0&area=0&limit=5&initial=b${letter}`)
    ])
      .then(function (data) {
        console.log(data)
      })
      .catch(function (err) {
        reject(err)
      })
  })
}
```



**使用**

```js
getLetterArtists()
  .then(function (data) {
    console.log(data)
  })
  .catch(function (err) {
    console.log(err)
  })
```

