(window.webpackJsonp=window.webpackJsonp||[]).push([[646],{1057:function(s,e,t){"use strict";t.r(e);var a=t(44),n=Object(a.a)({},(function(){var s=this,e=s.$createElement,t=s._self._c||e;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"_009-连接数据库报错解决"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_009-连接数据库报错解决"}},[s._v("#")]),s._v(" 009 连接数据库报错解决")]),s._v(" "),t("blockquote",[t("p",[s._v("标题：NODE连接MySQL报错：Error: ER_NOT_SUPPORTED_AUTH_MODE: Client does not support authentication .......")])]),s._v(" "),t("p",[t("strong",[s._v("报错提示：")])]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("Error: ER_NOT_SUPPORTED_AUTH_MODE: Client does not support authentication protocol request\ned by server; consider upgrading MySQL client\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("p",[s._v("**报错原因：**mysql8.0以上加密方式，Node还不支持。")]),s._v(" "),t("p",[t("strong",[s._v("解决方案")]),s._v("：")]),s._v(" "),t("p",[s._v("打开MySql命令行终端输入;【1234是我本地登录MySql的账号，root和host也是】")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("alter user 'root'@'localhost' identified with mysql_native_password by '1234';\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("flush privileges;\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[t("strong",[s._v("补充【补充内容看看即可】：")])]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("flush privileges 命令本质上的作用是将当前user和privilige表中的用户信息/权限设置从mysql库(MySQL数据库的内置库)中提取到内存里。经常用在改密码和授权超用户。\n\nALTER USER ‘root’@‘localhost’ IDENTIFIED BY ‘password’ PASSWORD EXPIRE NEVER; //修改mysql密码规则\n\nALTER USER ‘root’@‘localhost’ IDENTIFIED WITH mysql_native_password BY ‘password’; //更改新的密码，可以将密码设置为简单类型\n\nFLUSH PRIVILEGES;//刷新权限\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br")])])])}),[],!1,null,null,null);e.default=n.exports}}]);