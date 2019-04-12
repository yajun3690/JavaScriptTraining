const express = require('express')
const CommentModel = require('../models/comment.js')
const router = express.Router()

//验证登录用户
router.use((req,res,next)=>{
	if(req.userInfo){
		next()
	}else{
		res.json({
			status:10,
			message:'用户未登录'
		})
	}
})

router.post("/add",(req,res)=>{
	const {  content,article } = req.body
	CommentModel.insertMany({
		content,
		article,
		user:req.userInfo._id
	})
	.then(comments=>{
		CommentModel.getPaginationComments(req,{article})
		.then(data=>{
			res.json({
				status:0,
				data
			})
		})	
	})
})

//处理评论
router.get('/list',(req,res)=>{
	const { id } = req.query;
	const query = {};
	if(id){
		query.article = id
	}
	CommentModel.getPaginationComments(req,query)
	.then(data=>{
		res.json({
			status:0,
			data
		})
	})
})

module.exports = router