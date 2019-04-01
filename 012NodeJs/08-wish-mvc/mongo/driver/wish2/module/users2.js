//定义schema	
	const mongoose = require('mongoose')
	var UserSchema = new mongoose.Schema({
			name:{
				type:String,
				maxlength:[8,'max eight length'],
				minlength:[3,'min three length'],
				default:'Mark'
			},
			age:{
				type:Number,
				require:[true,''],
				max:[40,'max fourty'],
				min:[18,'min eighteen']
			},
			major:{
				type:String,
				enum:['computer','sport','art','music']
			}
	})
//生成模型	
	const UserModel = mongoose.model('user',UserSchema)

//导出
	module.exports = UserModel;


