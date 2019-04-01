
//引入mongoose
const mongoose = require('mongoose')
const UserModel = require('./module/users2.js')
//随机生成数据

//链接数据库
mongoose.connect('mongodb://localhost/wish',{useNewUrlParser:true});


const db = mongoose.connection;


db.on('error',(err)=>{

	console.log('connection error:::');

	throw err;
});

db.once('open',()=>{
	console.log('connection success');
UserModel.insertMany(
		[
			{
				name:'YaJun',
				age:18,
				major:'computer'
			}
		],(err,doc)=>{
			if(err){
				console.log('insertMany error:::',err)
			}else{
				console.log(doc)
			}
	})
});
