const express = require("express");
const Paymentsuccessmsgroutes = express.Router();
var Adminauth_m = require('../../middleware/adminmiddleware/Adminmiddlewareauth');

 var Paymentsuccessmsg_C = require('../../controller/admin/Paymentsuccessmsg_C');



Paymentsuccessmsgroutes.post('/Paymentsuccessmsg_INSERT', Paymentsuccessmsg_C.Paymentsuccessmsg_INSERT); 
Paymentsuccessmsgroutes.post('/Paymentsuccessmsg_show',Adminauth_m, Paymentsuccessmsg_C.SHOW); 
Paymentsuccessmsgroutes.post('/paymsg_show',Adminauth_m, Paymentsuccessmsg_C.paymsg_show); 
Paymentsuccessmsgroutes.post('/paymentsucmsg_Delete',Adminauth_m, Paymentsuccessmsg_C.paymentsucmsg_Delete); 
Paymentsuccessmsgroutes.post('/paymentsucmsggetoneid',Adminauth_m, Paymentsuccessmsg_C.paymentsucmsggetoneid); 
Paymentsuccessmsgroutes.post('/paymentsucmsgupdate', Paymentsuccessmsg_C.paymentsucmsgupdate); 
Paymentsuccessmsgroutes.post('/Staticpaymentmsg', Paymentsuccessmsg_C.Staticpaymentmsg); 

Paymentsuccessmsgroutes.post('/get_Staticpaymentmsg_info',Paymentsuccessmsg_C.get_Staticpaymentmsg_info); 

// Paymentsuccessmsgroutes.post('/Delete' , Createuser_C.Delete);


module.exports = Paymentsuccessmsgroutes