function init(){
    console.log(123)
}//为防止页面未加载完找不到节点而报错
//延时启动
setTimeout('init()',500)