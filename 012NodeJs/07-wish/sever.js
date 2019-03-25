const http = require('http');
const url = require('url');
const path = require('path');
const fs = require('fs');
const queryString = require('querystring')

const swig = require('swig')
const mime = require('./mime.json');

const { getAll,add,remove} = require('./wishjs.js')


const server = http.createServer((req,res)=>{
	let reqUrl = url.parse(req.url,true);
	let pathname = reqUrl.pathname;
	console.log(reqUrl)
	if(pathname == '/' || pathname == '/index.html'){//获取首页
		getAll()
		.then(data=>{
			let template = swig.compileFile(__dirname + '/static/index.html');
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
	else if(pathname =='/add' && req.method.toLowerCase() =='post'){//添加到服务器
		//获取参数
		let body = '';
		req.on('data',(chunk)=>{
			body += chunk;
		})
		req.on('end',()=>{
			let obj = queryString.parse(body);
			add(obj)
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
	else if(pathname =='/del'){
		let id = reqUrl.query.id;
		remove(id)
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
	else{//请求静态资源
		let filePath =path.normalize(__dirname + '/static/'+pathname);
		let extname = path.extname(filePath);

		fs.readFile(filePath,(err,data)=>{
			if(err){
				res.setHeader('Content-Type',"text/html;charset=utf-8");
				res.end('<h1>出错啦!</h1>');
			}else{
				res.setHeader('Content-Type',mime[extname]+";charset=utf-8");
				res.end(data);
			}
		});
	}
});

server.listen(3000,'127.0.0.1',()=>{
	console.log('server is running at http://127.0.0.1:3000')
})