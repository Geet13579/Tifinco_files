const express = require("express");
const userorder = express.Router();
var auth_m = require('../../../middleware/flutter/user/middlewareflutteruser');
var user_order= require('../../../controller/flutter/user/UserOrder_C.js');

userorder.post('/gettaxes',auth_m,user_order.gettaxes);
userorder.post('/get_promocodefororders',auth_m,user_order.get_promocodefororders);



module.exports = userorder