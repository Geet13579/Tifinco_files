const express = require('express');
const router = express.Router();

const customer_order   = require('../cust_support/CS_Orderroutes.js')
const Cust_SupportRouter =require('../cust_support/CS_Detailroutes.js');;



router.use(customer_order);
router.use(Cust_SupportRouter);

module.exports = router;