
const MongoClient = require('mongodb').MongoClient;

// Connection URL
const url = 'mongodb://localhost:27017';
//定义接口链接mongodb
// const url = 'mongodb://127.0.0.1:27017';

// Database Name
//定义数据名称
const dbName = 'wish';

// Create a new MongoClient
// 引用MongoClient创建一个新的对象
const client = new MongoClient(url);

// Use connect method to connect to the Server
//
client.connect(function(err) {
  console.log("Connected successfully to server");

  const db = client.db(dbName);

  client.close();
});
