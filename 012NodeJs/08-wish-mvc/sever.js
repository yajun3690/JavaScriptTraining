const http = require('http');
const url = require('url');
const fs = require('fs');
const path = require('path');
const mime = require('./mime.json');



const server = http.createServer((req,res)=>{
	let reqUrl = url.parse(req.url,true);
	let pathname = reqUrl.pathname;
	// 约定MVC
	// 1,请求以/static/开始的路径认为是静态资源
	//2.对于路由请求的约定: /Controller/action/arg1/arg2....
	//					 /Wish/add
	//					 /Wish/del/12345676
	//					 /Wish/index
	if(pathname.startsWith('/static/')){//静态资源处理
		let filePath =path.normalize(__dirname + pathname);
		
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
	else{//路由处理
		// 以/为界分割数组
		let paths = pathname.split('/');
		// 默认处理，若拿不到第一项的值添加Wish
		let controller = paths[1] || 'Wish';

		// 默认处理，若拿不到第一项的值添加index
		let action = paths[2] || 'index';
		//第三项以后归为一个数组
		let args = paths.slice(3);
		try{
			// 引入mode Wish
			let mode = require('./controller/'+controller);
			// 调用mode wish对象中的对应 函数,传入参数
			mode[action] && mode[action].apply(null,[req,res].concat(args));
		}
		catch(err){
			// console.log('err::',err);
			res.setHeader('Content-Type',"text/html;charset=utf-8");
			res.end('<h1>出错啦!</h1>');
		}
	}	

});

server.listen(3000,'127.0.0.1',()=>{
	console.log('server is running at http://127.0.0.1:3000')
})