# 50 时间Date

```javascript
// 1.获取当前时间
// let date = new Date();
// console.log(date);
// 2.获取当前时间距离1970年1月1日（世界标准时间）起的毫秒
// console.log(Date.now());
// let date = new Date();
// console.log(date.valueOf());

// 3.创建指定时间
// let date1 = new Date("2019-11-11 09:08:07");
// console.log(date1);
// 注意点: 在创建指定时间的时候, 如果月份是单独传入的, 那么会多一个月
// let date2 = new Date(2019, 10, 11, 9, 8, 7);
// console.log(date2);

// 4.获取指定时间年月日时分秒
// let date = new Date();
// console.log(date);
// console.log(date.getFullYear());
// 注意点; 通过getMonth方法获取到的月份会少一个月
// console.log(date.getMonth() + 1);
// console.log(date.getDate());
// console.log(date.getHours());
// console.log(date.getMinutes());
// console.log(date.getSeconds());

// 5.时间格式化
let date = new Date();
let res = formartDate(date);
console.log(res);
// console.log(date);
// 2019-4-19 18:17:06
function formartDate(date) {
    return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
}
```



时间计算



```javascript
// 1000毫秒 = 1秒   60秒 = 1分钟  60分钟 = 1小时  24小时 = 1天
// 以下两个时间相差值 10天1小时29分40秒
let curDate = new Date("2020-4-19 22:30:20");
let remDate = new Date("2020-4-30 00:00:00");
// 1.得到两个时间之间的差值(毫秒)
let differTime = remDate - curDate;
// let differTime = remDate.valueOf() - curDate.valueOf();
// 2.得到两个时间之间的差值(秒)
let differSecond = differTime / 1000;
// 3.利用相差的总秒数 / 每一天的秒数 = 相差的天数
let day = Math.floor(differSecond / (60 * 60 * 24));
console.log(day);
// 4.利用相差的总秒数 / 小时 % 24;
let hour = Math.floor(differSecond / (60 * 60) % 24);
console.log(hour);
// 5.利用相差的总秒数 / 分钟 % 60;
let minute = Math.floor(differSecond / 60 % 60);
console.log(minute);
// 6.利用相差的总秒数 % 秒数
let second = differSecond % 60;
console.log(second);
```