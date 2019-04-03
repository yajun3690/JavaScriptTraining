const express = require('express')
const pagination = require('../util/pagination')
const CategoryModel = require('../models/category.js')
const router = express.Router()
//权限验证 防止未登录 直接进入后台
router.use((req,res,next)=>{
	if(req.userInfo.isAdmin){
		next()
	}else{
		res.send('<h1>请用管理员账号登陆</h1>')
	}
})

//显示分类首页
router.get('/', (req, res) => {
	const options = {
		page:req.query.page,
		model:CategoryModel,
		query:{},
		projection:'-__v',
		sort:{order:1}
	}
	pagination(options)
	.then(data=>{
		res.render('admin/category_list',{
			userInfo:req.userInfo,
			categories:data.docs,
			page:data.page,
			list:data.list
		})
	})	
	res.render('admin/category_list',{
		userInfo:req.userInfo,
	})
})
//显示添加分类页面
router.get('/add', (req, res) => {
	res.render('admin/category_add',{
		userInfo:req.userInfo,
	})
})
//处理添加分类
router.post('/add', (req, res) => {
	const {name,order} = req.body;
	CategoryModel.findOne({name})
	.then(category=>{
		if(category){//数据库已经存在同名分类
			res.render('admin/error',{
				userInfo:req.userInfo,
				message:'添加分类失败,分类已存在'
			})
		}else{
			CategoryModel.insertMany({name,order})
			.then(categories=>{
				res.render('admin/success',{
					userInfo:req.userInfo,
					message:'添加分类成功',
					url:'/category'
				})
				
			})
			.catch(err=>{
				throw err
			})
			
		}
	})
	.catch(err=>{
		res.render('admin/error',{
			userInfo:req.userInfo,
			message:'添加分类失败,操作数据库错误，请稍后再试'
		})
	})
})


module.exports = router