const express = require("express");
const K_menuroutes = express.Router();
var auth_m = require('../../../middleware/flutter/user/middlewareflutteruser');

var K_Menu_C= require('../../../controller/flutter/kitchen/K_Menu_C.js');

 K_menuroutes.post('/K_menu', auth_m,K_Menu_C.getmenu);
//  K_menuroutes.post('/insertuserplan',auth_m,Plan_Detail.insertuserplan);


module.exports = K_menuroutes