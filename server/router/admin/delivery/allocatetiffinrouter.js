const express = require("express");
const DeliveryRoutes = express.Router();

var Adminauth_m = require('../../../middleware/adminmiddleware/Adminmiddlewareauth');

var user_c = require('../../../controller/admin/delivery/user_C');
var user_Plan_info = require('../../../controller/admin/delivery/UserPlanInfo_C');

DeliveryRoutes.post('/get_userdetail', Adminauth_m,user_c.get_userdetail); 
DeliveryRoutes.post('/get_userplaninfo', user_Plan_info.get_userplaninfo); 

// DeliveryRoutes.post('/get_plan_info', user_Plan_info.get_plan_info); 

DeliveryRoutes.post('/get_tiffinno', Adminauth_m,user_Plan_info.get_tiffinno); 
DeliveryRoutes.post('/get_userdata', Adminauth_m,user_Plan_info.get_userdata); 

DeliveryRoutes.post('/getsearchdata',Adminauth_m,user_Plan_info.getsearchdata);
DeliveryRoutes.post('/gettiffindata',Adminauth_m,user_Plan_info.gettiffindata);
DeliveryRoutes.post('/insert_tiffin_allocated_data',user_Plan_info.insert_tiffin_allocated_data);
DeliveryRoutes.post('/get_kitchen_menu',Adminauth_m,user_Plan_info.get_kitchen_menu);
DeliveryRoutes.post('/get_planInfo',Adminauth_m,user_Plan_info.get_planInfo);
DeliveryRoutes.post('/get_tiffins',Adminauth_m,user_Plan_info.get_tiffins);
DeliveryRoutes.post('/get_tiffin_Allocate_User',Adminauth_m,user_Plan_info.getTiffinAllocated_Users);




module.exports = DeliveryRoutes