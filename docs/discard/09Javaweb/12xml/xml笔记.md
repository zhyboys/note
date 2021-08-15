---
title: 02 xml
---
	1. XML
		1. 概念
		2. 语法
		3. 解析

```xml
<?xml version='1.0' ?>
文档声明：
1.尖括号与问号之间不能有空格。
2.xml与问号之间不能有空格。
3.必须写在第一行。
```



## 01 XML介绍：

	1. 概念：Extensible Markup Language 可扩展标记语言
		* 可扩展：标签都是自定义的。 <user>  <student>
	
		* 功能
			* 存储数据
				1. 配置文件
				2. 在网络中传输
		* xml与html的区别
			1. xml标签都是自定义的，html标签是预定义。
			2. xml的语法严格，html语法松散
			3. xml是存储数据的，html是展示数据
	
		* w3c:万维网联盟
	
	2. 语法：
		* 基本语法：
			1. xml文档的后缀名 .xml
			2. xml第一行必须定义为文档声明
			3. xml文档中有且仅有一个根标签
			4. 属性值必须使用引号(单双都可)引起来
			5. 标签必须正确关闭
			6. xml标签名称区分大小写
		* 快速入门：
			<?xml version='1.0' ?>
			<users>
				<user id='1'>
					<name>zhangsan</name>
					<age>23</age>
					<gender>male</gender>
					<br/>
				</user>
				
				<user id='2'>
					<name>lisi</name>
					<age>24</age>
					<gender>female</gender>
				</user>
			</users>
			
		* 组成部分：
			1. 文档声明
				1. 格式：<?xml 属性列表 ?>
				2. 属性列表：
					* version：版本号，必须的属性
					* encoding：编码方式。告知解析引擎当前文档使用的字符集，默认值：ISO-8859-1
					* standalone：是否独立
						* 取值：
							* yes：不依赖其他文件
							* no：依赖其他文件
			2. 指令(了解)：结合css的
				* <?xml-stylesheet type="text/css" href="a.css" ?>
			3. 标签：标签名称自定义的
				* 规则：
					* 名称可以包含字母、数字以及其他的字符 
					* 名称不能以数字或者标点符号开始 
					* 名称不能以字母 xml（或者 XML、Xml 等等）开始 
					* 名称不能包含空格 
	
			4. 属性：
				id属性值唯一
			5. 文本：
				* CDATA区：在该区域中的数据会被原样展示
					* 格式：  <![CDATA[ 数据 ]]>

## 02 两种约束

* 约束：规定xml文档的书写规则
	​			* 作为框架的使用者(程序员)：
	​				1. 能够在xml中引入约束文档
	​				2. 能够简单的读懂约束文档
	​			
	​			* 分类：
	​				1. DTD:一种简单的约束技术
	​				2. Schema:一种复杂的约束技术

### DTD


			* DTD：
				* 引入dtd文档到xml文档中
					* 内部dtd：将约束规则定义在xml文档中
					* 外部dtd：将约束的规则定义在外部的dtd文件中
						* 本地：<!DOCTYPE 根标签名 SYSTEM "dtd文件的位置">
						* 网络：<!DOCTYPE 根标签名 PUBLIC "dtd文件名字" "dtd文件的位置URL">

DTD案例（student.dtd）

```xml
<!ELEMENT students (student*) >
<!ELEMENT student (name,age,sex)>
<!ELEMENT name (#PCDATA)>
<!ELEMENT age (#PCDATA)>
<!ELEMENT sex (#PCDATA)>
<!ATTLIST student number ID #REQUIRED>
```
说明：
1. 第一行ELEMENT表示定义一个元素（标签）。
2. 第一行students是标签名。
3. 第一行student写在括号内，表示students标签内只能放什么标签。
4. 第一行*表示能写的个数，也可写加号+表示必须写一个或两个以上。
5. 第二行在student内定义了多个标签。
6. 第三行`(#PCDATA)`表示name标签内放的是字符串类型。
7. 第六行ATTLIST定义的是属性，为student标签定义。
8. 第六行number是为student标签定义了一个number属性，属性类型是ID（唯一）。
9. 第六行`#REQUIRED`表示number属性值必须写。
DTD案例(student.xml)

```xml
<?xml version="1.0" encoding="UTF-8" ?>
<!DOCTYPE students SYSTEM "student.dtd">

<students>
	<student number="itcast_0001">
		<name>tom</name>
		<age>18</age>
		<sex>male</sex>
	</student>
	
</students>
```
说明：
1. 第二行是引入外部dtd文件。上述有详解。
2. 三四五行标签必须按照顺序写，不然会报错。

### schema

由于dtd不能限定标签内的内容，这是一个缺陷，比如年龄可以填1000岁，而schema可以约束。


			* Schema:
				* 引入：
					1.填写xml文档的根元素
					2.引入xsi前缀.  xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
					3.引入xsd文件命名空间.  xsi:schemaLocation="http://www.itcast.cn/xml  student.xsd"
					4.为每一个xsd约束声明一个前缀,作为标识  xmlns="http://www.itcast.cn/xml" 
	
				<students   xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
					xmlns="http://www.itcast.cn/xml"
					xsi:schemaLocation="http://www.itcast.cn/xml  student.xsd">

