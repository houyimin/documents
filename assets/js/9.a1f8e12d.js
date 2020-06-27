(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{226:function(t,a,s){"use strict";s.r(a);var e=s(19),l=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("blockquote",[s("p",[t._v("Linux split命令用于将一个文件分割成数个。")])]),t._v(" "),s("h3",{attrs:{id:"该指令将大文件分割成较小的文件，在默认情况下将按照每1000行切割成一个小文件。"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#该指令将大文件分割成较小的文件，在默认情况下将按照每1000行切割成一个小文件。"}},[t._v("#")]),t._v(" 该指令将大文件分割成较小的文件，在默认情况下将按照每1000行切割成一个小文件。")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("split [--help][--version][-<行数>][-b <字节>][-C <字节>][-l <行数>][要切割的文件][输出文件名]\n")])])]),s("p",[t._v("参数说明：")]),t._v(" "),s("ul",[s("li",[t._v("-<行数> : 指定每多少行切成一个小文件")]),t._v(" "),s("li",[t._v("-b<字节> : 指定每多少字节切成一个小文件")]),t._v(" "),s("li",[t._v("--help : 在线帮助")]),t._v(" "),s("li",[t._v("--version : 显示版本信息")]),t._v(" "),s("li",[t._v('-C<字节> : 与参数"-b"相似，但是在切 割时将尽量维持每行的完整性')]),t._v(" "),s("li",[t._v("[输出文件名] : 设置切割后文件的前置文件名， split会自动在前置文件名后再加上编号")])]),t._v(" "),s("h3",{attrs:{id:"指定分割文件行数"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#指定分割文件行数"}},[t._v("#")]),t._v(" 指定分割文件行数")]),t._v(" "),s("h3",{attrs:{id:"例如将一个1-txt文件分成前缀为-o-的多个小文件，每个文件5000行-l-5000-后缀为系数形式，系数不是字母而是数字（-d），后缀系数为四位数（-a-4）"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#例如将一个1-txt文件分成前缀为-o-的多个小文件，每个文件5000行-l-5000-后缀为系数形式，系数不是字母而是数字（-d），后缀系数为四位数（-a-4）"}},[t._v("#")]),t._v(" 例如将一个1.txt文件分成前缀为 o_ 的多个小文件，每个文件5000行(-l 5000)后缀为系数形式，系数不是字母而是数字（-d），后缀系数为四位数（-a 4）")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("split -l 5000 1.txt -d -a 4 o_\n")])])]),s("h3",{attrs:{id:"生成文件名如下："}},[s("a",{staticClass:"header-anchor",attrs:{href:"#生成文件名如下："}},[t._v("#")]),t._v(" 生成文件名如下：")]),t._v(" "),s("p",[t._v("'o_0000','o_0001','o_0002','o_0003'")]),t._v(" "),s("h3",{attrs:{id:"指定分割后文件大小"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#指定分割后文件大小"}},[t._v("#")]),t._v(" 指定分割后文件大小")]),t._v(" "),s("p",[t._v("split -b 10m 1.log log")])])}),[],!1,null,null,null);a.default=l.exports}}]);