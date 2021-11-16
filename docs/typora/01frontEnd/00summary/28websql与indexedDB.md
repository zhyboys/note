# 28 websql与indexedDB

## 1 indexdDB

这个才是终极的，越来越支持的，只是觉得api比较多，先放一放。

```html
<!-- 
教程：https://www.kancloud.cn/sllyli/performance/1242198
教程：http://www.ruanyifeng.com/blog/2018/07/indexeddb.html
教程：https://www.tangshuang.net/3735.html
判断浏览器是否支持：window.indexedDB = window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB;
-->
```



## 2 websql

```html
<body>
    <button id="create_db">创建数据库</button>
    <button id="create_table">创建数据表</button>
    <button id="insert_data">插入数据</button>
    <button id="search_data">查询数据</button>

    <script>
        let oCreateDB = document.getElementById('create_db')
        let oCreateTable = document.getElementById('create_table')
        let oInsertData = document.getElementById('insert_data')
        let oSearchData = document.getElementById('search_data')
        let db = null // 数据库
        oCreateDB.onclick = function() {
            console.log('创建数据库');
            db = openDatabase('mydb', '1.0', 'Test DB', 2 * 1024 * 1024);
            console.log(db);
        }
        oCreateTable.onclick = function() {
            console.log('创建数据表');
            db.transaction(function (tx) {  
                tx.executeSql('CREATE TABLE IF NOT EXISTS LOGS (id unique, log)');
            });
            console.log(db);
        }
        oInsertData.onclick = function() {
            console.log('插入数据');
            db.transaction(function (tx) {
                tx.executeSql('CREATE TABLE IF NOT EXISTS LOGS (id unique, log)');
                tx.executeSql('INSERT INTO LOGS (id, log) VALUES (1, "菜鸟教程")');
                tx.executeSql('INSERT INTO LOGS (id, log) VALUES (2, "www.runoob.com")');
            });
            console.log(db);
        }
        
        oSearchData.onclick = function() {
            console.log('查询数据');
            db.transaction(function (tx) {
                tx.executeSql('SELECT * FROM LOGS', [], function (tx, results) {
                    var len = results.rows.length, i;
                   console.log('数据条数：' + len);
                    
                    for (i = 0; i < len; i++){
                        alert(results.rows.item(i).log );
                    }
                    
                }, null);
            });
            console.log(db);
        }
        

    </script>
</body>
```

