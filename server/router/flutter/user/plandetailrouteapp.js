const express = require("express");
const PlanRoutes = express.Router();
var auth_m = require('../../../middleware/flutter/user/middlewareflutteruser');

var Price_Detail= require('../../../controller/flutter/delivery/GetTIffinPrice_C');
var optionalitem= require('../../../controller/flutter/user/OptionalItem_C.js');

var Plan_Detail= require('../../../controller/flutter/user/Plan_Detail_C.js');
var PlanDetail = require('../../../controller/admin/PlanDetail_C');

 PlanRoutes.post('/getplandetail',auth_m,Plan_Detail.getPlans);
 PlanRoutes.post('/getplanday',auth_m,Plan_Detail.getplanday);
 PlanRoutes.post('/insertuserplan',auth_m,Plan_Detail.insertuserplan);
// PlanRoutes.post('/insertuserplan',Plan_Detail.insertuserplan);

 PlanRoutes.post('/getPlan_imgInfo',auth_m,PlanDetail.getPlan_imgInfo);
 PlanRoutes.post('/getbgshow', auth_m,Plan_Detail.show);
 PlanRoutes.post('/plan_order_id',auth_m,Plan_Detail.plan_order_id);
//  PlanRoutes.post('/getPlan_bgimgInfo1',PlanDetail.getPlan_bgimgInfo);
 PlanRoutes.post('/showuserextrafoodlist',auth_m,Plan_Detail.showuserextrafoodlist);
 PlanRoutes.post('/getplandays',auth_m,Plan_Detail.getplandays);

PlanRoutes.post('/get_tiffinprice',auth_m,Price_Detail .get_tiffinprice);

PlanRoutes.post('/optionalitems',auth_m,optionalitem.getOptionalitems);
//check plan 
PlanRoutes.post('/checkuserplaninfo',Plan_Detail.checkuserplaninfo);
PlanRoutes.post('/Editplan',auth_m, Plan_Detail.Editplan);
  
PlanRoutes.post('/planpause',auth_m,Plan_Detail.planpause);
PlanRoutes.post('/checkplan_pause',auth_m,Plan_Detail.checkplan_pause);

PlanRoutes.post('/plan_Orderid',Plan_Detail.plan_Orderid);

PlanRoutes.post('/deletePausedPlan',auth_m,Plan_Detail.deletePausedPlan);


PlanRoutes.post('/getuserplan_and_details',Plan_Detail.getuserplan_and_details);

PlanRoutes.post('/getActivePlan',auth_m,Plan_Detail.getuserplandetail_WithActivationDate);

PlanRoutes.post('/getBgColor',auth_m,Plan_Detail.getbgcolor);



module.exports = PlanRoutes

