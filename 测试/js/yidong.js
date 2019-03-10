;(function($){
//动作方式
		var slient = {
			show:function($item,l,t,color,sizeW,sizeH){
				$item.offset({
					left:l,
					top:t
				})
				$item.css({background:color,width:sizeW,height:sizeH});
				var s = 0;
				$item.on('click',function(){
					if(s%2==0){
						$item.trigger('toTop');
						s+=1;
					}else{
						$item.trigger('toBottom');
						s+=1;
					}
				})
			}
		}

		var $item = $('#box');
		$item.on('toTop toBottom',function(ev){
				if(ev.type == 'toTop'){
					$item.offset({left:0,top:0});
				}else if(ev.type == 'toBottom'){
					$item.offset({left:window.innerWidth-$item.width(),top:window.innerHeight-$item.height()});
				}
		})

		var DEFAULTS = {
			l:200,
			t:200,
			color:'red',
			sizeW:200,
			sizeH:200
		}
	$.fn.extend({
		showHide:function(options){
				var options = $.extend({},DEFAULTS,options);
			return this.each(function(index,value){
					slient.show($item,options.l,options.t,options.color,options.sizeW,options.sizeH);
			});							
		}
	})


})(jQuery)