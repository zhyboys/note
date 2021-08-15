(window.webpackJsonp=window.webpackJsonp||[]).push([[148],{558:function(s,a,t){"use strict";t.r(a);var n=t(44),r=Object(n.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"jdbc连接数据库"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#jdbc连接数据库"}},[s._v("#")]),s._v(" JDBC连接数据库")]),s._v(" "),t("h2",{attrs:{id:"_01-jdbc连接数据库步骤"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_01-jdbc连接数据库步骤"}},[s._v("#")]),s._v(" 01 JDBC连接数据库步骤")]),s._v(" "),t("p",[s._v("第一步：加载驱动；")]),s._v(" "),t("p",[s._v("第二步：连接数据库；")]),s._v(" "),t("p",[s._v("第三部：使用语句操作数据库；")]),s._v(" "),t("p",[s._v("第四部：关闭数据库连接，释放资源；")]),s._v(" "),t("h2",{attrs:{id:"_02-在项目里配置数据库驱动"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_02-在项目里配置数据库驱动"}},[s._v("#")]),s._v(" 02 在项目里配置数据库驱动")]),s._v(" "),t("p",[s._v("右击项目-> Build Path -> Configure Build Path -> Add Exteranl JARs")]),s._v(" "),t("h2",{attrs:{id:"_03-加载数据库驱动"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_03-加载数据库驱动"}},[s._v("#")]),s._v(" 03 加载数据库驱动")]),s._v(" "),t("p",[s._v("MySQL驱动名：com.mysql.jdbc.Driver")]),s._v(" "),t("p",[s._v("加载方式：Class.forName(驱动名);")]),s._v(" "),t("h2",{attrs:{id:"_04-连接及关闭数据库"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_04-连接及关闭数据库"}},[s._v("#")]),s._v(" 04 连接及关闭数据库")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("1，DriverManager 驱动管理类，主要负责获取一个数据库的连接；\nstatic Connection getConnection(String url, String user, String password) 试图建立到给定数据库 URL 的连\n接。\n2，MySQL 数据库的连接地址格式\njdbc:mysql://IP 地址:端口号/数据库名称\njdbc 协议：JDBC URL 中的协议总是 jdbc ；\n子协议：驱动程序名或数据库连接机制（这种机制可由一个或多个驱动程序支持）的名称，如 mysql；\n子名称：一种标识数据库的方法。必须遵循“//主机名：端口/子协议”的标准 URL 命名约定，如\n//localhost:3306/db_book\n3，Connection 接口 与特定数据库的连接（会话）。\nvoid close()\n立即释放此 Connection 对象的数据库和 JDBC 资源，而不是等待它们被自动释放。\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br")])])])}),[],!1,null,null,null);a.default=r.exports}}]);