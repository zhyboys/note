(window.webpackJsonp=window.webpackJsonp||[]).push([[633],{1051:function(n,s,a){"use strict";a.r(s);var e=a(44),t=Object(e.a)({},(function(){var n=this,s=n.$createElement,a=n._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[a("h1",{attrs:{id:"_06-表增删改查"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_06-表增删改查"}},[n._v("#")]),n._v(" 06 表增删改查")]),n._v(" "),a("div",{staticClass:"language-html line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[n._v("\x3c!--\n注意点:\n在对数据库的表进行操作的时候(增删改查), 都必须先告诉MySQL我们要操作的是哪一个数据库\nuse 数据库名称;\n\n1.如何查看数据库中有哪些表?\nshow tables;\n\n2.如何查看指定表的结构\ndesc 表名;\n--\x3e")]),n._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[n._v("\x3c!--\n1.创建表\ncreate table 表名(\n  字段名称 数据类型,\n  字段名称 数据类型,\n  字段名称 数据类型,\n  字段名称 数据类型,\n);\n\n示例一:\ncreate table stu(\n    id int,\n    name text\n);\n注意点: 以上代码创建表, 如果表已经存在了, 那么就会报错\n\n示例二:\ncreate table if not exists person(\n    id int,\n    name text\n);\n注意点: 以上代码创建表, 没有就会创建一个新的, 有就会自动跳过\n--\x3e")]),n._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[n._v("\x3c!--\n1.删除表\ndrop table 表名;\n示例一:\ndrop table stu;\n注意点: 以上语句, 如果删除的表不存在, 那么就会报错\n\n示例二:\ndrop table if exists person;\n注意点: 以上语句, 如果需要删除的表存在, 那么就直接删除, 如果不存在就跳过\n--\x3e")]),n._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[n._v("\x3c!--\n1.修改表\n6.0修改表名\nrename table 原始名称 to 新的名称;\nrename table stu to person;\n\n6.1添加字段\nalter table 表名 add 新增字段名称 新增字段数据类型 [位置];\nalter table person add age int;\n注意点: 默认情况下会将新增的字段放到原有字段的后面\n\nalter table person add score float first;\n注意点: 我们可以通过指定first将新增的字段放到原有字段的前面\n\nalter table person add phone int after name;\n注意点: 我们可以通过after指定将新增的字段放到哪个字段的后面\n\n6.2删除字段\nalter table 表名 drop 字段名称;\nalter table person drop phone;\n\n6.3修改字段\n6.3.1修改字段的数据类型\nalter table 表名 modify 需要修改的字段名称 新的数据类型\nalter table person modify score double;\n\n6.3.2修改字段的名称和数据类型\nalter table 表名 change 原始字段名称 新的字段名称 新的数据类型;\nalter table person change age addr text;\n--\x3e")]),n._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[n._v("\x3c!--\n1.MySQL存储引擎\n- MySQL中的存储引擎就好比我们现实生活中的银行, 不同的银行提供的安全级别、服务水平、存储功能不一样\n  和现实生活中一样在MySQL也有各种各样不同的银行, 这些银行我们称之为存储引擎\n  和现实生活中一样MySQL中不同的存储引擎提供的安全级别、服务水平、存储功能等也不一样\n\n- MySQL中有三种存储引擎, 分别是:\n    + MyISAM: 安全性低, 但不支持事务和外键, 适合频繁插入和查询的应用\n    + InnoDB(默认): 安全性高, 支持事务和外键, 适合对安全性, 数据完整性要求较高的应用\n    + Memory: 访问速度极快, 但不会永久存储数据, 适合对读写速度要求较高的应用\ncreate table stu(\n    id int,\n    name text\n)engine=引擎名称;\n\n2.不同引擎本质\n- 前面我们说过数据库的本质就是文件, 所以我们可以先观察一下\n- 通过我们的观察, 我们发现只要创建一个数据库就会自动创建一个文件夹\n- 通过我们的观察, 我们发现只要创建一张表就会在指定的数据库文件夹中创建一个文件\n- 创建表的时候自动创建的这个文件就保存了这张表的结构\n\ncreate table stu(\n    id int,\n    name varchar(20)\n)engine=Memory;\n\nInnoDB:\n    - 如果表的存储引擎是InnoDB, 那么只要创建表就会自动创建一个文件, 这个文件就保存了这张表的结构\n    - 如果往InnoDB的表中存储数据, 那么数据会被存储到ibdata1的文件中, 如果存储的数据比较多, 那么系统会自动再创建ibdata2, ibdata3, ...文件\n\nMyISAM:\n    - 如果表的存储引擎是MyISAM, 那么只要创建表就会自动创建三个文件\n        + .sdi这个文件就保存了这张表的结构\n        + .MYD这个文件就保存了这张表中存储的数据\n        + .MYI这个文件就保存了这张表中的索引\n\nMemory:\n    - 如果表的存储引擎是Memory, 那么只要创建表就会自动创建一个文件, 这个文件就保存了这张表的结构\n    - 注意点: 如果表的存储引擎是Memory, 那么就不会像InnoDB/MyISAM将数据保存到文件中了, 而是直接保存到内存中\n\n--\x3e")]),n._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[n._v("\x3c!--\nalter table 表名 engine=引擎名称;\nalter table stu engine=MyISAM;\n--\x3e")]),n._v("\n")])]),n._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[n._v("1")]),a("br"),a("span",{staticClass:"line-number"},[n._v("2")]),a("br"),a("span",{staticClass:"line-number"},[n._v("3")]),a("br"),a("span",{staticClass:"line-number"},[n._v("4")]),a("br"),a("span",{staticClass:"line-number"},[n._v("5")]),a("br"),a("span",{staticClass:"line-number"},[n._v("6")]),a("br"),a("span",{staticClass:"line-number"},[n._v("7")]),a("br"),a("span",{staticClass:"line-number"},[n._v("8")]),a("br"),a("span",{staticClass:"line-number"},[n._v("9")]),a("br"),a("span",{staticClass:"line-number"},[n._v("10")]),a("br"),a("span",{staticClass:"line-number"},[n._v("11")]),a("br"),a("span",{staticClass:"line-number"},[n._v("12")]),a("br"),a("span",{staticClass:"line-number"},[n._v("13")]),a("br"),a("span",{staticClass:"line-number"},[n._v("14")]),a("br"),a("span",{staticClass:"line-number"},[n._v("15")]),a("br"),a("span",{staticClass:"line-number"},[n._v("16")]),a("br"),a("span",{staticClass:"line-number"},[n._v("17")]),a("br"),a("span",{staticClass:"line-number"},[n._v("18")]),a("br"),a("span",{staticClass:"line-number"},[n._v("19")]),a("br"),a("span",{staticClass:"line-number"},[n._v("20")]),a("br"),a("span",{staticClass:"line-number"},[n._v("21")]),a("br"),a("span",{staticClass:"line-number"},[n._v("22")]),a("br"),a("span",{staticClass:"line-number"},[n._v("23")]),a("br"),a("span",{staticClass:"line-number"},[n._v("24")]),a("br"),a("span",{staticClass:"line-number"},[n._v("25")]),a("br"),a("span",{staticClass:"line-number"},[n._v("26")]),a("br"),a("span",{staticClass:"line-number"},[n._v("27")]),a("br"),a("span",{staticClass:"line-number"},[n._v("28")]),a("br"),a("span",{staticClass:"line-number"},[n._v("29")]),a("br"),a("span",{staticClass:"line-number"},[n._v("30")]),a("br"),a("span",{staticClass:"line-number"},[n._v("31")]),a("br"),a("span",{staticClass:"line-number"},[n._v("32")]),a("br"),a("span",{staticClass:"line-number"},[n._v("33")]),a("br"),a("span",{staticClass:"line-number"},[n._v("34")]),a("br"),a("span",{staticClass:"line-number"},[n._v("35")]),a("br"),a("span",{staticClass:"line-number"},[n._v("36")]),a("br"),a("span",{staticClass:"line-number"},[n._v("37")]),a("br"),a("span",{staticClass:"line-number"},[n._v("38")]),a("br"),a("span",{staticClass:"line-number"},[n._v("39")]),a("br"),a("span",{staticClass:"line-number"},[n._v("40")]),a("br"),a("span",{staticClass:"line-number"},[n._v("41")]),a("br"),a("span",{staticClass:"line-number"},[n._v("42")]),a("br"),a("span",{staticClass:"line-number"},[n._v("43")]),a("br"),a("span",{staticClass:"line-number"},[n._v("44")]),a("br"),a("span",{staticClass:"line-number"},[n._v("45")]),a("br"),a("span",{staticClass:"line-number"},[n._v("46")]),a("br"),a("span",{staticClass:"line-number"},[n._v("47")]),a("br"),a("span",{staticClass:"line-number"},[n._v("48")]),a("br"),a("span",{staticClass:"line-number"},[n._v("49")]),a("br"),a("span",{staticClass:"line-number"},[n._v("50")]),a("br"),a("span",{staticClass:"line-number"},[n._v("51")]),a("br"),a("span",{staticClass:"line-number"},[n._v("52")]),a("br"),a("span",{staticClass:"line-number"},[n._v("53")]),a("br"),a("span",{staticClass:"line-number"},[n._v("54")]),a("br"),a("span",{staticClass:"line-number"},[n._v("55")]),a("br"),a("span",{staticClass:"line-number"},[n._v("56")]),a("br"),a("span",{staticClass:"line-number"},[n._v("57")]),a("br"),a("span",{staticClass:"line-number"},[n._v("58")]),a("br"),a("span",{staticClass:"line-number"},[n._v("59")]),a("br"),a("span",{staticClass:"line-number"},[n._v("60")]),a("br"),a("span",{staticClass:"line-number"},[n._v("61")]),a("br"),a("span",{staticClass:"line-number"},[n._v("62")]),a("br"),a("span",{staticClass:"line-number"},[n._v("63")]),a("br"),a("span",{staticClass:"line-number"},[n._v("64")]),a("br"),a("span",{staticClass:"line-number"},[n._v("65")]),a("br"),a("span",{staticClass:"line-number"},[n._v("66")]),a("br"),a("span",{staticClass:"line-number"},[n._v("67")]),a("br"),a("span",{staticClass:"line-number"},[n._v("68")]),a("br"),a("span",{staticClass:"line-number"},[n._v("69")]),a("br"),a("span",{staticClass:"line-number"},[n._v("70")]),a("br"),a("span",{staticClass:"line-number"},[n._v("71")]),a("br"),a("span",{staticClass:"line-number"},[n._v("72")]),a("br"),a("span",{staticClass:"line-number"},[n._v("73")]),a("br"),a("span",{staticClass:"line-number"},[n._v("74")]),a("br"),a("span",{staticClass:"line-number"},[n._v("75")]),a("br"),a("span",{staticClass:"line-number"},[n._v("76")]),a("br"),a("span",{staticClass:"line-number"},[n._v("77")]),a("br"),a("span",{staticClass:"line-number"},[n._v("78")]),a("br"),a("span",{staticClass:"line-number"},[n._v("79")]),a("br"),a("span",{staticClass:"line-number"},[n._v("80")]),a("br"),a("span",{staticClass:"line-number"},[n._v("81")]),a("br"),a("span",{staticClass:"line-number"},[n._v("82")]),a("br"),a("span",{staticClass:"line-number"},[n._v("83")]),a("br"),a("span",{staticClass:"line-number"},[n._v("84")]),a("br"),a("span",{staticClass:"line-number"},[n._v("85")]),a("br"),a("span",{staticClass:"line-number"},[n._v("86")]),a("br"),a("span",{staticClass:"line-number"},[n._v("87")]),a("br"),a("span",{staticClass:"line-number"},[n._v("88")]),a("br"),a("span",{staticClass:"line-number"},[n._v("89")]),a("br"),a("span",{staticClass:"line-number"},[n._v("90")]),a("br"),a("span",{staticClass:"line-number"},[n._v("91")]),a("br"),a("span",{staticClass:"line-number"},[n._v("92")]),a("br"),a("span",{staticClass:"line-number"},[n._v("93")]),a("br"),a("span",{staticClass:"line-number"},[n._v("94")]),a("br"),a("span",{staticClass:"line-number"},[n._v("95")]),a("br"),a("span",{staticClass:"line-number"},[n._v("96")]),a("br"),a("span",{staticClass:"line-number"},[n._v("97")]),a("br"),a("span",{staticClass:"line-number"},[n._v("98")]),a("br"),a("span",{staticClass:"line-number"},[n._v("99")]),a("br"),a("span",{staticClass:"line-number"},[n._v("100")]),a("br"),a("span",{staticClass:"line-number"},[n._v("101")]),a("br"),a("span",{staticClass:"line-number"},[n._v("102")]),a("br"),a("span",{staticClass:"line-number"},[n._v("103")]),a("br"),a("span",{staticClass:"line-number"},[n._v("104")]),a("br"),a("span",{staticClass:"line-number"},[n._v("105")]),a("br"),a("span",{staticClass:"line-number"},[n._v("106")]),a("br"),a("span",{staticClass:"line-number"},[n._v("107")]),a("br"),a("span",{staticClass:"line-number"},[n._v("108")]),a("br"),a("span",{staticClass:"line-number"},[n._v("109")]),a("br"),a("span",{staticClass:"line-number"},[n._v("110")]),a("br"),a("span",{staticClass:"line-number"},[n._v("111")]),a("br"),a("span",{staticClass:"line-number"},[n._v("112")]),a("br"),a("span",{staticClass:"line-number"},[n._v("113")]),a("br"),a("span",{staticClass:"line-number"},[n._v("114")]),a("br"),a("span",{staticClass:"line-number"},[n._v("115")]),a("br"),a("span",{staticClass:"line-number"},[n._v("116")]),a("br"),a("span",{staticClass:"line-number"},[n._v("117")]),a("br"),a("span",{staticClass:"line-number"},[n._v("118")]),a("br"),a("span",{staticClass:"line-number"},[n._v("119")]),a("br"),a("span",{staticClass:"line-number"},[n._v("120")]),a("br")])])])}),[],!1,null,null,null);s.default=t.exports}}]);