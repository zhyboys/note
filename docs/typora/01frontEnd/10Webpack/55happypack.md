# 55 happypack

```html
<!--
1.什么是HappyPack?
默认情况下webpack打包项目是单线程的, 为了提升打包速度, 充分发挥多核 CPU 电脑的威力
我们可以通过HappyPack让webpack实现多线程打包

2.HappyPack使用
https://www.npmjs.com/package/happypack
npm install --save-dev happypack
{
    test: /\.js$/,
    exclude: /node_modules/,
    use: 'happypack/loader?id=js'
},
new HappyPack({
        id: 'js',
        use: [{
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
            options: {
                ... ...
            }
        }]
    })
-->
```

