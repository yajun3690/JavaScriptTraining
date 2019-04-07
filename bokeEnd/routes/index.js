const express = require('express')
const CategoryModel = require('../models/category.js')
const router = express.Router()

router.get('/', (req, res) => {
	CategoryModel.find({},'name')
	.sort({order:-1})
	.then(categories=>{
		res.render('main/index',{
			userInfo:req.userInfo,
			categories
		})		
	})

})


module.exports = router