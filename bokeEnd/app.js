
const express = require('express')
const swig = require('swig')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const Cookies = require('cookies')
const session = require('express-session')
const MongoStore = require('connect-mongo')(session)
const app = express();
const port = 3000

console.log(Cookies)

// mongoose.connect('mongodb://211.67.191.16/blog', {useNewUrlParser: true});
mongoose.connect('mongodb://localhost/blog', {useNewUrlParser: true});

const db = mongoose.connection;

db.on('error', (err)=>{
    console.log('connection error');
    throw err;
});

db.once('open', ()=>{
    console.log('connection successful');
    
});



app.use(express.static('public'))
//开发阶段设置不走缓存
swig.setDefaults({
  cache: false
})


//配置应用模板
app.engine('html', swig.renderFile);
//配置模板的存放目录
app.set('views', './views')
//注册模板引擎
app.set('view engine', 'html')
//请求中间件
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
/*

//设置cookies中间件
app.use((req,res,next)=>{
 	req.Cookies = new Cookies(req,res)
 	let userInfo = req.Cookies.get('userInfo');
 	if(userInfo){
 		req.userInfo = JSON.parse(userInfo)
 	}
 	next()
})

*/
//设置session
app.use(session({
	//设置cookie名称
	name:'bkid',
	//用它来对session cookie签名,防止篡改
	secret:'abc',
	//强制保存session即使他没有变化
	resave:true,
	//强制将未初始化的session储存
	saveUninitialized: true,
	//如果为true，则每次请求都更新cookie的过期时间
	rolling:true,
	//设置cookie过期时间为1天
	cookie:{maxAge:1000*60*60*24},
	//设置session 储存在数据库中
	store:new MongoStore({mongooseConnection:mongoose.connection})
}))
app.use((req,res,next)=>{
 	req.userInfo = req.session.userInfo || {};
 	next()
})

app.use('/',require('./routes/index.js'))
app.use('/user',require('./routes/user.js'))
app.use('/admin',require('./routes/admin.js'))
app.use('/home',require('./routes/home.js'))
app.use('/category',require('./routes/category.js'))
app.use('/article',require('./routes/article.js'))
app.use('/comment',require('./routes/comment.js'))

app.listen(port, () => console.log(`app listening on port ${port}!`))