schema案例（student.xsd）

```xml
<?xml version="1.0"?>
<xsd:schema xmlns="http://www.itcast.cn/xml"
        xmlns:xsd="http://www.w3.org/2001/XMLSchema"
        targetNamespace="http://www.itcast.cn/xml" elementFormDefault="qualified">
        <!-- 定义了一个标签，students，并且说明类型type是studentsType，是自定义类型 -->
    <xsd:element name="students" type="studentsType"/>
    <!-- 定义什么是studentsType，里面包含什么标签，complex表示复合与之相对的是简单 -->
    <xsd:complexType name="studentsType">
    	<!-- sequence表示下面的标签按顺序出现 -->
        <xsd:sequence>
        	<!-- 定义了一个student标签，并且是自定义类型studentType -->
        	<!-- minOccurs表示此标签最少出现0次，maxOccurs表示最多出现次数无上限 -->
            <xsd:element name="student" type="studentType" minOccurs="0" maxOccurs="unbounded"/>
        </xsd:sequence>
    </xsd:complexType>
    <!-- 定义了studenType是什么样的 -->
    <xsd:complexType name="studentType">
    	<!-- 定义里面的三个标签必须按顺序出现 -->
        <xsd:sequence>
        	<!-- 定义name是string类型 -->
            <xsd:element name="name" type="xsd:string"/>
            <!-- 定义age是ageType类型，自定义类型 -->
            <xsd:element name="age" type="ageType" />
            <xsd:element name="sex" type="sexType" />
        </xsd:sequence>
        <!-- 定义了student标签的属性number，类型是自定义类型numberType，required表示必须 -->
        <xsd:attribute name="number" type="numberType" use="required"/>
    </xsd:complexType>
    <!-- 定义sexType是简单类型 -->
    <xsd:simpleType name="sexType">
    	<!-- 定义基本类型是string -->
        <xsd:restriction base="xsd:string">
        	<!-- 定义字符串也只能枚举enumeration，只能有male和female两种值 -->
            <xsd:enumeration value="male"/>
            <xsd:enumeration value="female"/>
        </xsd:restriction>
    </xsd:simpleType>
    <xsd:simpleType name="ageType">
    	<!-- 定义基本类型是数字 -->
        <xsd:restriction base="xsd:integer">
        	<!-- 定义最小值是0 -->
            <xsd:minInclusive value="0"/>
            <!-- 定义最大值是256 -->
            <xsd:maxInclusive value="256"/>
        </xsd:restriction>
    </xsd:simpleType>
    <xsd:simpleType name="numberType">
        <xsd:restriction base="xsd:string">
        	<!-- 规定取值必须是heima_开头，\d表示数字,{4}表示4个数字 -->
        	<!-- 也就是说取值必须为heima_****,且*必须为数字 -->
            <xsd:pattern value="heima_\d{4}"/>
        </xsd:restriction>
    </xsd:simpleType>
</xsd:schema> 

```

schema案例（student.xml）

```xml
<?xml version="1.0" encoding="UTF-8" ?>
<!-- 
	1.填写xml文档的根元素
	2.引入xsi前缀.  xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
	//规定的，由w3c提供

	3.引入xsd文件命名空间.  xsi:schemaLocation="http://www.itcast.cn/xml  student.xsd"
	//前面的网址相当于起了一个名称空间，后面是文件路径

	4.为每一个xsd约束声明一个前缀,作为标识  xmlns="http://www.itcast.cn/xml" ，不写表示空前缀
	//给名称空间起的别名  xmlns:a="http://www.itcast.cn/xml",则起名为a 
	
 -->
 <students   xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
 			 xmlns="http://www.itcast.cn/xml" 
 		   xsi:schemaLocation="http://www.itcast.cn/xml  student.xsd"
 		    >
 		    
 	<student number="heima_0001">
 		<name>tom</name>
 		<age>18</age>
 		<sex>male</sex>
 	</student>
		 
 </students>
```

