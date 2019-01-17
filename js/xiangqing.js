/**
 * Created by zzm on 2016/6/23.
 */
/* 选项卡切换 */
// 获取鼠标点击的标签和要切换内容的元素
var oBtns = document.getElementsByClassName("itm-dtls-lt")[0].getElementsByTagName("li");
var oImgView = document.getElementById("imgView");
// 遍历titles下所有li
for(var i = 0; i < oBtns.length; i++){
    oBtns[i].onclick = function (){
        // 清除所有li上class
        for(var j = 0; j < oBtns.length; j++){
            oBtns[j].className = "";
        }
        // 设置当前为高亮显示
        this.className = "active";
        oImgView.src = this.getElementsByTagName("img")[0].src;
    }
}
/* /选项卡切换 */

/* 数量加减 */
// 获取按钮和显示数量的元素
var oSub = document.getElementById("sub");
var oPlus = document.getElementById("plus");
var oSl = document.getElementById("sl");
var oKucun = document.getElementsByTagName("em")[0];
oSub.onclick = function () {
    var iSl = oSl.innerHTML;
    if(iSl < 1){
        return;
    }else {
        oSl.innerHTML = --iSl;
    }
};
oPlus.onclick = function () {
    var iSl = oSl.innerHTML;
    if(iSl > parseInt(oKucun.innerHTML)){
        return;
    }else {
        oSl.innerHTML = ++iSl;
    }
};
/* /数量加减 */

/* 选择尺码 */
htChange("chima-arrow", "chima-item");                  // 尺码下拉菜单

var oChimaItms = document.getElementById("chima-item").getElementsByTagName("li");
var oChimaCtn = document.getElementById("chima-ctn");
for(i = 0; i < oChimaItms.length; i++){
    oChimaItms[i].onclick = function () {
        oChimaCtn.value = this.innerHTML;
        document.getElementsByClassName("chima-arrow")[0].onclick();
    }
}
/* /选择尺码 */

/* 相关单品 */
var oPrev = document.getElementById("prev");
var oNext = document.getElementById("next");
var oCtnr = document.getElementsByClassName("rltd-itms")[0].getElementsByClassName("container")[0];
var num = parseInt(getComputedStyle(document.getElementsByClassName("list")[0])["width"]) / 2;
oPrev.onclick = function () {
    if(oCtnr.scrollLeft > 0){
        oCtnr.scrollLeft -= 200;
    }
};
oNext.onclick = function () {
    if(oCtnr.scrollLeft < num){
        oCtnr.scrollLeft +=200;
    }
};
/* /相关单品 */
