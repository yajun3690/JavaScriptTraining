//定义schema	
	const mongoose = require('mongoose')
	var UserSchema = new mongoose.Schema({
			name:{
				type:String,
				require:[true,''],
				maxlength:[5,''],
				minlength:[2,''],
			},
			age:Number,
			major:String,
			createAt:{
				type:Date,
				default:Date.now,
			}
	})
//生成模型	
	const UserModel = mongoose.model('user',UserSchema)

//导出
	module.exports = UserModel;


