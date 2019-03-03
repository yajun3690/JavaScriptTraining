/*
* @Author: TomChen
* @Date:   2019-02-27 20:22:10
* @Last Modified by:   TomChen
* @Last Modified time: 2019-02-27 20:42:02
*/
;(function($){

function DropDown($item,options){
	//1.罗列属性
	this.$item = $item;
	this.options = options;
	this.$layer = $item.find('.dropdown-layer');
	this.activeClass = $item.data('active')+'-active';
	//2.初始化
	this.init();
}
DropDown.prototype = {
	constructor:DropDown,
	init:function(options){
		//1.初始化显示隐藏插件
		this.$layer.showHide(this.options)
		//2.监听显示隐藏事件
		this.$layer.on('show shown hide hidden',function(ev){
			this.$item.trigger('dropdown-'+ev.type);
		}.bind(this));
		//3.绑定事件
		if(this.options.eventName){
			this.show();
		}else{
			this.$item.hover($.proxy(this.show,this),$.proxy(this.hide,this))
		}
	},
	show:function(options){
		// 定时器
		if(this.options.delay){
			setTimeout(function(){
				this.$layer.showHide('show');
				this.$item.addClass(this.activeClass);				
			}.bind(this),this.options.delay)
		}else{
			this.$layer.showHide('show');
			this.$item.addClass(this.activeClass);
		}
	},
	hide:function(){
		clearTimeout();
		this.$layer.showHide('hide');
		this.$item.removeClass(this.activeClass);
	}
}
DropDown.DEFAULTS = {
	js:true,
	mode:'slideDownUp',
	delay:0,
	eventName:''
}



$.fn.extend({
	dropdown:function(options){
		//console.log(this)
		return this.each(function(){
			var $item = $(this);
			options = $.extend({},DropDown.DEFAULTS,options);
			new DropDown($item,options)
		});
	}
})
	
})(jQuery);







