const express = require('express');
const router = express.Router();

//customers
const customerController = require('../controllers/customer.controller');

router.get('/get_customers', customerController.getcustomerList);
router.post('/create_customer', customerController.createCustomer);
router.put('/update_customer', customerController.updateCustomer);
router.get('/get_customers_details', customerController.getcustomerDetails);

//login
const loginController = require('../controllers/login.controller');

router.post('/login', loginController.loginUser);


//lender
const lenderController = require('../controllers/lender.controller');

router.post('/create_lender', lenderController.createLender);

//loan
const loanController = require('../controllers/loan.controller');

router.post('/add_loan', loanController.addLoan);
router.get('get_loans', loanController.getLoans);

//transaction

const transactionController = require('../controllers/transaction.controller');
router.post('/add_transaction', transactionController.addTransaction);
router.get('/transaction_per_day', transactionController.getTransactionPerDay);
router.post('/loan_status', transactionController.updateLoanStatus);
router.get('get_transactions_per_customer_loan', transactionController.getTransactionsPerCustomerLoan);

module.exports = router;