const express = require('express')
const CategoryModel = require('../models/category.js')
const pagination = require('../util/pagination.js')
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
		sort:{order:-1}
	}
	pagination(options)
	.then(data=>{
		res.render('admin/category_list',{
			userInfo:req.userInfo,
			categories:data.docs,
			page:data.page,
			list:data.list,
			pages:data.pages,
			url:'/category'
		})
	})	
})
//显示添加分类页面
router.get('/add', (req, res) => {


	res.render('admin/category_add',{
		userInfo:req.userInfo
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

//显示编辑页面
router.get('/edit/:id',(req,res)=>{
	const { id } = req.params
	CategoryModel.findById(id)
	.then(category=>{
			res.render('admin/category_edit',{
				userInfo:req.userInfo,
				category
			})
	})
})
//处理编辑
router.post('/edit',(req,res)=>{
	const { id,name,order } = req.body
	CategoryModel.findById(id)
	.then(category=>{
		if(category.name == name && category.order == order ){
			res.render('admin/error',{
				userInfo:req.userInfo,
				message:'请修改后再提交'
			})			
		}else{
			CategoryModel.findOne({name:name,_id:{$ne:id}})
			.then(newcategory=>{
				if(newcategory){
					res.render('admin/error',{
						userInfo:req.userInfo,
						message:'分类已存在'
					})	
				}else{
					CategoryModel.updateOne({_id:id},{name,order})
					.then(result=>{
						res.render('admin/success',{
							userInfo:req.userInfo,
							message:'修改分类成功',
							url:'/category'
						})					
					})
					.catch(err=>{
						throw err
					})
				}
			})
			.catch(err=>{
				throw err
			})
		}
	})
	.catch(err=>{
		res.render('admin/error',{
			userInfo:req.userInfo,
			message:'修改分类失败,操作数据库错误，请稍后再试'
		})



	})
})

//处理删除
router.get('/delete/:id',(req,res)=>{
	const { id } = req.params
	CategoryModel.deleteOne({_id:id})
	.then(result=>{
		res.render('admin/success',{
			userInfo:req.userInfo,
			message:'删除分类成功',
			url:'/category'
		})
	})
	.catch(err=>{
		res.render('admin/error',{
			userInfo:req.userInfo,
			message:'添加分类失败,操作数据库错误，请稍后再试'
		})
	})
})


module.exports = router