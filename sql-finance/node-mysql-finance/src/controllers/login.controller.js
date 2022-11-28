const loginService = require('../service/login.service');


exports.loginUser = (req, res)=> {
  const userData =req.body
  console.log(userData,'req')
    loginService.loginUser(userData,(err, login) =>{
        if(err){
            console.log(err)
            res.status(400).json({status: 404, message: err})
        }
        else{
                res.json({status: 200, message: 'login Success', data: login[0]})
        }
      
    })
   
}