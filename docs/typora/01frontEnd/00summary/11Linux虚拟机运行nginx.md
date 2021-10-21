# 11 Linux虚拟机运行nginx

老大布置个小任务：win中双系统运行linux运行docker运行nginx。

[WSL2安装使用 - 简书 (jianshu.com)](https://www.jianshu.com/p/0aa542003b93)

[Win10 WSL2 安装Docker - 简书 (jianshu.com)](https://www.jianshu.com/p/a20c2d58eaac)

---

一些笔记： 

网址：
https://www.jianshu.com/p/0aa542003b93

dism.exe /online /enable-feature /featurename:Microsoft-Windows-Subsystem-Linux /all /norestart

dism.exe /online /enable-feature /featurename:VirtualMachinePlatform /all /norestart

下载
https://wslstorestorage.blob.core.windows.net/wslblob/wsl_update_x64.msi

wsl --set-default-version 2

启动root1 root1

vim /etc/apt/sources.list --------------------------sudo vim /etc/apt/sources.list

网址：安装Docker
https://www.jianshu.com/p/0aa542003b93
保存并退出:wq
强制退出:!q

sudo su进入管理员模式
docker ps查看是否启动Dorker

------------------------------------------------------------------
安装nginx并跑路
https://www.cnblogs.com/saneri/p/11799865.html