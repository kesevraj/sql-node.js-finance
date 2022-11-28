
const customerService = require('../service/customer.service');
var financeModel = require('../models/finance.model')

exports.getcustomerList = (req, res)=> {
  
    customerService.getAllcustomers((err, customers) =>{
        if(err){
            res.send(err);
        }
        else{
            console.log('success')
            res.send(customers)
        }
       
    })
   
}

exports.createCustomer = (req, res)=> {
    const customerData = new financeModel.customer(req.body)
    console.log(customerData)
    customerService.createCustomer(customerData,(err, customers) =>{
        if(err){
            res.send(err);
        }
        else{
            console.log('success')
            res.send(customers)
        }
        
    })
   
}


exports.updateCustomer = (req, res)=> {
    const customerData = req.body
    console.log(customerData)
    customerService.updateCustomer(customerData,(err, customers) =>{
        if(err){
            res.send(err);
        }
        else{
            console.log('success')
            res.send(customers)
        }
        
    })
   
}


exports.getcustomerDetails = (req, res)=> {
  console.log(req.query.id,"req")
    customerService.getcustomerDetails(req.query.id,(err, customer) =>{
        if(err){
            res.send(err);
        }
        else{
            console.log('success')
            res.send(customer)
        }
       
    })
   
}






