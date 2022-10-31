const express = require("express");
const userOrder_routes = express.Router();
var user_order_C = require('../../controller/admin/UserOrder_C');

userOrder_routes.post('/inerttexes',user_order_C.inserttexes);
userOrder_routes.post('/showtexes',user_order_C.showstex);

module.exports = userOrder_routes