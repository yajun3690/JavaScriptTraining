const fs = require('fs');
const util = require('util');

const filePath = './data/wish.json';
// 读取文件promise
const readFile = util.promisify(fs.readFile);
// 写入文件promis
const writeFile = util.promisify(fs.writeFile);


const arrColor = ['#f96','#ff8','#f51','#b54','#f6b','#df5','#a12','#df2','#b12','#f55','#f22']
//async异步处理

function getRandom(min,max){
	return Math.round(min +(max-min)*Math.random());
}


async function add(options){
	//1.获取原有的数据
	let data = await readFile(filePath);
	let arr = JSON.parse(data);

	console.log(arr)
	//2.添加数据到原有的数据中
	options.id = Date.now().toString()+parseInt(Math.random()*10000).toString().padStart(4,'0');
	options.color = arrColor[getRandom(0,arrColor.length-1)];
	arr.push({
		id:options.id,
		color:options.color,
		content:options.content
	});
	let strArr = JSON.stringify(arr);
	//3.保存
	await writeFile(filePath,strArr);
	return options;
	
}
async function getAll(){
	//1.获取原有的数据
	let data = await readFile(filePath);
	let arr = JSON.parse(data);	
	//2.查找对应id的对象
	return arr
}
async function remove(id){
	//1.获取原有的数据
	let data = await readFile(filePath);
	let arr = JSON.parse(data);
	//2.过滤
	let newArr = arr.filter(val=>{
		return val["id"] != id;
	})	
	let strArr = JSON.stringify(newArr);
	//3.保存
	await writeFile(filePath,strArr);
	return newArr;	
}
module.exports = {
	add,
	getAll,
	remove
}