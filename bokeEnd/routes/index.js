const express = require('express')
const CategoryModel = require('../models/category.js')
const ArticleModel = require('../models/article.js')
const CommentModel = require('../models/comment.js')
const router = express.Router()

async function getCommonData(){
	
	const categoriesPromise = CategoryModel.find({},'name').sort({order:-1});
	const topArticlesPromise = ArticleModel.find({},'_id click title').sort({click:-1}).limit(10)

	const categories = await categoriesPromise;
	const topArticles = await topArticlesPromise

	return {
		categories,
		topArticles
	}
}
//显示首页
router.get('/', (req, res) => {
	getCommonData(req)
	.then(data=>{
		const {categories,topArticles} = data;
		ArticleModel.getPaginationArticles(req)
		.then(pageArticles=>{
			res.render('main/index',{
				userInfo:req.userInfo,
				categories,
				topArticles,
				//首页文章分页数据
				articles:pageArticles.docs,
				page:pageArticles.page,
				second:pageArticles.second,
				list:pageArticles.list,
				pages:pageArticles.pages,		
			})			
		})
		
	})

})

//处理文章信息
router.get('/articles',(req,res)=>{
	const { id } = req.query;
	const query = {};
	if(id){
		query.category = id
	}
	ArticleModel.getPaginationArticles(req,query)
	.then(data=>{
		res.json({
			status:0,
			data
		})
	})
})

async function getDetailData(req){
	const {id} = req.params
	const commentDataPromise = getCommonData();
	const articleDataPromise = ArticleModel.findOneAndUpdate({_id:id},{$inc:{click:1}},{new:true})
		.populate({path:"user",select:'username'})
		.populate({path:'category',select:'name'})

	const commentPagePromise = CommentModel.getPaginationComments(req,{article:id})
	const data = await commentDataPromise;
	const article = await articleDataPromise;
	const pageData = await commentPagePromise;

	const {categories,topArticles} = data;

	return{
		categories,
		topArticles,
		article,
		pageData
	}

}

//详情页
router.get('/view/:id',(req,res)=>{
	getDetailData(req)
	.then(data=>{
		const {categories,topArticles,article,pageData} = data;
		res.render('main/detail',{
			userInfo:req.userInfo,
			categories,
			topArticles,
			article,
			//回传分类id,为了详情页对应导航选中
			category:article.category._id,
			//评论分页数据
			comments:pageData.docs,
			page:pageData.page,
			list:pageData.list,
			pages:pageData.pages	
		})	
	})
})

router.get('/second/:id',(req,res)=>{
	const {id} = req.params
	getCommonData()
	.then(data=>{
		const {categories,topArticles} = data;
		ArticleModel.getPaginationArticles(req,{category:id})
		.then(pageArticles=>{
			res.render('main/second',{
				userInfo:req.userInfo,
				categories,
				topArticles,
				//首页文章分页数据
				articles:pageArticles.docs,
				page:pageArticles.page,
				list:pageArticles.list,
				pages:pageArticles.pages,
				//回传分类id
				category:id
			})			
		})
	})
})

module.exports = router