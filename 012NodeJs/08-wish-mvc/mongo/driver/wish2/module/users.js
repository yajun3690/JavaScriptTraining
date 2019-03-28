//定义schema	
	const mongoose = require('mongoose')
	var UserSchema = new mongoose.Schema({
			name:String,
			age:Number,
			major:String
	})
//生成模型	
	const UserModel = mongoose.model('user',UserSchema)

//导出
	module.exports = UserModel;


