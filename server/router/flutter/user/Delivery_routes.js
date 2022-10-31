const express = require("express");
const delivery_routes = express.Router();
var auth_m = require('../../../middleware/flutter/user/middlewareflutteruser');
var Delivery_C= require('../../../controller/flutter/user/Delivery_C.js');

delivery_routes.post('/get_Delivered_Tiffin',auth_m, Delivery_C.get_DeliveryInfo);
delivery_routes.post('/get_DeliveryBoy_Info', auth_m, Delivery_C.get_RegistrationInfo);
delivery_routes.post('/get_DeliveryBoy_LoginInfo',auth_m, Delivery_C.get_deliveryLoginInfo);
delivery_routes.post('/get_UserInfo_ForDeliver', Delivery_C.get_UserInfo_ForDeliver);
delivery_routes.post('/get_DeliveryStatus_Tues',auth_m, Delivery_C.getDeliverStatus);




module.exports = delivery_routes