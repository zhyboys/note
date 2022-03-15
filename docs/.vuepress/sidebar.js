module.exports=
{	
	// 注意点：:require前面的字符串不能为英文否则报错！！
	'/typora/00guide/':require('./sidebar/00guide/sidebar'),

	/**
	 * 前端系列栏
	 */
	'/typora/01frontEnd/00summary/':require('./sidebar/01frontEnd/00summary'),
	'/typora/01frontEnd/02JavaScript/':require('./sidebar/01frontEnd/02JavaScript'),
	'/typora/01frontEnd/05JavaScriptNewFeature/':require('./sidebar/01frontEnd/05JavaScriptNewFeature'),
	'/typora/01frontEnd/03CSSPreprocessor/01Less/':require('./sidebar/01frontEnd/03CSSPreprocessor/01Less'),
	'/typora/01frontEnd/03CSSPreprocessor/02fullPage/':require('./sidebar/01frontEnd/03CSSPreprocessor/02fullPage'),
	'/typora/01frontEnd/03CSSPreprocessor/03SASS/':require('./sidebar/01frontEnd/03CSSPreprocessor/03SASS'),
	'/typora/01frontEnd/04jQueryAndAjax/01jQuery/':require('./sidebar/01frontEnd/04jQueryAndAjax/01jQuery'),
	'/typora/01frontEnd/04jQueryAndAjax/02Ajax/':require('./sidebar/01frontEnd/04jQueryAndAjax/02Ajax'),
	'/typora/01frontEnd/07webAppDevelop/':require('./sidebar/01frontEnd/07webAppDevelop'),
	'/typora/01frontEnd/08Git/':require('./sidebar/01frontEnd/08Git'),
	'/typora/01frontEnd/09NodeJS/':require('./sidebar/01frontEnd/09NodeJS'),
	'/typora/01frontEnd/10Webpack/':require('./sidebar/01frontEnd/10Webpack'),
	'/typora/01frontEnd/11Vue/':require('./sidebar/01frontEnd/11Vue'),
	'/typora/01frontEnd/12VueCode/':require('./sidebar/01frontEnd/12VueCode'),

	/**
	 * node后端
	 */
	 '/typora/01frontEnd/13MySQL/':require('./sidebar/01frontEnd/13MySQL'),
	 '/typora/01frontEnd/16nodeFramework/':require('./sidebar/01frontEnd/16nodeFramework'),
	 '/typora/01frontEnd/18TypeScript/':require('./sidebar/01frontEnd/18TypeScript'),
	 '/typora/01frontEnd/50Python/':require('./sidebar/01frontEnd/50Python'),
	 '/typora/01frontEnd/51PythonExtend/':require('./sidebar/01frontEnd/51PythonExtend'),
	/**
	 * 废弃discard
	 */
	'/typora/05discard/01MySQL/':require('./sidebar/05discard/01MySQL'),
	'/typora/05discard/02HTML+css/':require('./sidebar/05discard/02HTML+css'),
	'/typora/05discard/03CProgramming/':require('./sidebar/05discard/03CProgramming'),
	'/typora/05discard/04C++/':require('./sidebar/05discard/04C++'),
	'/typora/05discard/05JavaScript/':require('./sidebar/05discard/05JavaScript'),
	'/typora/05discard/06softExam/':require('./sidebar/05discard/06softExam'),
	'/typora/05discard/07Java1/':require('./sidebar/05discard/07Java1'),
	'/typora/05discard/08Java2/':require('./sidebar/05discard/08Java2'),
	'/typora/05discard/09Javaweb/':require('./sidebar/05discard/09Javaweb'),
	'/typora/05discard/10JDBC/':require('./sidebar/05discard/10JDBC'),
	'/typora/05discard/11JSP/':require('./sidebar/05discard/11JSP'),
	'/typora/05discard/12Auto/':require('./sidebar/05discard/12Auto')
}