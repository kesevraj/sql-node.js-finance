var dbConn  = require('../../config/db.config');
const bcrypt = require("bcryptjs");


exports.createLender = async function(lenderData,result) {
    const salt = await bcrypt.genSalt(10);
    lenderData.password = await bcrypt.hash(lenderData.password, salt);
    console.log(lenderData)
    dbConn.query('INSERT INTO user SET ? ', lenderData,(err, res)=>{
        if(err){    
            result(err,null);
        }else{
            console.log(res,"res")
            result(null,res);
        }
    })
}