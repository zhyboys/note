# 28 Iterator应用场景

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>47-Iterator应用场景</title>
</head>
<body>
<script>
    // 1.解构赋值
    class MyArray{
        constructor(){
            for(let i = 0; i < arguments.length; i++){
                // this[0] = 1;
                // this[1] = 3;
                // this[2] = 5;
                this[i] = arguments[i];
            }
            this.length = arguments.length;
        }
        [Symbol.iterator](){
            let index = 0;
            let that = this;
            return {
                next(){
                    if(index < that.length){
                        return {value: that[index++], done: false}
                    }else{
                        return {value: that[index], done: true}
                    }
                }
            }
        }
    }
    // let arr = [1, 3];
    // let arr = new MyArray(1, 3);
    // let [x, y, z] = arr;
    // console.log(x, y, z);

    // 2.扩展运算符
    // let arr1 = [1, 3];
    // let arr2 = [2, 4];
    let arr1 = new MyArray(1, 3);
    let arr2 = new MyArray(2, 4);
    let arr3 = [...arr1, ...arr2];
    console.log(arr3);
</script>
</body>
</html>
```

