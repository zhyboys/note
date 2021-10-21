# 12 git办公常用命令



```bash
基本用法
git add .
git commit -m '新增用户页面'
git pull origin master （从远程pull）
git push origin zhao （push到远程，指向建立好可以直接git push）
git merge master（从本地merge）
git merge origin/dev猜测更稳（从远程merge）

git branch //查看当前使用的分支，标有*
git branch -a // 查看所有分支
git branch -D 分支名 // 删除本地分支
git push origin :分支名 // 删除本地分支后删除远程分支
git branch -vv // 分支关系
git checkout -b zhao //新建分支
git checkout 分支名    //切换分支


（1）新建分支
git branch xxx (xxx填写你的分支名称

----------------
git push --set-upstream origin zhao
```

