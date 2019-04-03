;(function($){
	//1,登陆和注册面板的切换
	var $login = $('#login');
	var $register = $('#register');
	//1.1从登录到注册
	$('#go-register').on('click',function(){
		$login.hide();
		$register.show();
	})
	//注册到登陆
	$('#go-login').on('click',function(){
		$register.hide();
		$login.show();
	})
	var usernameReg = /^[a-z][0-9a-z]{2,9}$/i;
	var passwordReg = /^\w{3,6}$/;
	//2，用户注册
	$('#sub-register').on('click',function(){
		//获取表单数据
		var username = $register.find('[name="username"]').val();
		var password = $register.find('[name="password"]').val();
		var repassword = $register.find('[name="repassword"]').val();

		//验证
		//用户名以字母开头，包含数组下划线的3-10位字符
		 var errMsg = ''
		 var $err = $register.find('.err')
		if(!usernameReg.test(username)){
				errMsg = '用户名以字母开头，包含数组下划线的3-10位字符'
		}
		//密码
		else if( !passwordReg.test(password)){
				errMsg = '密码3-6'
		}
		else if(password != repassword){
			errMsg = '两次密码不一致'
		}

		if(errMsg){//验证不通过
			$err.html(errMsg)
			return;
		}else{
				//发送ajax提交数据
			$.ajax({
				url:'/user/register',
				type:'post',
				dataType:'json',
				data:{
					username:username,
					password:password
				}
			})
			.done(function(result){
				if(result.status == 0){
					$('#go-login').trigger('click')
				}else{
					$err.html(result.message)
				}
			})
			.fail(function(err){
				$err.html('数据请求失败，请稍后再试')
			})
		}
	})
	//3，用户登陆
	$('#sub-login').on('click',function(){
		//获取表单数据
		var username = $login.find('[name="username"]').val();
		var password = $login.find('[name="password"]').val();

		//验证
		//用户名以字母开头，包含数组下划线的3-10位字符
		 var errMsg = ''
		 var $err = $login.find('.err')
		if(!usernameReg.test(username)){
				errMsg = '用户名以字母开头，包含数组下划线的3-10位字符'
		}
		//密码
		else if( !passwordReg.test(password)){
				errMsg = '密码3-6'
		}
		if(errMsg){//验证不通过
			$err.html(errMsg)
			return;
		}else{
				//发送ajax提交数据
			$.ajax({
				url:'/user/login',
				type:'post',
				dataType:'json',
				data:{
					username:username,
					password:password
				}
			})
			.done(function(result){
				if(result.status == 0){
					/*
					$login.hide();
					$('#user-info span').html(result.data.username)
					$('#user-info').show();
					*/
					window.location.reload()
				}else{
					$err.html(result.message)
				}
			})
			.fail(function(err){
				$err.html('数据请求失败，请稍后再试')
			})
		}
	})
/*
	//4,用户退出
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
*/

})(jQuery);