module.exports = 
[
	
	/**笔记 link写到目录就连接到readme，写到具体md就链接到文章*/
	/**导引 */
	{
		text: '导引', link: '/typora/00guide/'
	},
	/*前端系列 */
	{
		text: '前端系列',
		children: 
		[
			{text:"概述总结",link:"/typora/01frontEnd/00summary/"},
			{text:"JavaScript基础",link:"/typora/01frontEnd/02JavaScript/001概念.md"},
			{text:"JavaScript高级",link:"/typora/01frontEnd/05JavaScriptNewFeature/001H5新增存储.md"},
			{
				text:"CSS预处理器",
				children:
				[
					{text:"Less",link:"/typora/01frontEnd/03CSSPreprocessor/01Less/01概念.md",},
					{text:"FullPage",link:"/typora/01frontEnd/03CSSPreprocessor/02fullPage/01概念.md"},
					{text:"SASS",link:"/typora/01frontEnd/03CSSPreprocessor/03SASS/01概念.md"},
				]
			},
			{
				text:"jQuery与Ajax",
				children:
				[
					{text:"jQuery",link:"/typora/01frontEnd/04jQueryAndAjax/01jQuery/01入口函数.md",},
					{text:"Ajax",link:"/typora/01frontEnd/04jQueryAndAjax/02Ajax/01软件安装.md"},
				]
			},
			{text:"移动端Web",link:"/typora/01frontEnd/07webAppDevelop/01常用单位px.md"},
			{text:"Git代码管理",link:"/typora/01frontEnd/08Git/01使用.md"},
			{text:"NodeJS",link:"/typora/01frontEnd/09NodeJS/01简介.md"},
			{text:"webpack4",link:"/typora/01frontEnd/10Webpack/01概念.md"},
			{text:"vue全家桶",link:"/typora/01frontEnd/11Vue/001开篇.md"},
		]
	},
	/* node后端 */
	{
		text: 'node后端',
		children: [
			{text: 'MySQL', link: '/typora/01frontEnd/13MySQL/01数据库开篇.md'},
			{text: 'node三大框架', link: '/typora/01frontEnd/16nodeFramework/'},
			{text: 'TypeScript', link: '/typora/01frontEnd/18TypeScript/'},
			{text: 'Python', link: '/typora/01frontEnd/50Python/'}
		]
	},
	/* discard废弃笔记 */
	{
		text: 'discard',
		children: [
				{text: 'MySQL', link: '/typora/05discard/01MySQL/'},
				{text: 'HTML+css', link: '/typora/05discard/02HTML+css/01选择器大全.md'},
				{text: 'C语言进阶', link: '/typora/05discard/03CProgramming/01指针.md'},
				{text: 'C++基础', link: '/typora/05discard/04C++/001初始.md'},
				{text: 'JavaScript', link: '/typora/05discard/05JavaScript/01关于js的一些注意点.md'},
				{text: 'softExam', link: '/typora/05discard/06softExam/'},
				{text: 'Java1基础', link: '/typora/05discard/07Java1/01考核.md'},
				{text: 'Java2进阶', link: '/typora/05discard/08Java2/01Object类、常用API.md'},
				{text: 'javaweb', link: '/typora/05discard/09Javaweb/'},
				{text: 'JDBC', link: '/typora/05discard/10JDBC/01JDBC概述.md'},
				{text: 'JSP', link: '/typora/05discard/11JSP/01浅浅了解.md'},
				{text: 'AutoJS', link: '/typora/05discard/12Auto/01概念.md'}
		]
	},
	/**工具箱 */
	{
		text: '工具箱',
		children: [
			{
				text: '在线编辑',
				children: [
					{ text: '图片压缩', link: 'https://tinypng.com/' }
				]
			},
			{
				text: '在线服务',
				children: [
					{ text: '阿里云', link: 'https://www.aliyun.com/' },
					{ text: '腾讯云', link: 'https://cloud.tencent.com/' },
				]
			},
			{
				text: '博客指南',
				children: [
					{ text: '掘金', link: 'https://juejin.im/' },
					{ text: 'CSDN', link: 'https://blog.csdn.net/' },
				]
			},
		]
	},


]