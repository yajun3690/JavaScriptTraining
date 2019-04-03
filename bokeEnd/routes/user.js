const express = require('express')
const session = require('express-session')
const UserModel = require('../models/user.js')
const hmac = require('../util/hmac.js')
const router = express.Router()
//处理注册
router.post('/register', (req, res) => {
	const {username,password} = req.body
	const result = {
		status:0,
		message:''
	}
	//检查是否已经注册过
	UserModel.findOne({username})
	.then(user =>{
		console.log('user::',user)
		if(user){//能拿到表示存在
			result.status = 10
			result.message = '用户名已存在'
			res.json(result)
		}else{
			//注册用户
			UserModel.insertMany({
				username,
				password:hmac(password),
				// isAdmin:true
			})
			.then(user=>{
				res.json(result)
			})
			.catch(err=>{
				throw err
			})
		}
	})
	.catch(err=>{//数据库错误
		console.log(err)
			result.status = 10
			result.message = '服务器错误,请稍后再试'
			res.json(result)
	})

})
//处理登陆
router.post('/login', (req, res) => {
	const {username,password} = req.body
	const result = {
		status:0,
		message:''
	}
	//检查是否已经注册过
	UserModel.findOne({username,password:hmac(password)},'-password -__v')
	.then(user =>{
		console.log('user::',user)
		if(user){//登陆成功
			result.data = user
			//req.Cookies.set('userInfo',JSON.stringify(user))
			req.session.userInfo = user
			res.json(result)
		}else{
			result.status = 10
			result.message = '用户名或密码不正确'
		}
	})
	.catch(err=>{//数据库错误
		console.log(err)
			result.status = 10
			result.message = '服务器错误,请稍后再试'
			res.json(result)
	})

})
//处理退出
router.get('/logout',(req,res)=>{
	const result = {
		status:0,
		message:''
	}	
	req.session.destroy()
	res.json(result)
})

module.exports = router