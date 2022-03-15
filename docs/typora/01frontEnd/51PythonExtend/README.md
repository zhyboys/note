>  安装包

```
# 关于web自动化
pip install selenium
# 安装完后记下安装路径
# 下载谷歌驱动
# 将谷歌驱动放在selenium下
```

[下载响应版本的谷歌驱动](https://registry.npmmirror.com/binary.html?path=chromedriver/) 

```python
# 运行python代码
from selenium import webdriver
driver = webdriver.Chrome() # Chrome 浏览器
# 或者
from selenium import webdriver
chrome_driver=r"C:\\Users\\THINKPAD\\anaconda3\\Lib\site-packages\\selenium\webdriver\\chrome\\chromedriver.exe"
driver=webdriver.Chrome(executable_path=chrome_driver)
```

[常用方法文档](https://www.cnblogs.com/liangmei/p/14984871.html)

[常用方法举例](https://blog.csdn.net/zhangkaiyazky/article/details/102708667)

> Demo：打开百度搜索 少艾

```python
from selenium import webdriver
chrome_driver=r"C:\\Users\\THINKPAD\\anaconda3\\Lib\site-packages\\selenium\webdriver\\chrome\\chromedriver.exe"
driver=webdriver.Chrome(executable_path=chrome_driver)

wb = driver
wb.get("http://www.baidu.com")
idNme = wb.find_element_by_id("kw")
idNme.send_keys("少艾")
wb.find_element_by_id("su").click()
```

软件：按键精灵、UiBot

---

```
# 关于百度人脸识别
pip install opencv-python
pip install baidu_aip
```

> 本地人脸识别报错

```
在使用 Python 3 &OpenCV 3.0.0 进行人脸识别训练时发现异常： AttributeError: ‘module’ object has no attribute ‘LBPHFaceRecognizer_create’OpenCV 需要安装 opencv-contrib-python 模块，直接使用 pip 就可以进行安装，命令如下： 

pip install opencv-contrib-python
或者
pip --default-timeout=1000 install -U opencv-contrib-python

安装openCV的xml文件
https://wwa.lanzouy.com/b01da9tng
密码:2cdf
```

> 更快速的安装

```
【问题解决】module 'cv2.cv2' has no attribute 'face'
 出错的原因：
1、可能cv2相关包没有安装完；
2、可能缺少相关包。
针对第一种情况：
可以先卸载相关包，卸载语句如下：
pip uninstall opencv-contrib-python
pip uninstall opencv-python
针对第二种情况：
可以安装相关包：
pip install opencv-python
pip install opencv-contrib-python
但是如果直接用这两句的话下载速度太慢了，可以换一个语句（此时安装快得飞起！！！）：
pip install Pyinstaller -i http://pypi.douban.com/simple --trusted-host pypi.douban.com
（其中的Pyinstaller是你需要下载的库或包名，根据自己需求自行更改即可）
```

转载：[博客园](https://www.cnblogs.com/wydxry/p/12452371.html)

