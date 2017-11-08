const express = require('express')
const bodyParser = require('body-parser')
const userRouter = require('./user')

const app = express()

// 用于解析post请求的body
app.use(bodyParser.json())
// 把所有user操作都路由到/user这个url下面
app.use('/user', userRouter)

app.listen(9000, function() {
    console.log('Hi, guys! I am listening prot 9000')
})