## 03 解析

	3. 解析：操作xml文档，将文档中的数据读取到内存中
		* 操作xml文档
			1. 解析(读取)：将文档中的数据读取到内存中
			2. 写入：将内存中的数据保存到xml文档中。持久化的存储
	
		* 解析xml的方式：
			1. DOM：将标记语言文档一次性加载进内存，在内存中形成一颗dom树
				* 优点：操作方便，可以对文档进行CRUD的所有操作
				* 缺点：占内存
				* 适用于服务器
			2. SAX：逐行读取，基于事件驱动的。
				* 优点：读一行直接释放掉了，不占内存。
				* 缺点：只能读取，不能增删改
				* 适用于手机
		* xml常见的解析器：
				1. JAXP：sun公司提供的解析器，支持dom和sax两种思想，官方提供，性能低，不使用。
				2. DOM4J：一款非常优秀的解析器
				3. Jsoup：jsoup 是一款Java 的HTML解析器，可直接解析某个URL地址、HTML文本内容。它提供了一套非常省力的API，可通过DOM，CSS以及类似于jQuery的操作方法来取出和操作数据。
				4. PULL：Android操作系统内置的解析器，sax方式的。
	
		* Jsoup：jsoup 是一款Java 的HTML解析器，可直接解析某个URL地址、HTML文本内容。它提供了一套非常省力的API，可通过DOM，CSS以及类似于jQuery的操作方法来取出和操作数据。
			* 快速入门：
				* 步骤：
					1. 导入jar包
					2. 获取Document对象
					3. 获取对应的标签Element对象
					4. 获取数据

# P11
```
========================================
```

			* 代码：
				 //2.1获取student.xml的path
		        String path = JsoupDemo1.class.getClassLoader().getResource("student.xml").getPath();
		        //2.2解析xml文档，加载文档进内存，获取dom树--->Document
		        Document document = Jsoup.parse(new File(path), "utf-8");
		        //3.获取元素对象 Element
		        Elements elements = document.getElementsByTag("name");
		
		        System.out.println(elements.size());
		        //3.1获取第一个name的Element对象
		        Element element = elements.get(0);
		        //3.2获取数据
		        String name = element.text();
		        System.out.println(name);
	
		* 对象的使用：
			1. Jsoup：工具类，可以解析html或xml文档，返回Document
				* parse：解析html或xml文档，返回Document
					* parse​(File in, String charsetName)：解析xml或html文件的。
					* parse​(String html)：解析xml或html字符串
					* parse​(URL url, int timeoutMillis)：通过网络路径获取指定的html或xml的文档对象
			2. Document：文档对象。代表内存中的dom树
				* 获取Element对象
					* getElementById​(String id)：根据id属性值获取唯一的element对象
					* getElementsByTag​(String tagName)：根据标签名称获取元素对象集合
					* getElementsByAttribute​(String key)：根据属性名称获取元素对象集合
					* getElementsByAttributeValue​(String key, String value)：根据对应的属性名和属性值获取元素对象集合
			3. Elements：元素Element对象的集合。可以当做 ArrayList<Element>来使用
			4. Element：元素对象
				1. 获取子元素对象
					* getElementById​(String id)：根据id属性值获取唯一的element对象
					* getElementsByTag​(String tagName)：根据标签名称获取元素对象集合
					* getElementsByAttribute​(String key)：根据属性名称获取元素对象集合
					* getElementsByAttributeValue​(String key, String value)：根据对应的属性名和属性值获取元素对象集合
	
				2. 获取属性值
					* String attr(String key)：根据属性名称获取属性值
				3. 获取文本内容
					* String text():获取文本内容
					* String html():获取标签体的所有内容(包括字标签的字符串内容)
			5. Node：节点对象
				* 是Document和Element的父类
```

* 快捷查询方式：
	1. selector:选择器
		* 使用的方法：Elements	select​(String cssQuery)
			* 语法：参考Selector类中定义的语法
	2. XPath：XPath即为XML路径语言，它是一种用来确定XML（标准通用标记语言的子集）文档中某部分位置的语言
		* 使用Jsoup的Xpath需要额外导入jar包。
		* 查询w3cshool参考手册，使用xpath的语法完成查询
		* 代码：
			//1.获取student.xml的path
	        String path = JsoupDemo6.class.getClassLoader().getResource("student.xml").getPath();
	        //2.获取Document对象
	        Document document = Jsoup.parse(new File(path), "utf-8");
```
			        //3.根据document对象，创建JXDocument对象
			        JXDocument jxDocument = new JXDocument(document);
			
			        //4.结合xpath语法查询
			        //4.1查询所有student标签
			        List<JXNode> jxNodes = jxDocument.selN("//student");
			        for (JXNode jxNode : jxNodes) {
			            System.out.println(jxNode);
			        }
			
			        System.out.println("--------------------");
			
			        //4.2查询所有student标签下的name标签
			        List<JXNode> jxNodes2 = jxDocument.selN("//student/name");
			        for (JXNode jxNode : jxNodes2) {
			            System.out.println(jxNode);
			        }
			
			        System.out.println("--------------------");
			
			        //4.3查询student标签下带有id属性的name标签
			        List<JXNode> jxNodes3 = jxDocument.selN("//student/name[@id]");
			        for (JXNode jxNode : jxNodes3) {
			            System.out.println(jxNode);
			        }
			        System.out.println("--------------------");
			        //4.4查询student标签下带有id属性的name标签 并且id属性值为itcast
			
			        List<JXNode> jxNodes4 = jxDocument.selN("//student/name[@id='itcast']");
			        for (JXNode jxNode : jxNodes4) {
			            System.out.println(jxNode);
			        }