var dbConn  = require('../../config/db.config');



exports.addTransaction =   function(transactionData,result) {
  dbConn.query('INSERT INTO transactions SET ? ', transactionData,(err, res)=>{
        if(err){ 
            console.log(err,"transaction_insert")   
            result('transaction not added',null);
        }else{
          console.log(res,"res-aT")
          updateLoan(res.insertId,result,transactionData)
        }
    })   
}

var transactionDelete = (transactionID,result)=>{
    console.log(transactionID,"id")
    dbConn.query('DELETE FROM transactions WHERE transaction_id=?',transactionID,(err, res)=>{
        if(err){    
          result('something went wrong check the transaction',null);
        }else{ 
            console.log(res,"res-ld")
          result(null,'err in inserting transaction and updating loan company');    
        }
    })
    }

    var updateCompany = (insertId,transactionData,result)=>{
        dbConn.query('UPDATE company,(SELECT *  FROM loan WHERE loan_id = ?)  AS l SET company.in_cash = company.in_cash + ?, company.rotational_cash = company.rotational_cash- ?  WHERE company.company_id = l.company_id ',[ transactionData.loan_id,transactionData.amount, transactionData.amount],(err, res)=>{
            console.log(res,"company_updated")
            if(err){    
                console.log(err,"UPDATE_company") 
               transactionDelete(insertId,result)
            //    result("err in updating company",null)
            }else{ 
                console.log(res,"res-uc")
                result(null,res);
            }
        })
        }

        var updateLoan = (insertId,result,transactionData)=>{
            console.log(transactionData,'transca')
            dbConn.query('UPDATE loan  SET loan.amount_paid =loan.amount_paid+?, loan.pending_amount = loan.pending_amount-? WHERE loan.loan_id = ?',[transactionData.amount,transactionData.amount,transactionData.loan_id],(err, res)=>{
                if(err){    
                    console.log(err,"UPDATE_loan") 
                    console.log(insertId,"id")
                   transactionDelete(insertId,result)
            
                }else{ 
                    console.log(res,"res-uL")
                   updateCompany(res.insertId,transactionData,result)
                }
            })
            }


            exports.getTransactionPerDay = (result) =>{
    
                dbConn.query(`SELECT loan_id,c.customer_id,c.name,c.phone,c.address,l.daily_credit,l.amount,l.amount_paid,pending_amount,status FROM loan l 
                JOIN customer c
                WHERE l.customer_id=c.customer_id AND l.pending_amount>0  AND status=true;
                `, (err, res)=>{
                    if(err){    
                        result(err,null);
                    }else{
                        result(null,res);
                    }
                })
            }


            exports.updateLoanStatus = (transactionData,result)=>{
                console.log(transactionData,'transca')
                dbConn.query('UPDATE loan SET status=false WHERE loan.loan_id = ? AND pending_amount=0 ',transactionData.loan_id,(err, res)=>{
                    if(err){    
                        result(err,null);
                    }else{
                        result(null,res);
                    }   
                })
                }


                exports.getTransactionsPerCustomerLoan = (customer,result)=>{
                    console.log(transactionData,'transca')
                    dbConn.query('UPDATE loan SET status=false WHERE loan.loan_id = ? AND pending_amount=0 ',customer,(err, res)=>{
                        if(err){    
                            result(err,null);
                        }else{
                            result(null,res);
                        }   
                    })
                    }

    