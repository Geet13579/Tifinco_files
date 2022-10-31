const express = require("express");
const plandetailRoutes = express.Router();
var Adminauth_m = require('../../middleware/adminmiddleware/Adminmiddlewareauth');

  var PlanDetail = require('../../controller/admin/PlanDetail_C');
 var Plandetail_mid = require('../../middleware/adminmiddleware/adminimages/Plandetail_mid');
 
 plandetailRoutes.post('/getplantype',Adminauth_m,PlanDetail.getplantype);
 plandetailRoutes.post('/addplan',Plandetail_mid.array('files'),PlanDetail.addplan);
 plandetailRoutes.post('/chkplan',Adminauth_m,PlanDetail.chkplan);
 plandetailRoutes.post('/getplandetail',Adminauth_m,PlanDetail.getplandetail);
 plandetailRoutes.post('/getsearch',Adminauth_m,PlanDetail.getsearch);
 plandetailRoutes.post('/getfilter',Adminauth_m,PlanDetail.getfilter);
 plandetailRoutes.post('/plandelete',Adminauth_m,PlanDetail.plandelete);
 plandetailRoutes.post('/getoneplan',Adminauth_m,PlanDetail.getoneplan);
 plandetailRoutes.post('/updateplan',Plandetail_mid.array('files'),PlanDetail.updateplan);
 plandetailRoutes.post('/chkplanforupdate',Adminauth_m,PlanDetail.chkplanforupdate);

 plandetailRoutes.post('/plandaysinsert',Adminauth_m,PlanDetail.plandaysinsert);
 plandetailRoutes.post('/plandaysdelete',Adminauth_m,PlanDetail.plandaysdelete);
 plandetailRoutes.post('/showplandays',Adminauth_m,PlanDetail.showplandays);
 plandetailRoutes.post('/addPlan_imgInfo',Plandetail_mid.single('planBg_image'),PlanDetail.addPlan_imgInfo);
 plandetailRoutes.post('/addPlan_imgInfo1',Plandetail_mid.single('planBg_image2'),PlanDetail.addPlan_imgInfo1);
 plandetailRoutes.post('/getPlan_imgInfo',Adminauth_m,PlanDetail.getPlan_imgInfo);
 plandetailRoutes.post('/getPlan_imgInfo1',Adminauth_m,PlanDetail.getPlan_imgInfo1);

module.exports = plandetailRoutes