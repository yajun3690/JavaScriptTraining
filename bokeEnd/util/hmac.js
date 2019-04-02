const crypto  = require('crypto')
//生成hash对象
// const hash = crypto.createHash('md5')
// const hash = crypto.createHash('sha256')
// const hash = crypto.createHash('sha512')
//添加明文
// hash.update('')
//生成密文
// hash.digest('hex')
// 插入自己加入的字符
// const hmac = crypto.createHmac('sha256','tasdsad')
// hmac.update('test1')
// hmac.digest('hex')


module.exports = (str)=>{
	const hmac = crypto.createHmac('sha256','yajun')
	hmac.update(str)
	return hmac.digest('hex')
}