;(function($){
	var passwordReg = /^\w{3,6}$/;
	$('#btn-sub').on('click',function(){
		//获取表单数据
		var password = $('[name="password"]').val();
		var repassword = $('[name="repassword"]').val();
		 var $errs = $('.err')
		if(!passwordReg.test(password)){
			$errs.eq(0).html('密码为3-6位字符')
			return false;
		}else{
			$errs.eq(0).html('')
		}
		//密码是否一致

		if(password != repassword){
			errMsg = '两次密码不一致'
			$errs.eq(1).html('两次密码不一致')
			return false;
		}else{
			$errs.eq(1).html('')
		}
	})

})(jQuery);