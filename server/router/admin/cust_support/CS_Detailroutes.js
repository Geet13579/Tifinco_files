const express = require("express");
const customer_routes = express.Router();
// var Adminauth_m = require('../../middleware/adminmiddleware/Adminmiddlewareauth');

 var custSupport_C = require('../../../controller/admin/Cust_Support/CustProfile_C.js');



customer_routes.post('/getCustProfile', custSupport_C .getCustProfile); 
customer_routes.post('/getcust_supportBy_id', custSupport_C.getcust_supportBy_id); 
customer_routes.post('/getuserInfo',custSupport_C.getuserInfo); 
customer_routes.post('/updateCustPausedPlan',custSupport_C.updateCustPausedPlan); 
customer_routes.post('/getCust_pausePlan',custSupport_C.getCust_pausePlan); 
customer_routes.post('/updateCust_Data',custSupport_C.updateCust_Data); 
customer_routes.post('/get_extraFoodInfo',custSupport_C.get_extraFoodInfo); 
customer_routes.post('/getplantype',custSupport_C.getplantype); 
customer_routes.post('/delete_extraItem_obj',custSupport_C.deleteExtraItem_Obj); 



// customer_routes.post('/FAQgetsearchdata',Adminauth_m, custSupport_C .getsearchdata); 
// customer_routes.post('/FAQgetoneid',Adminauth_m, custSupport_C .getoneid); 
// customer_routes.post('/FAQupdate', custSupport_C .update); 



module.exports = customer_routes  