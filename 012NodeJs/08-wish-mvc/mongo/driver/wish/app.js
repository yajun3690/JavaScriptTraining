
const MongoClient = require('mongodb').MongoClient;

// Connection URL
// 定义URL为本机端口号
const url = 'mongodb://localhost:27017';
//定义接口链接mongodb
// const url = 'mongodb://127.0.0.1:27017';

// Database Name
//定义数据库名称
const dbName = 'wish';

// Create a new MongoClient
// 引用MongoClient类创建一个新的对象
// mongodb链接到端口上
// DeprecationWarning: current URL string parser is 
// deprecated, and will be removed in a future version. 
// To use the new parser, pass option { useNewUrlParser: true }
 // to MongoClient.connect.
 // 表示当前方法可能会被移除掉，需要在后面加上{ useNewUrlParser: true }
const client = new MongoClient(url,{ useNewUrlParser: true });

// Use connect method to connect to the Server
//用content方法链接服务器
client.connect(function(err) {
 	 console.log("Connected successfully to server");

  	const db = client.db(dbName);
// insert 数据数据库
// get the document collection
// collection名称 
	const collection = db.collection('users')
/*
	//添加数据
	collection.insertMany([{name:"Tom",age:18,major:"computer"},{name:"Leo",age:18,major:"computer"},{name:"YaJun",age:18,major:"computer"}],(err,result)=>{
		if(err){
			console.log('insertMany err::',err)
		}else{
			console.log(result)
		}
  		client.close();
	})

*/

/*

	//按数组返回 
	collection.find({name:"Tom"}).toArray((err,doc)=>{
		if(err){
			console.log('find err::',err)
		}else{
			console.log(doc)
		}
  		client.close();
	})
*/

/*
	//更新一条
	collection.updateOne({name:"Tom"},{$set:{age:88}},(err,result)=>{
		if(err){
			console.log('updateOne err::',err)
		}else{
			console.log(result)
		}
  		client.close();
	})

*/
/*
	//删除一条
	collection.deleteOne({name:"Tom"},(err,result)=>{
		if(err){
			console.log('deleteOne err::',err)
		}else{
			console.log(result)
		}
  		client.close();
	})


/**/

/**/

/**/
/**/



});
