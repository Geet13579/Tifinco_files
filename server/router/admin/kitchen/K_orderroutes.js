const express = require("express");
const K_orderroutes = express.Router();
var K_order_C = require('../../../controller/admin/kitchen/K_order_C');
var Adminauth_m = require('../../../middleware/adminmiddleware/Adminmiddlewareauth');

// var subcription = require('../../../controller/admin/kitchen/K_subscription_C');
// var Adminauth_m = require('../../middleware/adminmiddleware/Adminmiddlewareauth');
var Menu_M = require('../../../middleware/adminmiddleware/adminimages/kitchenmiddleware/Menu_middleware');



K_orderroutes.post('/getorder', K_order_C.show);
K_orderroutes.post('/Countorder', K_order_C.Countorder);
K_orderroutes.post('/currentorder',Adminauth_m, K_order_C.currentorder);
K_orderroutes.post('/deleteorder/:id',Adminauth_m, K_order_C.delete);

K_orderroutes.post('/Filterorder',Adminauth_m, K_order_C.Filterorder);
K_orderroutes.post('fetch_PerticulerOrder', K_order_C.fetch_PerticulerOrder);




module.exports = K_orderroutes