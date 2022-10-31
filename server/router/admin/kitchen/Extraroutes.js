const express = require("express");
const Extraroutes = express.Router();
var Extraitem_C = require('../../../controller/admin/kitchen/Extraitem_C');
var Adminauth_m = require('../../../middleware/adminmiddleware/Adminmiddlewareauth');








Extraroutes.post('/EXtraitem',Extraitem_C.EXtraitem);
Extraroutes.post('/UpdateEXtraitem',Extraitem_C.UpdateEXtraitem);
// Extraroutes.post('/lastrow', K_menus_C.lastrow);





module.exports = Extraroutes
