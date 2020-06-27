(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{228:function(t,s,a){"use strict";a.r(s);var n=a(19),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"python操作数据库"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#python操作数据库"}},[t._v("#")]),t._v(" Python操作数据库")]),t._v(" "),a("h3",{attrs:{id:"方式一-使用pymysql"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#方式一-使用pymysql"}},[t._v("#")]),t._v(" 方式一 使用pymysql")]),t._v(" "),a("div",{staticClass:"language-python extra-class"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[t._v("使用pymysql的connect"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("方法连接数据库\n\nhost：MySQL服务的地址，若数据库在本地上，使用localhost或者"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("127.0")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v(".0")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v(".1")]),t._v("。如果在其它的服务器上，应该写IP地址。\nport：服务的端口号，默认为"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3306")]),t._v("，如果不写，为默认值。\nuser：登录数据库的用户名\npasswd：user账户登录MySQL的密码\ndb：将要操作的数据库的名字\ncharset：设置为utf8编码，这样就可以存入汉字没有乱码\n")])])]),a("div",{staticClass:"language-python extra-class"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" pymysql\ndb "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" pymysql"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("connect"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("host"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'127.0.0.1'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" user"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'root'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" password"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'123456'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" port"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3306")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" db"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'db_name'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("charset"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'utf8'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\ncursor "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" db"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("cursor"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\nsql "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"select * from table_name"')]),t._v("\n\ncursor"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("execute"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("sql"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("//")]),t._v("返回所有查询结果\nresults "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" cursor"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("fetchall"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" \n\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("//")]),t._v("提交进行数据库更新操作\ndb"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("commit"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("h3",{attrs:{id:"方式二-使用pandas"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#方式二-使用pandas"}},[t._v("#")]),t._v(" 方式二 使用pandas")]),t._v(" "),a("div",{staticClass:"language-python extra-class"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" pandas "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("as")]),t._v(" pd\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" pymysql\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" sqlalchemy "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" create_engine\n")])])]),a("h3",{attrs:{id:"连接数据库-依次填写mysql的用户名、密码、ip地址、端口、数据库名"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#连接数据库-依次填写mysql的用户名、密码、ip地址、端口、数据库名"}},[t._v("#")]),t._v(" 连接数据库,依次填写MySQL的用户名、密码、IP地址、端口、数据库名")]),t._v(" "),a("div",{staticClass:"language-python extra-class"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("//")]),t._v("使用sqlalchemy构建数据库连接引擎\nengine "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" create_engine"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'mysql+pymysql://root:123456@localhost:3306/db_name'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" encoding"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"utf8"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("h3",{attrs:{id:"mysql-pymysql-是指明通过pymysql这个包来连接数据库，encoding是编码"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mysql-pymysql-是指明通过pymysql这个包来连接数据库，encoding是编码"}},[t._v("#")]),t._v(" “mysql+pymysql://”是指明通过pymysql这个包来连接数据库，encoding是编码")]),t._v(" "),a("h3",{attrs:{id:"python读取数据库"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#python读取数据库"}},[t._v("#")]),t._v(" Python读取数据库")]),t._v(" "),a("div",{staticClass:"language-python extra-class"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[t._v("sql_query "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"select * from table_name"')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 使用pandas的read_sql_query函数执行SQL语句，并存入DataFrame")]),t._v("\ndf_read "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" pd"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("read_sql_query"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("sql_query"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" engine"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("h3",{attrs:{id:"python写入数据库"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#python写入数据库"}},[t._v("#")]),t._v(" Python写入数据库")]),t._v(" "),a("div",{staticClass:"language-python extra-class"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[t._v("DataFrame"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("to_sql"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" con"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" schema"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("None")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" if_exists"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'fail'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" index"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("True")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" index_label"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("None")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" chunksize"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("None")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" dtype"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("None")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nname：输出的表名\ncon：连接数据库的引擎\nif_exists：三种模式"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("“fail”"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("“replace”"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"append"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("，默认是"),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"fail"')]),t._v("。fail：若表存在，引发一个ValueError；replace：若表存在，覆盖原来表内数据；append：若表存在，将数据写到原表数据的后面。\nindex：是否将DataFrame的index单独写到一列中，默认为“"),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("True")]),t._v("”\nindex_label：当index为"),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("True")]),t._v("时，指定列作为DataFrame的index输出\ndtype：指定列的数据类型，字典形式存储"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("column_name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" sql_dtype"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("，常见数据类型是sqlalchemy"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("types"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("INT"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("和sqlalchemy"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("types"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("CHAR"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("length"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("x"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("。注意：INT和CHAR都需要大写，INT"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("不用指定长度\n")])])]),a("div",{staticClass:"language-python extra-class"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[t._v("df_write "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" pd"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("DataFrame"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'name'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'张三'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'李四'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'王五'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'赵六'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'age'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("80")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("75")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("56")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("99")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 将df储存为MySQL中的表，不储存index列")]),t._v("\ndf_write"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("to_sql"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'admin_users'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" engine"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" index"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("False")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("if_exists"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'append'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("p",[a("a",{attrs:{href:"https://blog.csdn.net/heshiliqiu/article/details/81590685",target:"_blank",rel:"noopener noreferrer"}},[t._v("Python操作MySQL数据库的两种方式pymysql和pandas"),a("OutboundLink")],1)]),t._v(" "),a("p",[a("a",{attrs:{href:"https://zhuanlan.zhihu.com/p/72347359",target:"_blank",rel:"noopener noreferrer"}},[t._v("Python连接mysql数据库极简教程（pandas）"),a("OutboundLink")],1)])])}),[],!1,null,null,null);s.default=e.exports}}]);