var http = require('http');
var fs = require('fs');

const server = http.createServer(function(req,res){
	//允许其他域请求
	//设置请求头
	res.setHeader('Access-Control-Allow-Orign','http://10.214.163.46:3001')
	//地址栏中的输入路径
	var urls = req.url;
	console.log(urls);
	if(urls == '/favicon.ico'){
		res.end('favicon.ico');
	}
	var filePath  = './'+urls;
	fs.readFile(filePath,function(err,data){
		if(!err){
			res.end(data);
		}else{
			res.end('this is writeSever1');
		}
	})
	//res.setHeader('content','text/plain');

});


server.listen(3000,'10.214.163.46',function(){
	console.log('server runing at http://10.214.163.46:3000')
})