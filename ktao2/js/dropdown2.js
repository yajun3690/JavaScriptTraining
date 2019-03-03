;(function($){
	function DropDown(){
		// 罗列属性

		// 初始化
	}
	DropDown.prototype = {
		constructor:DropDown
	}





	$.fn.extend({
		dropdown:function(){
			return this.each(function(){
				var $item = $(this);
				new DropDown($item)

			})
		}



	})











})(jQuery)