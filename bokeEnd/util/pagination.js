/*
page:请求页码
model:数据模型
query:查询条件
projection:投影
sort:排序
populates:关联的数组

*/



async function pagination(options){
	
	let { page,model,query,projection,sort,populates } = options;

	const limit = 3;

	page = parseInt(page)

	if(isNaN(page)){
		page = 1;
	}

	if(page ==0){
		page = 1;
	}

	const count = await model.countDocuments(query);

	//计算总页数
	const pages = Math.ceil(count / limit)
	if(page > pages){
		page = pages
	}
	if(pages == 0){
		page = 1;
	}
	//生成页码数组
	const list = [];
	for(let i = 1;i<=pages;i++){
		list.push(i)
	}

	//跳过条数
	const skip = (page -1) * limit	
	let result = model.find(query,projection);
	if(populates){
		populates.forEach(populate=>{
			result = result.populate(populate);
		})
	}
	const docs= await result.sort(sort).skip(skip).limit(limit)
	
	return {
		docs,
		page,
		list,
		pages
	}
}

module.exports = pagination