(window.webpackJsonp=window.webpackJsonp||[]).push([[47],{449:function(s,n,t){"use strict";t.r(n);var a=t(44),e=Object(a.a)({},(function(){var s=this,n=s.$createElement,t=s._self._c||n;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"_006-随机数"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_006-随机数"}},[s._v("#")]),s._v(" 006 随机数")]),s._v(" "),t("p",[s._v("随机数范围0~32767（最大值也可能是别的值，应该与系统有关）。")]),s._v(" "),t("div",{staticClass:"language-C++ line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("int num = rand()*100; //生成随机数，由于短时间内每次生成的随机数都一样，称伪随机数。\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("div",{staticClass:"language-C++ line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("#include<ctime>\n\n// 为了防止每次生成的随机数都一样，需要添加随机数种子\n// 随机数种子根据当前系统时间声称随机数，防止每次随机数都一样\n// time方法需要引入ctime头文件\nsrand ((unsigned int) time(NULL)); // 添加随机数种子\nint num = rand();\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br")])])])}),[],!1,null,null,null);n.default=e.exports}}]);