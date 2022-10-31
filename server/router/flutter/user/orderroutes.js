const express = require("express");
const orderroutes = express.Router();
var auth_m = require('../../../middleware/flutter/user/middlewareflutteruser');
var ORDER_C= require('../../../controller/flutter/user/ORDER_C.js');
// var getFood_Price_C= require('../../../controller/flutter/user/getFood_Price.js');

// orderroutes.post('/gettaxes',auth_m,user_order.gettaxes);
orderroutes.post('/Insertorder',auth_m,ORDER_C.Insertoreder);
orderroutes.post('/Fetchperticulerorder', auth_m,ORDER_C.Fetchperticulerorder);
orderroutes.post('/Order_id_Insert', auth_m,ORDER_C.Order_id_Insert);
orderroutes.post('/getExtraItem', auth_m,ORDER_C.getExtraItems_Byuserid);



// orderroutes.post('/getfood_price',getFood_Price_C.getFoodPrice);



module.exports = orderroutes