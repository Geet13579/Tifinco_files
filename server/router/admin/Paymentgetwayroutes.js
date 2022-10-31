const express = require("express");
const pamentgetway_routes = express.Router();

var auth_m = require('../../middleware/flutter/user/middlewareflutteruser');
var Paymentgetway = require('../../controller/admin/Paymentgetway_C.js');

pamentgetway_routes.post('/Payment',Paymentgetway.paymentget);
pamentgetway_routes.post('/gettokenforapp',auth_m, Paymentgetway.gettokenforapp);
pamentgetway_routes.post('/getpaymentlinkforexisting',Paymentgetway.getorderlink);
pamentgetway_routes.post('/getorderNewlink',Paymentgetway.getorderNewlink);
pamentgetway_routes.post('/getsuccess',Paymentgetway.getsuccess);
pamentgetway_routes.post('/getuserpaymentdetail',Paymentgetway.getuserpaymentdetail);
pamentgetway_routes.post('/getUserStatus',Paymentgetway.getUserStatus);




module.exports = pamentgetway_routes