const express = require('express')
const multer  = require('multer')
const hmac = require('../util/hmac.js')
const upload = multer({ dest: 'public/uploads/' })
const UserModel = require('../models/user.js')
const CommentModel = require('../models/comment.js')
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
//处理上传图片
router.post('/uploadImage',upload.single('upload'),(req,res)=>{
	const uploadedFilePath = '/uploads/'+req.file.filename
	res.json({
		uploaded:true,
		url:uploadedFilePath
	})
})

//评论列表
router.get('/comments',(req,res)=>{
	CommentModel.getPaginationComments(req)
	.then(data=>{
		res.render('admin/comment_list',{
			userInfo:req.userInfo,
			comments:data.docs,
			page:data.page,
			list:data.list,
			pages:data.pages,
			url:'/admin/comments'
		})		
	})	
})

//处理删除
router.get('/comment/delete/:id',(req,res)=>{
	const { id } = req.params
	CommentModel.deleteOne({_id:id})
	.then(result=>{
		res.render('admin/success',{
			userInfo:req.userInfo,
			message:'删除评论成功',
			url:'/admin/comments'
		})
	})
	.catch(err=>{
		res.render('admin/error',{
			userInfo:req.userInfo,
			message:'添加评论失败,操作数据库错误，请稍后再试'
		})
	})
})
//显示修改密码

router.get('/password',(req,res)=>{
		res.render('admin/password',{
			userInfo:req.userInfo
		})
})

//修改密码
router.post('/password',(req,res)=>{
	const { password }  = req.body
	UserModel.updateOne({_id:req.userInfo._id},{password:hmac(password)})
	.then(result=>{
		req.session.destroy();
		res.render('admin/success',{
			userInfo:req.userInfo,
			message:'更改密码成功,请重新登陆',
			url:'/'
		})
	})
	.catch()
})

module.exports = router