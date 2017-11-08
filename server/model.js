const mongoose = require('mongoose')
// 连接mongo 并使用encrypt这个集合
const DB_URL = 'mongodb://localhost:27017/encrypt'
mongoose.connect(DB_URL)

// 定义存储用户数据的模型
const models = {
    user:{
        'user':{type:String, require:true},
        'pwd':{type:String, require:true},
    },
    chat:{

    }
}
// 根据模型创建集合
for(let m in models) {
    mongoose.model(m, new mongoose.Schema(models[m]))
}

module.exports = {
    getModel:function(name) {
        return mongoose.model(name)
    }
}
