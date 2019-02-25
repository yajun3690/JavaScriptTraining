var  http = require('http');
var fs = require('fs');

const server = http.createServer(function(req, res){
	//允许其他域请求
	//
	var urls = req.url;
	console.log(urls)
	if(urls == '/favicon.ico'){
		res.end('favicon.ico');
	}
	var filePath  = './'+urls;
	fs.readFile(filePath,function(err,data){
		if(!err){
			res.end(data);
		}else{
			res.end('this is sever2');
		}
	})
  // res.setHeader('Content-Type', 'text/plain');
});

server.listen(3001, '127.0.0.1', function(){
  console.log("Server running at http://127.0.0.1:3001");
});