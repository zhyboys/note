module.exports = 
[
	
	/**笔记 link写到目录就连接到readme，写到具体md就链接到文章*/
	/**导引 */
	{
		text: '导引', link: '/guide/'
	},
	/*前端系列 */
	{
		text: '前端系列',
		items: 
		[
			{text:"概述总结",link:"/typora/00前端系列/00概述总结/"},
			{text:"JavaScript基础",link:"/typora/00前端系列/02JavaScript/001概念"},
			{text:"JavaScript高级",link:"/typora/00前端系列/05JavaScript新特性/01H5新增存储"},
			{
				text:"CSS预处理器",
				items:
				[
					{text:"Less",link:"/typora/00前端系列/03css预处理器/01Less/01概念",},
					{text:"FullPage",link:"/typora/00前端系列/03css预处理器/02fullPage/01概念"},
					{text:"SASS",link:"/typora/00前端系列/03css预处理器/03SASS/01概念"},
				]
			},
			{
				text:"jQuery与Ajax",
				items:
				[
					{text:"jQuery",link:"/typora/00前端系列/04jQuery与Ajax/01jQuery/01入口函数",},
					{text:"Ajax",link:"/typora/00前端系列/04jQuery与Ajax/02Ajax/01软件安装"},
				]
			},
			{text:"移动端Web",link:"/typora/00前端系列/07移动端web开发/01常用单位px"},
			{text:"Git代码管理",link:"/typora/00前端系列/08Git/01使用"},
			{text:"NodeJS",link:"/typora/00前端系列/09NodeJS/01简介"},
			{text:"webpack4",link:"/typora/00前端系列/10Webpack/01概念"},
			{text:"vue全家桶",link:"/typora/00前端系列/11Vue/001开篇"},
		]
	},
	/* node后端 */
	{
		text: 'node后端',
		items: [
			{text: 'MySQL', link: '/typora/00前端系列/13MySQL/01数据库开篇'},
			{text: 'node三大框架', link: '/typora/00前端系列/16node三大框架/001node搭建服务器回顾'}
		]
	},
	/* discard废弃笔记 */
	{
		text: 'discard',
		items: [
				{text: 'MySQL', link: '/discard/01数据库MySQL/'},
				{text: 'HTML+css', link: '/discard/02HTML+css/01选择器大全'},
				{text: 'C语言进阶', link: '/discard/03C语言进阶/01指针'},
				{text: 'C++基础', link: '/discard/04C++/001初始'},
				{text: 'JavaScript', link: '/discard/05js笔记/00关于js的一些注意点'},
				{text: '中级软考', link: '/discard/06中级软考/'},
				{text: 'Java基础', link: '/discard/07Java基础/01考核'},
				{text: 'Java进阶', link: '/discard/08Java进阶/01Object类、常用API'},
				{text: 'javaweb', link: '/discard/09Javaweb/'},
				{text: 'JDBC', link: '/discard/10JDBC/01JDBC概述'},
				{text: 'JSP', link: '/discard/11JSP笔记/01浅浅了解'},
				{text: 'AutoJS', link: '/discard/12Auto/01概念'},
				{text: 'python', link: '/discard/13python/python'},
		]
	},
	/**工具箱 */
	{
		text: '工具箱',
		items: [
			{
				text: '在线编辑',
				items: [
					{ text: '图片压缩', link: 'https://tinypng.com/' }
				]
			},
			{
				text: '在线服务',
				items: [
					{ text: '阿里云', link: 'https://www.aliyun.com/' },
					{ text: '腾讯云', link: 'https://cloud.tencent.com/' },
				]
			},
			{
				text: '博客指南',
				items: [
					{ text: '掘金', link: 'https://juejin.im/' },
					{ text: 'CSDN', link: 'https://blog.csdn.net/' },
				]
			},
		]
	},


]