/**
 * Created by Administrator on 2017/3/28.
 */
//
function addLoadEvent(func) {
    var oldonload=window.onload;
    if(typeof window.onload!='function'){
        window.onload=func;
    }else{
        window.onload=function () {
            oldonload();
            func();
        }
    }
}
//点击“开始闪”将会触发该函数
function shine() {
    if(!document.getElementById) return false;
    if(!document.getElementById("shinebtn")) return false;
    var shinebtn=document.getElementById("shinebtn");
    shinebtn.onclick=function () {
        shineTimer=setInterval("setColor()",1000);
    }
}
function setColor() {
    var boxes=randomBox();
    for(var i=0;i<3;i++){
        var boxID="box"+boxes[i];
        if(!document.getElementById) return false;
        if(!document.getElementById(boxID)) return false;
        var colorBox=document.getElementById(boxID);
        colorBox.style.backgroundColor=randomColor();
    }
    setTimeout("resetColor()",500);

}
//随机产生三种不同的颜色
function randomColor() {
    return '#'+(function (color) {
            return (color+='0123456789abcdef'[Math.floor(Math.random()*16)])
            &&(color.length==6)?color:arguments.callee(color);
        })('');
}

function resetColor() {
    for (var i = 1; i < 10; i++) {
    var boxID="box"+i;
        if(!document.getElementById) return false;
        if(!document.getElementById(boxID)) return false;
        var colorBox = document.getElementById(boxID);
        colorBox.style.backgroundColor = "#ffbb55";
    }
}
function randomBox() {
    var arr=[];
    for(var j=1;j<10;j++){
        arr.push(j);
    }
    arr.sort(function(){return Math.random()-0.2;});
    arr.length=3;
   return arr;
}
function stopShine() {
    if(!document.getElementById) return false;
    if(!document.getElementById("stopbtn")) return false;
    var stopbtn=document.getElementById("stopbtn");
    stopbtn.onclick=function(){
        clearInterval(shineTimer);
       resetColor();

    }
}

addLoadEvent(shine);
addLoadEvent(stopShine);