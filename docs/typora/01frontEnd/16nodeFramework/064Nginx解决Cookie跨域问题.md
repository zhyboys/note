# 064 Nginx解决Cookie跨域问题

```js
/*
1.Nginx安装和使用
1.1安装
下载解压即可
http://nginx.org/en/download.html
1.2使用
修改配置文件
worker_processes 4; // CPU核数
location / {  // 请求根路径代理的地址
	proxy_pass http://192.168.0.107:3001;
}
location /api { // 请求/api代理的地址
	proxy_pass http://127.0.0.1:3000;
	proxy_set_header Host $host;
}
* */
```

配置nginx文件4：15
