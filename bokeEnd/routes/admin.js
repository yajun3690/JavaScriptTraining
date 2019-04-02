const express = require('express')

const router = express.Router()
//权限验证 防止未登录 直接进入后台
router.use((req,res,next)=>{
	if(req.userInfo.isAdmin){
		next()
	}else{
		res.send('<h1>请用管理员账号登陆</h1>')
	}
})

//显示后台首页
router.get('/', (req, res) => {
	res.render('admin/index')
})


module.exports = router