const { TIS620_BIN } = require("mysql/lib/protocol/constants/charsets");


var customer = function (customer) {
    this.name = customer.name;
    this.phone = customer.phone;
    this.address = customer.address;
    this.email = customer.email;
}

var lender = function (lender) {
    this.name = lender.name;
    this.password = lender.password
    this.phone = lender.phone;
    this.address = lender.address;
    this.email = lender.email;
    this.role_id = lender.role_id;
}

var loan = function (loan) {
// this.loan_id  =loan.
this.amount = loan.amount
this.amount_paid   =loan.amount_paid
this.pending_amount=loan.pending_amount
this.customer_id =loan.customer_id 
this.date  =new Date()
this.due_date =new Date(2022, 4, 23);
this.penality  =loan.penality
this.daily_credit =loan.daily_credit 
this.status  =loan.status
this.managed_by =loan.managed_by
this.company_id=loan.company_id
this.interest=loan.interest
this.amount_with_interest=loan.amount_with_interest
}

var transactions = function (transaction) {
this.loan_id=transaction.loan_id, 
this.amount=transaction.amount, 
this.date=new Date(), 
this.customer_id=transaction.customer_id,
this.payment_mode=transaction.payment_mode,
this.managed_by=transaction.managed_by

}


module.exports = { customer , lender ,loan , transactions}; 