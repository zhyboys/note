(window.webpackJsonp=window.webpackJsonp||[]).push([[57],{461:function(s,a,t){"use strict";t.r(a);var r=t(44),n=Object(r.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"堆栈和垃圾回收机制"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#堆栈和垃圾回收机制"}},[s._v("#")]),s._v(" 堆栈和垃圾回收机制")]),s._v(" "),t("h3",{attrs:{id:"栈内储存"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#栈内储存"}},[s._v("#")]),s._v(" 栈内储存")]),s._v(" "),t("div",{staticClass:"language-js line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" a"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" b"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("a"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\na"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//此时b=4；")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br")])]),t("h3",{attrs:{id:"堆栈储存"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#堆栈储存"}},[s._v("#")]),s._v(" 堆栈储存")]),s._v(" "),t("div",{staticClass:"language-js line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" obj"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    a"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    b"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" obj1"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("obj"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\nobj"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("a"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("20")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//此时obj1.a=20;")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br")])]),t("h3",{attrs:{id:"堆栈溢出"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#堆栈溢出"}},[s._v("#")]),s._v(" 堆栈溢出")]),s._v(" "),t("p",[s._v("当存储的数据达到某一极限是就会造成堆栈溢出")]),s._v(" "),t("h3",{attrs:{id:"内存泄漏"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#内存泄漏"}},[s._v("#")]),s._v(" 内存泄漏")]),s._v(" "),t("p",[s._v("当不断向堆中存储数据，而不进行清理，这就是内存泄漏。")]),s._v(" "),t("h3",{attrs:{id:"垃圾回收机制"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#垃圾回收机制"}},[s._v("#")]),s._v(" 垃圾回收机制")]),s._v(" "),t("h4",{attrs:{id:"自动清理"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#自动清理"}},[s._v("#")]),s._v(" 自动清理")]),s._v(" "),t("p",[s._v("垃圾回收机制就是将引用堆中的栈对象设置为null，并且将所有引用该地址的对象都设置为null。不会即时清除，垃圾回收车会根据内存使用情况在适当的时候清除堆中的1孤儿对象。")]),s._v(" "),t("blockquote",[t("p",[s._v("obj=null")])]),s._v(" "),t("h4",{attrs:{id:"手动清理"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#手动清理"}},[s._v("#")]),s._v(" 手动清理")])])}),[],!1,null,null,null);a.default=n.exports}}]);