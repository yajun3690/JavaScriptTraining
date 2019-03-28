
//引入mongoose
const mongoose = require('mongoose')
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
    //4.1 插入模型

 
/*
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

//4.2查找
UserModel.find({},(err,docs)=>{
 		if(err){
			console.log('save user error ::',err)
		}else{
			console.log(docs)
		}
})
 */

/*
//4.3更新 Update将被遗弃，可写为updateOne
UserModel.updateOne({name:'Tom'},{age:88},(err,docs)=>{
 		if(err){
			console.log('update user error ::',err)
		}else{
			console.log(docs)
		}
})

*/
//4.4 删除 deleteOne deleteMany 
UserModel.deleteOne({name:'Tom'},(err,result)=>{
 		if(err){
			console.log('deleteOne user error ::',err)
		}else{
			console.log(result)
		}
})


})
