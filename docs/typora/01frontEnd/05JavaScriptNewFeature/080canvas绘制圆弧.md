# 80 canvas绘制圆弧

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>16-Canvas绘制圆弧</title>
    <style>
        *{
            margin: 0;
            padding: 0;
        }
        canvas{
            display: block;
            margin: 0 auto;
            background: red;
        }
    </style>
</head>
<body>
<canvas width="500" height="400"></canvas>
<script>
    /*
    1.基本概念(请翻开初中数学课本)
    角度: 一个圆360度, 一个半圆是180度
    弧度: 一个圆2π, 一个半圆π

    2.角度转换弧度公式:
    ∵ 180角度 = π弧度
    ∴ 1角度 = π/180;
    ∴ 弧度 = 角度 * π/180;
       90角度 * π/180 = π/2

    3.弧度转换角度公式:
    ∵ π弧度 = 180角度
    ∴ 1弧度 = 180/π
    ∴ 角度 = 弧度 * 180/π
       π/2 * 180/π = 180/2 = 90度
    * */
    // 1.拿到canvas
    let oCanvas = document.querySelector("canvas");
    // 2.从canvas中拿到绘图工具
    let oCtx = oCanvas.getContext("2d");
    /*
    x, y: 确定圆心
    radius: 确定半径
    startAngle: 确定开始的弧度
    endAngle: 确定结束的弧度
    Boolean: 默认是false, false就是顺时针绘制, true就是逆时针绘制
    context.arc(x, y, radius, startAngle, endAngle, Boolean);
    * */
    // oCtx.arc(100, 100, 100, 0, Math.PI);
    // oCtx.arc(100, 100, 100, 0, Math.PI, true);
    oCtx.arc(100, 100, 100, 0, Math.PI * 2);
    oCtx.stroke();
</script>
</body>
</html>
```

