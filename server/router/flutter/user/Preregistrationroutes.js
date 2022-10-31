const express = require("express");
const Preregistrationroutes = express.Router();
var auth_m = require('../../../middleware/flutter/user/middlewareflutteruser');
// var getmenuprofileimage_mid = require('../../../middleware/adminmiddleware/adminimages/getmenuprofileimage_mid');

var Preregistration_C = require('../../../controller/flutter/user/Preregistration_C.js');

Preregistrationroutes.post('/Preregistration',auth_m, Preregistration_C.Preregistration);



module.exports = Preregistrationroutes