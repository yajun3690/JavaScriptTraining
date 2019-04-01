const express = require('express')
const app = express()
const port = 3000
//1.自动索取静态资源
app.use(express.static('public'))
//2.
// app.use('/static',express.static('public'))
app.all('/', (req, res,next) => {
	console.log('all.....')
	next()
})
app.get('/', (req, res) => res.send('get response data...'))
app.post('/', (req, res) => res.send('post response data...'))
app.put('/', (req, res) => res.send('put response data...'))
app.delete('/', (req, res) => res.send('delete response data...'))

app.listen(3000, () => console.log(`Example app listening on port ${port}!`))