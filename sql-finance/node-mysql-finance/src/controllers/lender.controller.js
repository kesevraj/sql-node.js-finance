
const lenderService = require('../service/Lender.service');
var financeModel = require('../models/finance.model')

exports.createLender = (req, res)=> {
    const lenderData = new financeModel.lender(req.body)
    lenderService.createLender(lenderData,(err, lender) =>{
        if(err){
            res.send(err);
        }
        else{
            console.log('success')
            res.json({status: 200, message: ' Success', data: lender})
        }
        
    })
   
}