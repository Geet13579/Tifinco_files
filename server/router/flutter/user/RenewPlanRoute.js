const express = require("express");
const RenewPlanRoutes = express.Router();
var auth_m = require('../../../middleware/flutter/user/middlewareflutteruser');


var Plan_Detail= require('../../../controller/flutter/user/RenewUserPlan_C.js');


 RenewPlanRoutes.post('/getPlansForRenew',auth_m,Plan_Detail.getPlansForRenew);

 RenewPlanRoutes.post('/insertRenewUserPlan',auth_m,Plan_Detail.insertRenewUserPlan);
 
//  RenewPlanRoutes.post('/check_TifinDelivery',auth_m,Plan_Detail.chechTiffinDeliveryStatus);
//  auth_m,
module.exports = RenewPlanRoutes