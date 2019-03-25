
const formidable = require('formidable')
const http = require('http');
const queryString = require('querystring');
const server = http.createServer((req,res)=>{
	console.log('url=>',req.url,'method=>',req.method);// /?username=xx&age=34

	if(req.method.toLowerCase()=='post'){
		let form = new formidable.IncomingForm();
		form.uploadDir = "./upload";
		form.keepExtensions = true;
		form.parse(req,function(err,fields,files){
			console.log({fields:fields,files:files});
			res.setHeader('Content-Type',"text/html;charset=UTF-8");
			res.end('kuazhu');
		})
	}

});

server.listen(3000,'127.0.0.1',()=>{
	console.log('server is running at http://127.0.0.1:3000')
})