const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
var dbConn  = require('../../config/db.config');

exports.loginUser = (userData,result)=> {
       console.log(userData)
    dbConn.query('SELECT * FROM user u JOIN role r USING (role_id) WHERE name=?', userData.name, async function(err, res){
       
        if(err){    
            result(err,null);
        }else{
            if(res.length!=0){
                const isMatch = await bcrypt.compare(userData.password,res[0].password);
                if(isMatch){
                    delete res[0]['password']
                    result(null,res);
                }
                if(!isMatch){
                    result('password does not match',null);
                }
               
            }
            else{
                result('no user login failed',null)
            }
           
        }
    })
}
