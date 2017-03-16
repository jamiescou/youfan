/* 下拉菜单函数  参数：按钮class 内容class  按钮hover背景图片位置X  按钮hover背景图片位置Y */
function htChange(classNm1, classNm2, pos1, pos2) {
    var oBtn = document.getElementsByClassName(classNm1)[0];
    var oItem = document.getElementsByClassName(classNm2)[0];
    if(oItem){
        oItem.iniHeight = oItem.offsetHeight;       // visibility:hidden;可以获取元素高度；display:none;不可以获取元素高度
        oItem.style.height = 0;                     // 获取完元素高度立马将高度置0
        oItem.style.visibility = "visible";         // 设置高度为0的元素可见，以便后续操作得以实现

        oBtn.onclick = function () {
            if(parseInt(getComputedStyle(oItem)["height"]) != oItem.iniHeight){
                startMove(oItem,{height:parseInt(oItem.iniHeight)},8);
                if(pos1){
                    this.style.backgroundPosition = "'" + pos1+ ' ' + pos2 + "'";
                }
            }else{
                startMove(oItem,{height:0},8);
                if(pos1){
                    this.style.backgroundPosition = "";
                }
            }
        };
    }
}

htChange("h-menu", "menu-item", "-50px", "0");          // 菜单下拉菜单
htChange("share", "share-item", "-150px", "-150px");    // 分享下拉菜单
 /* /下拉菜单函数  参数：按钮class 内容class  按钮hover背景图片位置X  按钮hover背景图片位置Y */

 /* 返回上一页函数 */
 function goBack() {
     window.history.go(-1);
 }

 var oRtn = document.getElementsByClassName("h-rtn")[0];
if(oRtn){
    oRtn.onclick = goBack;
}
 /* /返回上一页函数 */