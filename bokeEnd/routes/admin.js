const express = require('express')
const UserModel = require('../models/user.js')
const pagination = require('../util/pagination')
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
	res.render('admin/index',{
		userInfo:req.userInfo,
	})
})
//显示用户页面
router.get('/users', (req, res) => {
	const options = {
		page:req.query.page,
		model:UserModel,
		query:{},
		projection:'-password -__v',
		sort:{_id:1}
	}
	pagination(options)
	.then(data=>{
		res.render('admin/user_list',{
			userInfo:req.userInfo,
			users:data.docs,
			page:data.page,
			list:data.list,
			pages:data.pages,
			url:'/admin/users'
		})
	})

})


module.exports = router