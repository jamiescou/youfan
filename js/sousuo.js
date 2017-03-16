/**
 * Created by wq on 2016/6/23.
 */
var oSch = document.getElementsByTagName("input")[0];
var oKeyBd = document.getElementsByTagName("img")[0];

oSch.onfocus = function () {
    startMove(oKeyBd,{top:307},5);
};

oSch.onblur = function () {
    startMove(oKeyBd,{top:705},5);
};