# 91 SVG全部方法

```html
<svg width="500" height="500">
    
  	<!--1. 画圆-->
    <circle cx="100" cy="100" r="50" fill="transparent" stroke="#000"></circle>
    <!--2. 画矩形-->
    <rect x="100" y="100" width="100" height="100" fill="blue" stroke="red" stroke-width="10"   rx="10" ry="10"></rect>
	<!--3. 画椭圆-->
    <ellipse cx="100" cy="100" rx="100" ry="50"></ellipse>
    <!--4. 画直线线段-->
    <line x1="100" y1="100" x2="300" y2="100" stroke="#000"></line>
    <!--4. 画折线-->
    <polyline points="100 100 300 100 300 300 100 100" stroke="#000" fill="none"></polyline>
    <!--5. 画多边形闭合图形-->
    <polygon points="100 100 300 100 300 300" stroke="#000" fill="none"></polygon>
    
    <!--
    fill: 修改填充颜色
    fill-opacity: 0~1 设置填充颜色的透明度
    stroke: 修改描边颜色
    stroke-width: 修改描边宽度
    stroke-opacity: 0~1 设置描边透明度
    stroke-linecap: butt/square/round  设置线段两端帽子
    stroke-dasharray: 设置虚线
    stroke-dashoffset: 设置虚线偏移位
    stroke-linejoin: miter/bevel/round 设置折线转角样式
    -->
    
    <!--6. 绘制路径-->
    <path d="M 100 100 L 300 100" stroke="red"></path>
    <!--
    1.什么是SVG路径
    SVG路径是一个比较牛X的东西, 可以绘制任意图形, 只不过比较复杂而已
    M = moveto  起点
    L = lineto  其它点
    H = horizontal lineto 和上一个点Y相等
    V = vertical lineto   和上一个点X相等
    Z = closepath  关闭当前路径
    -->
    
    <!--7. 绘制圆弧-->
    <path d="M 100 100 A 100 50 0 0 0 200 150" stroke="red" fill="none"></path>
    <!--
	A = elliptical Arc
    A(rx, ry, xr, laf, sf, x, y) 从当前位置绘制弧线到指定位置
    rx (radiux-x): 弧线X半径
    ry (radiux-y): 弧线Y半径
    xr (xAxis-rotation): 弧线所在椭圆旋转角度
    laf(large-arc-flag): 是否选择弧长较长的那一段
    sf (sweep-flag): 是否顺时针绘制
    x,y: 弧的终点位置
    -->
    
    <!--8. 贝塞尔曲线 略-->
    
    <!--9. 文本绘制-->
    <text x="250" y="250" style="font-size: 40px;" fill="none" stroke="red" dominant-baseline="text-before-edge">知播渔教育</text>
    <text x="250" y="250" style="font-size: 40px;" fill="none" stroke="red" dx="10 20 30">知播渔教育</text>
    <!--9. 多行文本绘制：略-->
    <!--9. 路径文本绘制：略-->
    <!--10. 超链接绘制：略-->
    
    <!--11. 图片绘制-->
    <image xlink:href="images/lnj.jpg" width="300" height="300"></image>
    <image xlink:href="images/lnj.jpg" x="100" y="100"></image>
    
    <!--12. 分组与复用-->
    <g id=""></g>
    <use></use>
    
    <!--隐藏，不显示-->
    <defs></defs>
</svg>
```

