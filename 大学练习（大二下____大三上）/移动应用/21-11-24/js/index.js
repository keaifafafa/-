/**
 * 1、分析数据
 * 
 */
/* console.log(province);
console.log(city);
console.log(allschool); */

(function showView() {

	var provinceNode = document.getElementById('province');
	var cityNode = document.getElementById('city');
	var schoolNode = document.getElementById('school');

	// 省会
	function render(node, arr) {
		var provinceStr = '';
		for (let i = 0; i < arr.length; i++) {
			provinceStr += `<option value=${arr[i][0]}>${arr[i][1]}</option>`;
		}
		node.innerHTML = provinceStr;
	}
	render(provinceNode, province);

	//城市的获取
	var cityArr = city[provinceNode.value];
	
	render(cityNode, cityArr);

	//学校的获取
	var schoolArr = allschool[cityNode.value];

	function renderSchool(node, arr) {
		var schoolStr = '';
		for (let i = 0; i < schoolArr.length; i++) {
			schoolStr += `<option>${schoolArr[i][2]}</option>`
		}
		schoolNode.innerHTML = schoolStr;
	}
	
	renderSchool(schoolNode, schoolArr);


	// 改变下拉框的内容，重新渲染
	// 省的下拉框改变，重新渲染市和学校
	provinceNode.onchange = function() {
		let value = this.value;
		cityArr = city[value];
		render(cityNode, cityArr);
		schoolArr = allschool[cityNode.value];
		renderSchool(schoolNode, schoolArr);
	}

	// 城市改变，学校重新渲染
	cityNode.onchange = function() {
		let value = this.value;
		schoolArr = allschool[cityNode.value];
		renderSchool(schoolNode, schoolArr);
	}
})();
