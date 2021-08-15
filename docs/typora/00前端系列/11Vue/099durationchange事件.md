# 99 durationchange事件

> 用durationchange取代canplay

**注意点**

在ios中系统不会自动加载歌曲，所以oncanplay不会自动执行。

在PC端和Android端，系统会自动加载歌曲，所以oncanplay会自动被执行。

**终极解决方案：**

如果监听IOS中Audio的歌曲是否已经准备好了，通过ondurationchange事件来监听。

ondurationchange什么时候执行：当歌曲加载完成之后执行，只为只有歌曲加载完成之后才能获取歌曲时长数据。