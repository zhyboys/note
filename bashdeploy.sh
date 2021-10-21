#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
npm run docs:build
# 其实docs:build就是下面的指令，只不过被封装在了配置文件，config.js
# vuepress build docs

# 进入生成的文件夹
# cd docs/.vuepress/dist
# 也有可能是下面的文件夹
cd dist


# 如果是发布到自定义域名
# echo 'www.example.com' > CNAME

# 下面三条意思是
# 初始化（创建.git文件夹，一个工作站仅需操作一次，以后免操作）
# 添加到本地暂缓区
# 提交代码到本地master
git init
git add -A
git commit -m 'deploy'

# 下面其实就是SSH仓库地址，码云与GitHub不同。
# 如果发布到 https://<USERNAME>.github.io
git push -f git@github.com:zhyboys/zhyboys.github.io.git master
git push -f git@gitee.com:zhyboy/zhyboy.git master
# git pull origin master
# git push -u origin master

# 如果发布到 https://<USERNAME>.github.io/<REPO>
# git push -f git@github.com:<USERNAME>/<REPO>.git master:gh-pages

cd -

# vuepress dev docs
# bash deploy.sh
# ssh-keygen -t rsa 秘钥生成代码（在git黑窗口项目下直接执行）


# -------------------
# 进入blog目录（就是该目录）
# 右击git bush here 打开git终端
# 输入bash deploy.sh就自动上传代码了
# 码云：有时候发现上传后无变化，可能是需要更新码云上的gitee pages服务
# GitHub：config.js有句话需要配置下base
# 如果想要运行测试输入vuepress dev docs
# ----------------------