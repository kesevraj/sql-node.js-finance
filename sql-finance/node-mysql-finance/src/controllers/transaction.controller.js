const transactionService = require('../service/transaction.service');
var financeModel = require('../models/finance.model')

exports.addTransaction = (req, res)=> {
    const transactionData = new financeModel.transactions(req.body)
    console.log(transactionData,"transaction")
    transactionService.addTransaction(transactionData,(err, transaction) =>{
        if(err){
            res.send(err);
        }
        else{
            console.log('success')
            res.json({status: 200, message: ' Success', data: transaction})
        }
        
    })
   
}

exports.getTransactionPerDay = (req, res)=> {
  
    transactionService.getTransactionPerDay((err, transactionPerDay) =>{
        if(err){
            res.send(err);
        }
        else{
            console.log('success')
            res.send(transactionPerDay)
        }
       
    })
   
}

exports.updateLoanStatus = (req, res)=> {
  
    transactionService.updateLoanStatus((err, loanStatus) =>{
        if(err){
            res.send(err);
        }
        else{
            console.log('success')
            res.send(loanStatus)
        }
       
    })
   
}

exports.getTransactionsPerCustomerLoan = (req, res)=> {
  
    transactionService.getTransactionsPerCustomerLoan((err, transactions) =>{
        if(err){
            res.send(err);
        }
        else{
            console.log('success')
            res.send(transactions)
        }
       
    })
   
}