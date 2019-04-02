


const mongoose = require('mongoose');


//1.定义Schema
const UserSchema = new mongoose.Schema({
	username:{
		type:String
	},
	password:{
		type:String
	},
	isAdmin:{
		type:Boolean,
		default:false
	}
});


//2.生成模型Model
const UserModel = mongoose.model('user', UserSchema);

//3.导出模型Model
module.exports = UserModel;