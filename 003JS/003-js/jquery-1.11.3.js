var box=$('.box');//主体内容的父级
var con=$('.content');//滑动的主体内容
var bar=$('.bar');//滑动条
var btn=$('.btn');//滑动槽
//自定义条状滑动条的长度
    /*new_h = box.height() * bar.height() / con.height();
    btn.css("height", new_h);*/
//初始化滑动条和滑动内容的位置
    /* bth.style.top = 0;
    con.style.marginTop=0;*/
var e = e || window.event;
 
var ay = parseInt(bar.height() - btn.height());//手柄可滑动距离
var by = parseInt(con.height() - box.height());//主体内容可滑动的内容
 
var ismove = 1;
var startY = 0;
var positionY=0;
var newTop,distanceMove,distanceMain;
 
btn.mousedown(function(e){
    startY = e.clientY;
    positionY = parseInt(btn.position().top);
    ismove = 2;
    btn.addClass('active');
    return false;//阻止浏览器默认事件，比如拖拽鼠标会选中文字
});
btn.mouseup(function(){
    ismove = 1;
    btn.removeClass('active');
    return false;
});
btn[0].onmousemove=function(e){
    stopDefault(e);
    if (ismove == 2){
        btn.addClass('active');
        distanceMove = e.clientY - startY;
        newTop = positionY + distanceMove;
        if (newTop < 0){
            newTop = 0;
        }else if(newTop > ay){
            newTop = ay;
        }
        distanceMain = - newTop * by / ay;
        btn.css('top', newTop);
        con.css('margin-top',distanceMain);
    }
    return false;
};
$(document).mouseup(function(){
    btn.mouseup();
})
$(document).mousemove(function(e){
    if(ismove == 2){
        btn[0].onmousemove(e);
    }
})
 
//点击滚动槽的事件
var topCommon = box.offset().top-$(window).scrollTop();//元素到文档边框的距离
var btnHeight =btn.height();
bar.click(function (e) {
    var e = e || window.event;
    var distancsMove = e.clientY - topCommon - btnHeight/2;
    var distanceMain = - distancsMove * by / ay;
    con.animate({marginTop: distanceMain}, 100);
    btn.animate({top: distancsMove}, 100);
    return false;
})
 
//鼠标滚轮事件
 box.on("mousewheel DOMMouseScroll", function (e){
        var delta = (e.originalEvent.wheelDelta && (e.originalEvent.wheelDelta > 0 ? 1 : -1)) ||  // chrome & ie
            (e.originalEvent.detail && (e.originalEvent.detail > 0 ? -1 : 1));      //detail是firefox的属性
        var newBtop = parseInt(btn.css('top'));
        var newCtop = 0;
        if(delta < 0){ //向下滚动滑轮
            newBtop += 20;
            newCtop = -newBtop * by / ay;
            if (newBtop > ay) {
                newBtop = ay;
                newCtop = -by;
            }
            btn.css('top', newBtop);
            con.css("margin-top", newCtop);
            return false;
        }else if (delta > 0){    //向上滚动滑轮
            newBtop -= 20;
            newCtop = -newBtop * by / ay;
            if (newBtop < 0){
                newBtop = 0;
                newCtop = 0;
            }
            btn.css('top', newBtop);
            con.css("margin-top", newCtop);
            return false;
        }
        return false;
    })
function stopDefault(e) {
    //阻止默认浏览器动作(W3C)
    if (e && e.preventDefault){
        e.preventDefault();
    }else{//IE中阻止函数器默认动作的方式
        window.event.returnValue = false;
    }
    return false;
}

