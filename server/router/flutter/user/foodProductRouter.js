const express = require("express");
const productRouter = express.Router();
var auth_m = require('../../../middleware/flutter/user/middlewareflutteruser');
var getFood_Price_C= require('../../../controller/flutter/user/getFood_Price.js');

// productRouter.post('/gettaxes',auth_m,user_order.gettaxes);

productRouter.post('/getfood_price',auth_m, getFood_Price_C.getFoodPrice);






module.exports = productRouter