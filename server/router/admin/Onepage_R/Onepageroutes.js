const express = require("express");
const UserRoutes = express.Router();


var corporateOrders= require('../../../controller/admin/Onepage/Corporate_order_C');

UserRoutes.post('/insertcoporate_orders',corporateOrders.insertcoporate_orders);
UserRoutes.post('/corporatepayment',corporateOrders.corporatepayment);
UserRoutes.post('/show_Corporate_orders',corporateOrders.show_Corporate_orders);
UserRoutes.post('/getuserCorporatedetail',corporateOrders.getuserCorporatedetail);
// UserRoutes.post('/sendemailto_corporateuser',corporateOrders.sendemailto_corporateuser);









module.exports = UserRoutes