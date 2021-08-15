# sql分类与字符集

## 01`SQL`分类

1. `DML` (Data Manipulation Language) 数据操纵语言，select,update,insert,delete.
2. `DDL` (Data Definition Language) 数据库定义语言,create,drop,alter.
3. `DCL ` (Data Control Language) 数据库控制语言，用来设置或更改用户或角色权限的语句。

## 02数据表中的文件介绍

1. 一个数据库对应一个文件夹。
2. 一个表对应一个或多个文件。
   1. 当引擎是innodb时，每创建一个数据表，数据库文件夹下会自动生成一个“表名.frm”.文件，此文件储存着表的结构。而表的数据存储在与数据库同级的文件夹（Data目录下）的一个名为“idbata1”的文件中。无论是哪个数据表都将数据存放在此文件中，直至文件非常大快满时，会自动新建“idbata2”文件存放数据。
   2. 当引擎是myisam时，每创建一个表，数据库文件夹下会多处三个文件，分别是“表名.frm”、“表名.MYD”、“表名.MYI”。后缀是frm的文件存放的是表的框架；后缀是MYD意思是MYData，存放的是数据；后缀是MYI意思是MYIndex，存放的是索引。
   3. 当引擎是memory时，每新建一个表，数据库就会多一个“表名.frm”文件，数据存放在内存中，如果重启Mysql则数据会全部消失，这个引擎的优点是速度快。

## 03字符集

表中的值插入中文会报错？因为如果客户端用的是gbk编码，服务器用编译utf8的方式接收，并用编译utf8的方式发送，肯定会报错。

怎样查看服务器是按什么字符集编译的？答：进入MySQL使用`show variables like 'character_set_%';`命令即可查看。默认情况下，会出现下面一大坨。

```mysql
+--------------------------+---------------------------------------------------------+
| Variable_name            | Value                                                   |
+--------------------------+---------------------------------------------------------+
| character_set_client     | utf8mb4                                                 |
| character_set_connection | utf8mb4                                                 |
| character_set_database   | utf8                                                    |
| character_set_filesystem | binary                                                  |
| character_set_results    | utf8mb4                                                 |
| character_set_server     | utf8mb4                                                 |
| character_set_system     | utf8                                                    |
| character_sets_dir       | C:\Program Files\MySQL\MySQL Server 8.0\share\charsets\ |
+--------------------------+---------------------------------------------------------+
8 rows in set, 1 warning (0.02 sec)
```

其中，第4行`character_set_client`（即服务器接收方式）是 `utf8`，第8行 `character_set_results` （即服务器发送方式）是 `utf8` ，如果你的客户端是gbk编码，客户端是不能改的，只能改服务器。就需要两条命令 `set character_set_client =gbk `和`set character_set_results =gbk `改这两处即可，其他不用管。

总结：客户端编码、`character_set_client`、 `character_set_results` 三者的值相同即可插入中文不报错不乱码。**仅需一句** `set names 字符编码`就可以轻松设定`character_set_client`、 `character_set_results`的值，取代上述繁琐的两条命令。

