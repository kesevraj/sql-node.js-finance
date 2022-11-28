const loanService = require('../service/loan.service');
var financeModel = require('../models/finance.model')

exports.addLoan = (req, res)=> {
    const loanData = new financeModel.loan(req.body)
    console.log(loanData,"loan")
    loanService.addLoan(loanData,(err, loan) =>{
        if(err){
            res.send(err);
        }
        else{
            console.log('success')
            res.json({status: 200, message: ' Success', data: loan})
        }
        
    })
   
}


exports.getLoans = (req, res)=> {
  
    transactionService.getLoans((err, loans) =>{
        if(err){
            res.send(err);

        }
        else{
            console.log('success')
            res.send(loans)
        }
       
    })
   
}