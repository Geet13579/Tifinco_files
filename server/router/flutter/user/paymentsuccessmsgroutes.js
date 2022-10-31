const express = require("express");
const paymentsuccessmsgroutes = express.Router();
var auth_m = require('../../../middleware/flutter/user/middlewareflutteruser');
var Paymentsuccessmsg_C= require('../../../controller/flutter/user/Paymentsuccessmsg_C.js');

// paymentsuccessmsgroutes.post('/gettaxes',auth_m,user_order.gettaxes);
paymentsuccessmsgroutes.post('/Paymentsuccessmsg_show1',auth_m,Paymentsuccessmsg_C.paymentmsg_Show);
paymentsuccessmsgroutes.post('/Paymentsuccessmsg_show',auth_m, Paymentsuccessmsg_C.statiPaymentsuccessmsg_show);
// paymentsuccessmsgroutes.post('/Order_id_Insert',auth_m,ORDER_C.Order_id_Insert);



module.exports = paymentsuccessmsgroutes