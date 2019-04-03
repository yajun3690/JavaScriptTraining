;(function($){
	$('#logout').on('click',function(){
		 var errMsg = ''
		 var $err = $login.find('.err')
		$.ajax({
			url:'/user/logout'
		})
		.done(function(result){
			if(result.status == 0){
				window.location.reload()
			}else{
				$err.html(result.message)
			}
		})
		.fail(function(err){
			$err.html('数据请求失败，请稍后再试')			
		})
	})


})(jQuery);