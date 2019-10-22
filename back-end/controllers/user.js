const usersModle = require('../modles/user')
const tools = require('../utils/tools');

const signup = async function(req, res, next) {
  res.set('Content-Type', 'application/json;charset=utf-8');
  let {username, password} = req.body;
  let hash = await tools.hash(password)
  let result = await usersModle.signup({
    username,
    password:hash
  })
  if(result){
    res.render('succ', {
      data:JSON.stringify({
       message:'用户注册成功'
     })
    })
  }else{
    res.render('fail', {
      data:JSON.stringify({
       message:'用户注册失败'
     })
    })
  }
  
  }
  module.exports = {signup}