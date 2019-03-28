
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

	// let arr = [];
	// for(i=0;i<10;i++){
	// 	arr.push({name:getName(),
	// 			age:getRandom(18,50),
	// 			major:getMajor()})
	// }
	// UserModel.create(arr,(err,doc)=>{
	// 		if(err){
	// 			console.log('creat error:::',err)
	// 		}else{
	// 			console.log(doc)
	// 		}
	// }) 

/*

	UserModel.find({},(err,doc)=>{
			if(err){
				console.log('creat error:::',err)
			}else{
				console.log(doc)
			}
	})
*/

/*
// 查找 映射显示单项
	UserModel.find({age:{$gt:30}},"name -_id",{skip:1},(err,doc)=>{
			if(err){
				console.log('creat error:::',err)
			}else{
				console.log(doc)

			}
	})
*/



/*

// 查找  忽略映射null
	UserModel.find({age:{$gt:30}},null,{skip:1},(err,doc)=>{
			if(err){
				console.log('creat error:::',err)
			}else{
				console.log(doc)

			}
	})
*/

/*
//排序 sort -1降序 1升序 ，返回query对象
	UserModel.find({age:{$gt:30}},null,{sort:{age:-1}},(err,doc)=>{
			if(err){
				console.log('creat error:::',err)
			}else{
				console.log(doc)

			}
	})
*/

/*
	UserModel.findById('5c9c88a5977e401d24ede235',(err,doc)=>{
			if(err){
				console.log('creat error:::',err)
			}else{
				console.log(doc)

			}
	})
*/
/*
	//查找符合条件的第一个
	UserModel.findOne({age:{$gt:30}},(err,doc)=>{
			if(err){
				console.log('creat error:::',err)
			}else{
				console.log(doc)

			}
	})
*/
/*
	// 更新 update updateOne updateMany
	UserModel.updateMany({age:{$gt:30}},{age:100},(err,doc)=>{
			if(err){
				console.log('creat error:::',err)
			}else{
				console.log(doc)

			}
	})
*/
/*
	// 删除 delete deleteOne deleteMany
	UserModel.deleteMany({name:'Peter'},(err,doc)=>{
			if(err){
				console.log('deleteOne error:::',err)
			}else{
				console.log(doc)

			}
	})
*/



/*


*/
	//名称去重复打印在控制台
	UserModel.distinct("name",{age:{$gt:30}},(err,doc)=>{
			if(err){
				console.log('distinct error:::',err)
			}else{
				console.log(doc)

			}
	})



})
