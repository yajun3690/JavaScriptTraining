/*
page:请求页码
model:数据模型
query:查询条件
projection:投影
sort:排序


*/



async function pagination(options){
	
	let { page,model,query,projection,sort } = options;

	const limit = 3;

	page = parseInt(page)

	if(isNaN(page)){
		page = 1;
	}

	if(page ==0){
		page = 1;
	}

	const count = await model.countDocuments(query)

	//计算总页数
	const pages = Math.ceil(count / limit)
	if(page > pages){
		page = pages
	}
	//生成页码数组
	const list = [];
	for(let i = 1;i<=pages;i++){
		list.push(i)
	}

	//跳过条数
	const skip = (page -1) * limit	

	const docs= await model.find({query,projection}).sort(sort).skip(skip).limit(limit)
	
	return {
		docs,
		page,
		list		
	}
}

module.exports = pagination