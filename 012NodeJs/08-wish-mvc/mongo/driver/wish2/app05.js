
//引入mongoose
const mongoose = require('mongoose')
const UserModel = require('./module/users.js')
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

	UserModel.distinct("name",{age:{$gt:30}},(err,doc)=>{
			if(err){
				console.log('distinct error:::',err)
			}else{
				console.log(doc)
			}
	})

});
