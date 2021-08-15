# 65 canvas所有方法

```js

let oCanvas = document.querySelector("canvas");

//1.从canvas标签中获取绘图工具。
oCtx = oCanvas.getContext("2d");

//1. 修改线条宽度
oCtx.lineWidth = 50;
//2. 修改线条颜色
oCtx.strokeStyle = "blue";
//3. 修改线条两端样式 （butt默认）、round变圆、square加方块
oCtx.lineCap = "round";

//1.设置路径的起点
oCtx.moveTo(50,50);
//2. 设置路径的终点
oCtx.lineTo(200,50);
//3. 告诉canvas将这些点连接起来
oCtx.stroke();

//4. 重新开启一个路径
oCtx.beginPath();

//5. 闭合
oCtx.closePath();
//6. 转角样式 （miter默认尖角）、round圆角、bevel斜角
oCtx.lineJoin = "round";

//7. 填充闭合图形，默认黑色
oCtx.fill();
//8. 填充颜色
oCtx.fillStyle = "blue";

//9. 绘制虚线---接收数组，虚线长度
oCtx.setLineDash([5,10,20]);
//10. 获取虚线样式---获取数组
oCtx.getLineDash();
//11. 设置虚线偏移位
oCtx.lineDashOffset = 50;
//12. 获取画布尺寸，不带单位
oCtx.canvas.width;//建议，可获取也可设置
oCtx.canvas.htight;//建议
oCanvas.offsetWidth;
oCanvas.offsetHeight;
oCanvas.width;
oCanvas.height;

//13. 绘制矩形  x，y，宽，高
oCtx.rect(100,100,200,200);
oCtx.stroke();
//14. 绘制矩形2  区别是下面直接就画好了，也不用开启新路径，默认就开了
oCtx.strokeRect(100,100,200,200);
//15. 清空矩形区域
oCtx.clearRect(0,0,100,100);
//16. 绘制带填充色的矩形
oCtx.fillRect(0,0,100,100);

//17. 线性渐变
//17.1 得到线性渐变方案--x，y，x，y是两点表示线段的坐标
let linearGradient = oCtx.createLinearGradient(100,100,300,300);
//17.2 设置颜色--百分比0~1 颜色
linearGradient.addColorStop(0,"green");
linearGradient.addColorStop(1,"blue");
//18 径向渐变
//18.1 得到径向渐变解决方案
let radialGradient = oCtx.createRadialGradient();

//19 绘制圆形--x圆心，y圆心，开始弧度位置，结束弧度位置，false和true可选表顺逆时针绘制
oCtx.arc(x,y,radius,startAngle,endAngle [, anticlockwise])

//20. 绘制文字
//20.1 只有边框那种绘制
oCtx.strokeText(str,x,y);
//20.2 完美绘制
oCtx.fillText(str,x,y);
//21 文字样式
oCtx.font = "50px 微软雅黑";
//22 垂直方向对齐方式 bottom/top/middle
oCtx.textBaseLine = "top";
//23 水平方向上的对齐方式
oCtx.textAlign = "center";

//24. 绘制图片--图片，绘制在屏幕上的位置x，绘制在屏幕上的位置y
oCtx.drawImage(oImage,100,100)
//24.1 --图片，绘制在屏幕上的位置x，绘制在屏幕上的位置y，绘制图片的宽度，绘制图片的高度（就是拉伸和压缩）
oCtx.drawImage(oImage,100,100，100，100)
//24.2 ----图片，从图片的哪个位置开始绘制x，y，绘制宽度w，绘制高度y,
//         绘制在屏幕上的位置x，绘制在屏幕上的位置y，绘制图片的宽度，绘制图片的高度（就是拉伸和压缩）
oCtx.darwImage(oImage,50,50,100,100,100,100,100,100)

//25 形变之平移--x平移多少，y平移多少
oCtx.translate(100,0);
//26 形变之旋转
oCtx.rotate(Math.PI/6);
//27 缩放
oCtx.scale(1,1)

//28 交互
//28.1 老式的手撸位置
//28.2 判断的是当前路径--鼠标x坐标，鼠标y坐标
oCtx.isPointInPath(x,y);//true/false
```



加载图片知识补充

```js
let oImage = new Image();
/*为啥要把加载完成的监听事件写在设置路径src的前面？
	如果图片加载太快，还没执行到onload事件（还没开始注册加载完成的监听事件，图片就加载完成了），就不会执行函数了。
	为了防止以上事件发生。
*/
oImage.onload = function(){}
oImage.src = "";
```

