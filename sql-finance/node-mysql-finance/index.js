const express = require('express');
const bodyParser = require('body-parser');
const cors = require("cors");

// create express app
const app = express();

// setup the server port
const port = process.env.PORT || 5000;

// parse request data content type application/x-www-form-rulencoded
app.use(bodyParser.urlencoded({extended: false}));
app.use(cors());
// parse request data content type application/json
app.use(bodyParser.json());

// define root route
app.get('/', (req, res)=>{
    res.send('Hello World');
});
// import employee routes
const financeRoutes = require('./src/routes/finance.route');

// create employee routes
app.use('/finance', financeRoutes);

// listen to the port
app.listen(port, ()=>{
    console.log(`Express is running at port ${port}`);
});