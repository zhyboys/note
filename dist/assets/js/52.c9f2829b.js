(window.webpackJsonp=window.webpackJsonp||[]).push([[52],{465:function(n,s,a){"use strict";a.r(s);var t=a(44),e=Object(t.a)({},(function(){var n=this,s=n.$createElement,a=n._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[a("h1",{attrs:{id:"_011-核心编程"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_011-核心编程"}},[n._v("#")]),n._v(" 011 核心编程")]),n._v(" "),a("p",[n._v("理解四区")]),n._v(" "),a("p",[n._v("new创建"),a("strong",[n._v("堆区")]),n._v("变量")]),n._v(" "),a("h2",{attrs:{id:"_01-内存分区模型"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_01-内存分区模型"}},[n._v("#")]),n._v(" 01 内存分区模型")]),n._v(" "),a("p",[n._v("C++程序在执行时，将内存大方向分为4个区域")]),n._v(" "),a("ul",[a("li",[n._v("代码区：存放函数体的二进制代码，由操作系统进行管理")]),n._v(" "),a("li",[n._v("全局区：存放全局变量和静态变量以及常量（但不包括局部的const修饰的常量） 。")]),n._v(" "),a("li",[n._v("栈区：由编译器自动分配释放，存放函数的参数值，局部变量等")]),n._v(" "),a("li",[n._v("堆区：由程序员分配和释放，若程序员不释放，程序结束时由操作系统释放。")])]),n._v(" "),a("blockquote",[a("p",[n._v("栈区注意事项：不要返回局部变量的地址。示例如下：")])]),n._v(" "),a("div",{staticClass:"language-c++ line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[n._v('#include <iostream>\nusing namespace std;\n\nint * fun()\n{\n\tint a = 10;\n\treturn &a;\n}\n\nint main()\n{\n\tint * p = fun(); // fun的内容由于放在栈区，所以执行完全部自动释放\n\tcout << *p << endl; // 10    第一次能够打印正确的数字，是因为编译器做了保留\n\tcout << *p << endl; // 123464 第二次就不能正确打印了\n\tsystem("pause");\n\treturn 0;\n}\n')])]),n._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[n._v("1")]),a("br"),a("span",{staticClass:"line-number"},[n._v("2")]),a("br"),a("span",{staticClass:"line-number"},[n._v("3")]),a("br"),a("span",{staticClass:"line-number"},[n._v("4")]),a("br"),a("span",{staticClass:"line-number"},[n._v("5")]),a("br"),a("span",{staticClass:"line-number"},[n._v("6")]),a("br"),a("span",{staticClass:"line-number"},[n._v("7")]),a("br"),a("span",{staticClass:"line-number"},[n._v("8")]),a("br"),a("span",{staticClass:"line-number"},[n._v("9")]),a("br"),a("span",{staticClass:"line-number"},[n._v("10")]),a("br"),a("span",{staticClass:"line-number"},[n._v("11")]),a("br"),a("span",{staticClass:"line-number"},[n._v("12")]),a("br"),a("span",{staticClass:"line-number"},[n._v("13")]),a("br"),a("span",{staticClass:"line-number"},[n._v("14")]),a("br"),a("span",{staticClass:"line-number"},[n._v("15")]),a("br"),a("span",{staticClass:"line-number"},[n._v("16")]),a("br"),a("span",{staticClass:"line-number"},[n._v("17")]),a("br")])]),a("blockquote",[a("p",[n._v("如果真想返回局部变量，就使用new关键字，这样创建的变量就不是保存在栈区了，而是保存在堆区。")])]),n._v(" "),a("div",{staticClass:"language-c++ line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[n._v('#include <iostream>\n#include "hello.h"\nusing namespace std;\n\n\nint * fun()\n{\n\tint * a = new int(3); // 在堆区保存变量3，返回地址。但指针存在于栈区。\n\treturn a;\n}\n\nint main()\n{\n\tint * p = fun();\n\tcout << *p << endl; // 3  第一次能够打印正确的数字\n\tcout << *p << endl; // 3  第二次能够打印正确的数字\n\tsystem("pause");\n\treturn 0;\n}\n')])]),n._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[n._v("1")]),a("br"),a("span",{staticClass:"line-number"},[n._v("2")]),a("br"),a("span",{staticClass:"line-number"},[n._v("3")]),a("br"),a("span",{staticClass:"line-number"},[n._v("4")]),a("br"),a("span",{staticClass:"line-number"},[n._v("5")]),a("br"),a("span",{staticClass:"line-number"},[n._v("6")]),a("br"),a("span",{staticClass:"line-number"},[n._v("7")]),a("br"),a("span",{staticClass:"line-number"},[n._v("8")]),a("br"),a("span",{staticClass:"line-number"},[n._v("9")]),a("br"),a("span",{staticClass:"line-number"},[n._v("10")]),a("br"),a("span",{staticClass:"line-number"},[n._v("11")]),a("br"),a("span",{staticClass:"line-number"},[n._v("12")]),a("br"),a("span",{staticClass:"line-number"},[n._v("13")]),a("br"),a("span",{staticClass:"line-number"},[n._v("14")]),a("br"),a("span",{staticClass:"line-number"},[n._v("15")]),a("br"),a("span",{staticClass:"line-number"},[n._v("16")]),a("br"),a("span",{staticClass:"line-number"},[n._v("17")]),a("br"),a("span",{staticClass:"line-number"},[n._v("18")]),a("br"),a("span",{staticClass:"line-number"},[n._v("19")]),a("br")])])])}),[],!1,null,null,null);s.default=e.exports}}]);