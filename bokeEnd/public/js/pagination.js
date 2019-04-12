;(function($){
	$.fn.extend({
		pagination:function(options){
			var $elem = $(this);

			$elem.on('click','a',function(){
				var $this = $(this);
				//计算页码
				var page = 1;
				//1.获取当前页
				var currentPage = $elem.find('.active a').html()

				var labelText = $this.attr('aria-label');
				if(labelText == 'Next'){
					page = currentPage*1 + 1
				}
				else if(labelText == 'Previous'){
					page = currentPage - 1
				}
				else{
					page = $this.html()
				}
				if(currentPage == page){
					return false;
				}
				var url = options.url+"?page="+page;
				var id = $elem.data('id')
				if(id){
					url += '&id='+id
				}
				//发送请求
				$.ajax({
					url:url,
					dataType:'json'
				})
				.done(function(result){
					if(result.status == 0){
						$elem.trigger('get-data',result.data)
					}
				})
				.fail(function(err){
					console.log(err)
				})
			})
		}
	})
})(jQuery);