(window.webpackJsonp=window.webpackJsonp||[]).push([[50],{456:function(t,_,v){"use strict";v.r(_);var a=v(44),s=Object(a.a)({},(function(){var t=this,_=t.$createElement,v=t._self._c||_;return v("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[v("h1",{attrs:{id:"_009-指针"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_009-指针"}},[t._v("#")]),t._v(" 009 指针")]),t._v(" "),v("h2",{attrs:{id:"_01-基础"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_01-基础"}},[t._v("#")]),t._v(" 01 基础")]),t._v(" "),v("ol",[v("li",[t._v("声明："),v("code",[t._v("int * p;")])]),t._v(" "),v("li",[t._v("定义："),v("code",[t._v("p = &a;")])]),t._v(" "),v("li",[t._v("使用："),v("code",[t._v("*p = 5;")]),t._v("，通过"),v("strong",[t._v("解引用")]),t._v("的方式来找到指针指向的内存。")]),t._v(" "),v("li",[t._v("占用的内存空间：32位操作系统占用4字节，64位操作系统占用8字节。与数据类型int float没有关系。")])]),t._v(" "),v("h2",{attrs:{id:"_02-空指针"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_02-空指针"}},[t._v("#")]),t._v(" 02 空指针")]),t._v(" "),v("p",[t._v("空指针：指针变量指向内存中编号为0的空间。")]),t._v(" "),v("p",[t._v("用法：初始换指针变量")]),t._v(" "),v("p",[t._v("注意：空指针指向的内存是 "),v("strong",[t._v("不可以访问")]),t._v("的（属系统空间），编译不报错，运行报错。")]),t._v(" "),v("p",[v("code",[t._v("int * p = NULL;")])]),t._v(" "),v("h2",{attrs:{id:"_03-野指针"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_03-野指针"}},[t._v("#")]),t._v(" 03 野指针")]),t._v(" "),v("p",[t._v("野指针：指针变量指向非法的内存空间。")]),t._v(" "),v("p",[v("code",[t._v("int * p = (int *) 0x1100;")]),t._v(" 随便搞内存赋值，也是编译不出错，但是运行报错。")]),t._v(" "),v("h2",{attrs:{id:"_04-const修饰指针"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_04-const修饰指针"}},[t._v("#")]),t._v(" 04 const修饰指针")]),t._v(" "),v("ol",[v("li",[t._v("const修饰指针，叫常量指针。"),v("code",[t._v("const int * p = &a;")])]),t._v(" "),v("li",[t._v("const修饰常量，叫指针常量。"),v("code",[t._v("int * const p = &a;")])]),t._v(" "),v("li",[t._v("const既修饰指针，又修饰常量。")])]),t._v(" "),v("p",[t._v("常量指针：常量的指针，指针指向可以改，指针指向的值不可以改。")]),t._v(" "),v("p",[t._v("指针常量：指针是常量，指针指向不可以修改，指针指向的值可以改。")])])}),[],!1,null,null,null);_.default=s.exports}}]);