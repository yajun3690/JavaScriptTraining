//crud (create read update delete)

const fs = require('fs');
const util = require('util');

const filePath = './data.json';
// 读取文件promise
const readFile = util.promisify(fs.readFile);
// 写入文件promis
const writeFile = util.promisify(fs.writeFile);

/*
const add = (name,callback)=>{
	//1.获取原有的数据
	fs.readFile(filePath,(err,data)=>{
		if(err){
			callback(err);
		}else{
			//console.log(data);
			//解析，转换json数据为数组
			let arr = JSON.parse(data);
			//2.添加数据到原有的数据中
			//数组中写入信息
			arr.push({
				//当前写入信息的ID转为字符串+/生成随机数*10000/取整/转字符串/自动填充默认4位
				id:Date.now().toString()+parseInt(Math.random()*10000).toString().padStart(4,'0'),
				name:name
			});
			//转为json数据
			let strArr = JSON.stringify(arr);
			//3.保存，写入文件
			fs.writeFile(filePath,strArr,(err)=>{
				if(err){
					//回调错误信息
					callback(err);
				}else{
					//回调，输入信息
					callback(null,arr);
				}
			})
		}
	});
	
	
}
add('Tom',(err,data)=>{
	if(err){
		console.log('err::',err);
	}else{
		console.log(data);
	}
});
*/

//async异步处理
async function add(name){
	//1.获取原有的数据
	//异步操作await
	let data = await readFile(filePath);
	let arr = JSON.parse(data);
	//2.添加数据到原有的数据中
	arr.push({
		id:Date.now().toString()+parseInt(Math.random()*10000).toString().padStart(4,'0'),
		name:name
	});
	let strArr = JSON.stringify(arr);
	//3.保存
	await writeFile(filePath,strArr);

	return arr;
	
}
add('Leo')
.then(data=>{
	console.log(data);
})
.catch(err=>{
	console.log(err);
})