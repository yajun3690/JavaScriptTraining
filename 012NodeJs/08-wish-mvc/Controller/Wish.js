
const querystring = require('querystring');
const swig = require('swig')


const { getAll,add:addWish,remove} = require('../Model/Wishjs.js')


class Wish{
	index(req,res,...args){
		getAll()
		.then(data=>{
			let template = swig.compileFile(__dirname+'/../View/Wish/index.html');
			let html = template({
				data
			})
			res.setHeader('Content-Type',"text/html;charset=utf-8");
			res.end(html);			
		})
		.catch(err=>{
			console.log('get data err::;',err);
			res.setHeader('Content-Type',"text/html;charset=utf-8");
			res.statuCode = 500;
			res.end('<h1>服务器读取数据失败!</h1>');
		})		
	}
	add(req,res,...args){
		let body = '';
		req.on('data',(chunk)=>{
			body += chunk;
		})
		req.on('end',()=>{
			let obj = querystring.parse(body);
			addWish(obj)
			.then((data)=>{
				let result = JSON.stringify({
					statuCode:0, //成功
					data:data
				})
				res.end(result);
			})
			.catch(ero=>{
				let result = JSON.stringify({
					statuCode:10, //失败
					message:'添加失败'
				})
				res.end(result);
			})
		})
	}
	del(req,res,...args){
		remove(args[0])
		.then(data=>{
			let result = JSON.stringify({
				statuCode:0, //成功
			})
			res.end(result);			
		})
		.catch(ero=>{
			let result = JSON.stringify({
				statuCode:10, //失败
				message:'删除失败'
			})
			res.end(result);			
		})

	}	
}


module.exports =  new Wish();
