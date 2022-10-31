const express = require("express");
const CS_Orderroutes = express.Router();
var Adminauth_m = require('../../../middleware/adminmiddleware/Adminmiddlewareauth');

 var C_Order_C = require('../../../controller/admin/Cust_Support/C_Order_C.js');



CS_Orderroutes.post('/fetch_Order', C_Order_C .fetch_Order); 
CS_Orderroutes.post('/fetch_PerticulerOrder',C_Order_C.fetch_PerticulerOrder);
CS_Orderroutes.post('/Order_initial_Refund',C_Order_C.Order_initial_Refund);

CS_Orderroutes.post('/fatch_single_refund',C_Order_C.fatch_single_refund);

CS_Orderroutes.post('/showsingleorder',C_Order_C.showsingleorder);

CS_Orderroutes.post('/showsinglemealcustomerdetails',C_Order_C.showsinglemealcustomerdetails);

CS_Orderroutes.post('/showuserprofile',C_Order_C.showuserprofile);
CS_Orderroutes.post('/searchsinglemealsuser',C_Order_C.searchsinglemealsuser);








module.exports = CS_Orderroutes  