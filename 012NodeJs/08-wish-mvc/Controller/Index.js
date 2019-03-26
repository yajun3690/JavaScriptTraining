class Index{
	index(req,res,...args){

		
		res.setHeader('Content-Type',"text/html;charset=utf-8");
		res.end('<a href="/Wish/index">去许愿</a>')

	}

}

module.exports =  new Index();