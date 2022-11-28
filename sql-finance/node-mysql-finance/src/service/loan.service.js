var dbConn  = require('../../config/db.config');



exports.addLoan =   function(loanData,result) {
  dbConn.query('INSERT INTO loan SET ? ', loanData,(err, res)=>{
        if(err){ 
            console.log(err,"loan_insert")   
            result('loan not added',null);
        }else{
          console.log(res,"res-al")
          updateCompany(res.insertID,loanData,result)
          // result(null,res)
        }
    })   
}

var loanDelete = (loanID,result)=>{
dbConn.query('DELETE FROM loan WHERE loan_id=?',loanID,(err, res)=>{
    if(err){    
      result('something went wrong check the loan',null);
    }else{ 
      result(null,'err in inserting loan and updating cmpny');
     
        console.log(res,"res-ld")
    }
})
}

var updateCompany = (insertID,loanData,result)=>{
dbConn.query('UPDATE company SET company.in_cash = company.in_cash - ?, company.rotational_cash = company.rotational_cash+ ?  WHERE company.company_id = ? ',[ loanData.amount, loanData.amount  ,loanData.company_id],(err, res)=>{
    console.log(res,"company_updated")
    if(err){    
        console.log(err,"UPDATE_company") 
       loanDelete(insertID,result)

    }else{ 
        console.log(res,"res-uc")
        result(null,res);
    }
})
}


exports.getLoans = (loan,result)=>{
  console.log(transactionData,'transca')
  dbConn.query('UPDATE loan SET status=false WHERE loan.loan_id = ? AND pending_amount=0 ',loan,(err, res)=>{
      if(err){    
          result(err,null);
      }else{
          result(null,res);
      }   
  })
  }
// UPDATE company ,loan
// SET company.in_cash = company.in_cash-loan.amount, 
// company.rotational_cash = loan.amount
// -- FROM company, loan 
// WHERE company.company_id = loan.company_id 