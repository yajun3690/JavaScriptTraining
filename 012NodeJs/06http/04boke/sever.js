const http = require('http');
const url  = require('url');
const path = require('path')

const server = http.createServer((req,res)=>{
	console.log('url=>',req.url)
	let reqUrl = url.parse(req.url,true);
	let pathname = reqUrl.pathname
	//若请求的是目录，(目录不带点)返回index.html
	if(pathname.lastIndexOf('.')==-1){
		pathname = pathname + '/index.html';
	}
	console.log(path)
	// 设置文件路径
	let filepath = path.normalize(__dirname + 'boke' +pathname);
	console.log(filepath);
	let extname = path.extname(filepath);
	console.log(extname)





res.setHeader('Content-Type',"text/html;charset=utf-8");
res.end('<h1>'+req.url+'</h1>');
});
server.listen(3000,'127.0.0.1',()=>{
	console.log('server is running at http://127.0.0.1:3000')
})