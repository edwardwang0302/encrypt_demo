const express = require('express')
const utils = require('utility')
const Router = express.Router()
const models = require('./model')
const User = models.getModel('user')

Router.get('/all', function(req, res) {
    // 查找所有的用户信息
    User.find({}, function(err, doc) {
        return res.json(doc)
    })
})
Router.post('/regist', function(req, res) {
    const { user, pwd } = req.body
    User.findOne({user}, function(err, doc) {
        if(doc) {
            return res.json({code:1, msg: '用户名存在'})
        }
        User.create({user, pwd: salting(pwd)}, function(e, d) {
            if(e) {
                return res.json({code:1, msg: '注册失败'})
            }
            return res.json({code:0, msg: '注册成功'})
        })
    })
})

// 加密加盐
function salting(pwd) {
    const salt = 'i_wanna_be_bestx8yza6!@#IUHJH~~'
    return utils.md5(utils.md5(pwd+salt))
}


module.exports = Router
