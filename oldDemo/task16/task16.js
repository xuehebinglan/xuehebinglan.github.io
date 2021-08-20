/**
 * aqiData，存储用户输入的空气指数数据
 * 示例格式：
 * aqiData = {
 *    "北京": 90,
 *    "上海": 40
 * };
 */
var aqiData = {};

/**
 * 从用户输入中获取数据，向aqiData中增加一条数据
 * 然后渲染aqi-list列表，增加新增的数据
 */
function addAqiData() {
	var city_name = document.getElementById("aqi-city-input").value;
	var cli_num = document.getElementById("aqi-value-input").value;
	// if (! /^[\u4e00-\u9fa5\w]+$/.test(city_name)){
	if (! /^[\u4e00-\u9fa5a-zA-Z]+$/.test(city_name)){
		alert("城市名称error！请输入 中英文 ！");
		return;
	}
	if (! /^\d+$/.test(cli_num)){
		alert("天气指数error！ 请输入 正整数！");
		return;
	}
	aqiData[city_name]= cli_num;
}

/**
 * 渲染aqi-table表格
 */
function renderAqiList() {
	var addtable = document.getElementById("aqi-table");
	var htmlinner = '';
	htmlinner += '<tr><th>城市</th><th>空气质量</th><th>操作</th></tr>';
	for (city in aqiData) {
		htmlinner += "<tr><td>" + city + "</td><td>" + aqiData[city] +"</td><td><button onclick = delBtnHandle(city)>操作</button></td></tr>";
	}
	console.log(htmlinner);
	addtable.innerHTML = htmlinner;
}

/**
 * 点击add-btn时的处理逻辑
 * 获取用户输入，更新数据，并进行页面呈现的更新
 */
function addBtnHandle() {
  addAqiData();
  renderAqiList();
}

/**
 * 点击各个删除按钮的时候的处理逻辑
 * 获取哪个城市数据被删，删除数据，更新表格显示
 */
function delBtnHandle(city) {
  // do sth.
  delete aqiData[city];
  renderAqiList();
}

function init() {

  // 在这下面给add-btn绑定一个点击事件，点击时触发addBtnHandle函数
  document.getElementById("add-btn").onclick = addBtnHandle;
  // 想办法给aqi-table中的所有删除按钮绑定事件，触发delBtnHandle函数

}

window.onload = init;