# 52 iScroll高级使用

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>03-iScroll高级使用</title>
    <style>
        *{
            margin: 0;
            padding: 0;
            touch-action: none;
        }
        div{
            width: 50%;
            height: 300px;
            border: 1px solid #000;
            box-sizing: border-box;
            overflow: hidden;
            position: relative;
        }
        dl>dt{
            line-height: 30px;
            text-align: center;
            border-bottom: 1px solid #000;
        }
        /*自定义滚动条样式：滚动条框*/
        .iScrollVerticalScrollbar{
            width: 30px;
            height: 100%;
            background: deepskyblue;
            position: absolute;
            top: 0;
            right: 0;
            z-index: 999;
        }
             /*自定义滚动条样式：滚动条按钮*/
        .iScrollIndicator{
            width: 100%;
            background: pink;
        }
    </style>
    <script src="js/iscroll.js"></script>
</head>
<body>
<div class="box">
    <dl>
        <dt>我是标题1</dt>
        <dt>我是标题2</dt>
        <dt>我是标题3</dt>
        <dt>我是标题4</dt>
        <dt>我是标题5</dt>
        <dt>我是标题6</dt>
        <dt>我是标题7</dt>
        <dt>我是标题8</dt>
        <dt>我是标题9</dt>
        <dt>我是标题10</dt>
        <dt>我是标题11</dt>
        <dt>我是标题12</dt>
        <dt>我是标题13</dt>
        <dt>我是标题14</dt>
        <dt>我是标题15</dt>
        <dt>我是标题16</dt>
        <dt>我是标题17</dt>
        <dt>我是标题18</dt>
        <dt>我是标题19</dt>
        <dt>我是标题20</dt>
        <dt>我是标题21</dt>
        <dt>我是标题22</dt>
        <dt>我是标题23</dt>
        <dt>我是标题24</dt>
        <dt>我是标题25</dt>
        <dt>我是标题26</dt>
        <dt>我是标题27</dt>
        <dt>我是标题28</dt>
        <dt>我是标题29</dt>
        <dt>我是标题30</dt>
    </dl>
</div>
<script>
    let myScroll = new IScroll('.box', {
        // 是否可以鼠标滚动
        mouseWheel: true,
        // 是否显示滚动条
        // scrollbars: true
        // 自定义滚动条样式，需先声明此句，并注释掉上一句，自定义写在css中
        scrollbars: 'custom'
    });
    myScroll.on("beforeScrollStart", function () {
        console.log("滚动之前");
    });
    myScroll.on("scrollStart", function () {
        console.log("开始滚动");
    });
    /*myScroll.on("scroll", function () {
        console.log("正在滚动");
    });*/
    myScroll.on("scrollEnd", function () {
        console.log("滚动结束");
    });
</script>
</body>
</html>
```