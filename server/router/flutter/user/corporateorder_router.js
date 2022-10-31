const express = require("express");
const corporate_orders = express.Router();
var auth_m = require('../../../middleware/flutter/user/middlewareflutteruser');

 var CorporateOrder= require('../../../controller/flutter/user/CorporateOrder_C.js');
// var PlanDetail = require('../../../controller/admin/PlanDetail_C');

corporate_orders.post('/insertcorporate_orders',auth_m,CorporateOrder.insertcorporate_orders);
corporate_orders.post('/show_CorporateOrder', auth_m, CorporateOrder.show_CorporateOrder);

//  PlanRoutes.post('/insertuserplan',auth_m,Plan_Detail.insertuserplan);
//  PlanRoutes.post('/getPlan_imgInfo',auth_m,PlanDetail.getPlan_imgInfo);


module.exports = corporate_orders
