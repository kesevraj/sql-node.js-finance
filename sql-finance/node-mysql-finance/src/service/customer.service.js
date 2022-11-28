var dbConn  = require('../../config/db.config');

let getcustomerDetails_query = `SELECT c.customer_id, c.name ,c.phone,c.address,c.email,

(SELECT JSON_ARRAYAGG(JSON_OBJECT(
'id', l.loan_id, 
'loan_amount', l.amount_with_interest,
 'principal_amount',l.amount, 
'amount_paid', l.amount_paid,
'pending_amount',l.pending_amount,
'created_at', l.date, 
 'due_date',l.due_date, 
'penality',l.penality,
 'daily_credit',l.daily_credit,
 'status',l.status, 
 'managed_by',l.managed_by,
 'company_id',l.company_id,
 'interest',l.interest

)) FROM loan l
WHERE c.customer_id=?) AS loan 
FROM customer c WHERE c.customer_id = ?`

exports.getAllcustomers = (result) =>{
    
    dbConn.query('SELECT * FROM customer', (err, res)=>{
        if(err){    
            result(err,null);
        }else{
            result(null,res);
        }
    })
}


exports.createCustomer = (customerData,result) =>{
    
    dbConn.query('INSERT INTO customer SET ? ', customerData,(err, res)=>{
        if(err){    
            result(err,null);
        }else{
            console.log(res,"res")
            result(null,res);
        }
    })
}

exports.updateCustomer = (customerData,result) =>{
    
    dbConn.query('UPDATE customer SET name=?, phone=?, address=?, email=? WHERE customer_id = ?',[customerData.name,customerData.phone,customerData.address,customerData.mail,customerData.customer_id], (err, res)=>{
        if(err){    
            result(err,null);
        }else{
            console.log(res,"res")
            result(null,res);
        }
    })
}


exports.getcustomerDetails = (id,result) =>{
    console.log(id,"id")
    dbConn.query(getcustomerDetails_query,[id,id], (err, res)=>{
        if(err){ 
            console.log(err)   
            result(err,null);
        }else{
            result(null,res);
        }
    })
}

