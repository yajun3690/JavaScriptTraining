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
	function addWishPep($elem){

		//设置拖拽并限制在容器中 
		$elem.pep({ constrainTo: '.wall' });
		// 设置页面刷新许愿卡随即位置
		$elem.each(function(){
			// 随机X,y
			let x = getRandom(0,wallWidth - wishWidth);
			let y = getRandom(0,wallHeight - wishHeight);
			// 给每个许愿卡绑定初始随即位置
			$(this).css({
				transform:"matrix(1,0,0,1,"+x+","+y+")"			
			});
		})
		$elem.hover(function(){
			$(this).css({
				zIndex: 999
			})
		},function(){
			$(this).css({
				zIndex: 0
			})
		})
		
	}
	addWishPep($wish);
	//添加许愿卡到服务器
	$('.sub-btn').on('click',function(){
		$.ajax({
			url:'/Wish/add',
			type:'post',
			dataType:'json',
			data:{
				content: $('#content').val()
			}
		})
		.done(function(result){
			if(result.statuCode == 0){
				var $dom = $( `<div class="wish" style="background: ${result.data.color}">
									<a href="javascript:;" class="close" data-id='${result.data.id}'></a>
									${result.data.content}
								</div>`)
				$wall.append($dom);
				addWishPep($dom);
				$('#content').val('');
			}else{ 

				alert(result.message)
			}
		})
	})

	$wall.on('click','.close',function(){
		var $this = $(this)
		$.ajax({
			url:'/Wish/del/'+$this.data('id'),
			dataType:'json',
		})
		.done(function(result){
			if(result.statuCode ==0){
				$(this.parentNode).remove();
			}
			else{
				alert(result.message)
			}
		}.bind(this))


	})




})(jQuery);