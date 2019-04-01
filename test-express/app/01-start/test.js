const express = require('express')
const app = express()
const port = 3000
app.get('/', (req, res) => res.send('<h1>Hello World! 亚军</h1>'))

app.listen(3000, () => console.log(`Example app listening on port ${port}!`))