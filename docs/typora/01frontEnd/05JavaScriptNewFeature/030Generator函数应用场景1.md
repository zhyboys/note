# 30 Generator函数应用场景1

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>49-Generator函数应用场景</title>
</head>
<body>
<script>
    /*
    应用场景, 让函数返回多个值
    * */
    /*
    function calculate(a, b) {
        let sum = a + b;
        let sub = a - b;
        return [sum, sub];
    }
    */
    function* calculate(a, b) {
        yield a + b;
        yield a - b;
    }
    let it = calculate(10, 5);
    console.log(it.next().value);
    console.log(it.next().value);
</script>
</body>
</html>
```

