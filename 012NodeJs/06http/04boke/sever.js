const http = require('http');
const path = require('path');
const fs = require('fs');
const url = require('url');

const mime = require('./mime.json')
const server = http.createServer((req,res)=>{
 	console.log('url=>',req.url);
 	let reqUrl = url.parse(req.url,true);
 	let pathname = reqUrl.pathname;
 	//约定获取为目录时返回index
 	if(pathname.lastIndexOf('.') == -1){//获取文件目录是否有.
 		pathname = pathname + '/index.html';
 	}
 	//规范路径 去除多余/
 	let filePath = path.normalize(__dirname + '/boke/' +pathname)
	let extname = path.extname(filePath);

	fs.readFile(filePath,(err,data)=>{
		if(err){
			res.setHeader('Content-Type',"text/html;charset=utf-8");
			res.end('<h1>出错啦!</h1>');
		}else{
			res.setHeader('Content-Type',mime[extname]+";charset=utf-8");
			res.end(data);			
		}
	})
});

server.listen(3000,'127.0.0.1',()=>{
	console.log('server is running at http://127.0.0.1:3000')
})