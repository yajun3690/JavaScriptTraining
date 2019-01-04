var  http = require('http');
var fs = require('fs');

const server = http.createServer(function(req, res){
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
			res.end('write enter file url');
		}
	})
  // res.setHeader('Content-Type', 'text/plain');
});

server.listen(3000, '10.196.14.57', function(){
  console.log("Server running at http://10.196.14.57:3000");
});