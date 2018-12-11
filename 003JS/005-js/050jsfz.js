	var timer = 0;
	function sssss(obj,attr,target,isLinear,fnEnd){
		//默认设置为匀速动画。
		if(isLinear==undefined){
			isLinear=1;
		}
		//防止开启多个定时器。
		clearInterval(obj.timer);
		var iSpeed = 0;
		//循环添加位置，形成动画。
		obj.timer =	setInterval(function(){
		//初始化停止动画的变量。
		var isStopLiner = 0;
		//获取当前目标参数。
		var courent = parseFloat(getComputedStyle(obj,false)[attr]);
			//判断是否为opacity属性。
			if(attr=='opacity'){
				courent=Math.round(courent*100);
			}
			//匀速减速动画判断。
			if(isLinear){
			//匀速动画变化方向判断。
				if (courent>target) {
					iSpeed = -10;
				}else {
					iSpeed= 10;
				}
			//匀速动画与目标距离判断。
				if(Math.abs(target-courent)<Math.abs(iSpeed)){
			//判断是否为opacity属性。			
					if(attr=='opacity'){
						obj.style[attr]=target;
					}else{
						obj.style[attr]=target+'px';
					}
			//表示可以结束循环
					isStopLiner = 1;
				}
			}else{
			//减速动画速度设置。
				iSpeed = (target-courent)/10;
			//减速动画变化方向判断。
				iSpeed>0?iSpeed=Math.ceil(iSpeed):iSpeed=Math.floor(iSpeed);
			//减速动画是否到达目标值判断。
				if(!iSpeed){
			//表示可以结束循环。
					isStopLiner = 1;
				}
			}
			//判断是否执行结束循环语句。
			if(isStopLiner){
				clearInterval(obj.timer);
				typeof fnEnd == 'function' && fnEnd();
			}else{
			//继续循环动画语句。
				if(attr=='opacity'){
				obj.style[attr]=(courent+iSpeed)/100;
				}
				else{
				obj.style[attr]=courent+iSpeed+'px';					
				}
			}
			},30)	
	}



//获取scroll兼容函数
function getScrollTop(){
	return window.pageYOffset || document.documentElement.scrollTop();
}