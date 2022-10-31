const express = require("express");
const deliveryStatus_routes = express.Router();
var auth_m = require('../../../middleware/flutter/user/middlewareflutteruser');

var deliveryStatus= require('../../../controller/flutter/kitchen/deliveryStatus_C.js');

 deliveryStatus_routes.post('/getdeliveryStatus',auth_m,deliveryStatus.getdeliveryStatus);
 
 deliveryStatus_routes.post('/tiffinPreparing_info',auth_m,deliveryStatus.tiffinPreparing_info);
 deliveryStatus_routes.post('/tiffinDispatch_info',auth_m,deliveryStatus.tiffinDispatch_info);


module.exports = deliveryStatus_routes