/* -----获取nav下所有li元素----- */
var aLi = document.getElementsByTagName('nav')[0].getElementsByTagName('li');

// 获取所有的页签和要切换的内容
var aA = document.getElementsByTagName('nav')[0].getElementsByTagName('a');
	aDiv = document.getElementsByTagName('main')[0].getElementsByClassName('main-item');

var timer = null,
	timer2 = null;;
// 遍历每一个页签且给他们绑定事件

var num = 0;
for(var i = 0; i < aA.length; i++){
	aA[i].id = i;
	aA[i].onmouseover = function (){

		timer2 = setInterval(function () {
			++num;
		}, 10);
		var that = this;
		if(timer){
			clearTimeout(timer);
			timer = null;
		}
		timer = setTimeout(function(){
			/* 防止鼠标误碰导致选项卡切换 */
			if(num > 35){
				num = 0;
				clearInterval(timer2);
				changeOption(that.id);
			}
		}, 400)
	};
	aA[i].onmouseout = function () {
		num = 0;
		clearInterval(timer2);
	};
}
function changeOption(curIndex){
	for(var j = 0; j < aA.length; j++){
		aA[j].className = "";
		aDiv[j].style.display = "none";
	}
	// 高亮显示当前页签
	aA[curIndex].className = "select";
	aDiv[curIndex].style.display = "block";
}
