(function($){

	function getRandom(min,max){
		return Math.round(min +(max-min)*Math.random());
	}
	// 获取许愿卡
	let $wish = $('.wish');
	// 获取许愿墙
	let $wall = $('.wall');
	// 获取许愿墙宽高和许愿卡宽高
	let wishWidth = $wish.width(),
	    wishHeight = $wish.height(),
	    wallWidth = $wall.width(),
	    wallHeight = $wall.height();
console.log(wishWidth,wishHeight,wallWidth,wallHeight)

	//设置拖拽并限制在容器中 
	$wish.pep({ constrainTo: '.wall' });
	// 设置页面刷新许愿卡随即位置
	$wish.each(function(){
		// 随机X,y
		let x = getRandom(0,wallWidth - wishWidth);
		let y = getRandom(0,wallHeight - wishHeight);
		// 给每个许愿卡绑定初始随即位置
		$(this).css({
			transform:"matrix(1,0,0,1,"+x+","+y+")"			
		});
		console.log(x,y)
	})







})(jQuery);