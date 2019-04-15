/**
 * 工具插件
 * zhaojl
 * 2017-12-18
 */
var Util = {};
Util.install = function(Vue, options) {
	/**
	 * 获取服务器地址
	 */
	Vue.prototype.getServerUrl = function() {
		return window.sessionStorage.getItem('serverUrl');
	};

	//vue挂载格式化时间
	Vue.prototype.meFormat = function(obj) {
		var date = new Date(obj);
		var y = 1900 + date.getYear();
		var m = "0" + (date.getMonth() + 1);
		var d = "0" + date.getDate();
		return y + "-" + m.substring(m.length - 2, m.length) + "-" + d.substring(d.length - 2, d.length);
	}

}
module.exports = Util;