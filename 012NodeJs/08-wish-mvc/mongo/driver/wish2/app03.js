
//引入mongoose
const mongoose = require('mongoose')
//随机生成数据
const getRandom = (min,max)=>{
	return Math.round(min +(max-min)*Math.random());
}

const names = ['Amy','Tom','Leo','Peter','Ricky','Mike']
const majors = ['art','computer','sport','music']

const getName  = ()=>names[getRandom(0,names.length-1)]
const getMajor  = ()=>majors[getRandom(0,majors.length-1)]


//链接数据库
mongoose.connect('mongodb://localhost/wish',{useNewUrlParser:true});


const db = mongoose.connection;


db.on('error',(err)=>{

	console.log('connection error:::');

	throw err;
});

db.once('open',()=>{
	console.log('connection success');
	//定义Schema  数据格式
	var UserSchema = new mongoose.Schema({
			name:String,
			age:Number,
			major:String
	})
	// 3，生成模型Model
	// 3.1 mongoose.model 第一个参数是指定集合的名称,mongoose会自动变为复数
	// 3.2 mongoose.model 第二个参数指定Schema
	const UserModel = mongoose.model('user',UserSchema)
	//4 用模型操作数据 （crud）创建读取更新删除
/*
    //4.1 插入数据
	const user = new UserModel({name:"Tom",age:18,major:"computer"});
	user.save((err,doc)=>{
		if(err){
			console.log('save user error ::',err)
		}else{
			console.log(doc)
		}
	})
*/

/*
	UserModel.insertMany(
		[
			{
				name:getName(),
				age:getRandom(18,50),
				major:getMajor()
			},
			{
				name:getName(),
				age:getRandom(18,50),
				major:getMajor()
			},
			{
				name:getName(),
				age:getRandom(18,50),
				major:getMajor()
			},
			{
				name:getName(),
				age:getRandom(18,50),
				major:getMajor()
			},
			{
				name:getName(),
				age:getRandom(18,50),
				major:getMajor()
			},
			{
				name:getName(),
				age:getRandom(18,50),
				major:getMajor()
			},
			{
				name:getName(),
				age:getRandom(18,50),
				major:getMajor()
			},
			{
				name:getName(),
				age:getRandom(18,50),
				major:getMajor()
			},
			{
				name:getName(),
				age:getRandom(18,50),
				major:getMajor()
			},
		],(err,doc)=>{
			if(err){
				console.log('insertMany error:::',err)
			}else{
				console.log(doc)
			}
	})
*/
/*

	let promise = 
	UserModel.insertMany(
		[
			{
				name:getName(),
				age:getRandom(18,50),
				major:getMajor()
			},
			{
				name:getName(),
				age:getRandom(18,50),
				major:getMajor()
			},
			{
				name:getName(),
				age:getRandom(18,50),
				major:getMajor()
			},
			{
				name:getName(),
				age:getRandom(18,50),
				major:getMajor()
			},
			{
				name:getName(),
				age:getRandom(18,50),
				major:getMajor()
			},
			{
				name:getName(),
				age:getRandom(18,50),
				major:getMajor()
			},
			{
				name:getName(),
				age:getRandom(18,50),
				major:getMajor()
			},
			{
				name:getName(),
				age:getRandom(18,50),
				major:getMajor()
			},
			{
				name:getName(),
				age:getRandom(18,50),
				major:getMajor()
			},
		])
	promise.then(docs=>{
		console.log(docs);
	})
	.catch(err=>{
		console.log('insertMany error::',err)
	})
*/ 
/*
*/
	UserModel.create(
		[
			{
				name:getName(),
				age:getRandom(18,50),
				major:getMajor()
			},
			{
				name:getName(),
				age:getRandom(18,50),
				major:getMajor()
			},
			{
				name:getName(),
				age:getRandom(18,50),
				major:getMajor()
			},
			{
				name:getName(),
				age:getRandom(18,50),
				major:getMajor()
			},
			{
				name:getName(),
				age:getRandom(18,50),
				major:getMajor()
			},
			{
				name:getName(),
				age:getRandom(18,50),
				major:getMajor()
			},
			{
				name:getName(),
				age:getRandom(18,50),
				major:getMajor()
			},
			{
				name:getName(),
				age:getRandom(18,50),
				major:getMajor()
			},
			{
				name:getName(),
				age:getRandom(18,50),
				major:getMajor()
			},
		],(err,doc)=>{
			if(err){
				console.log('creat error:::',err)
			}else{
				console.log(doc)
			}
	}) 




})
