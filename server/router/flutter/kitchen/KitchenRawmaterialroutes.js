const express = require("express");
const KitchenRawmaterialroutes = express.Router();
var auth_m = require('../../../middleware/flutter/user/middlewareflutteruser');

var rawmaterial_Detail= require('../../../controller/flutter/kitchen/Rawmaterial_C.js');

 KitchenRawmaterialroutes.post('/getrawmaterial',auth_m,rawmaterial_Detail.getrawmaterial);
//  KitchenRawmaterialroutes.post('/insertuserplan',auth_m,Plan_Detail.insertuserplan);


module.exports = KitchenRawmaterialroutes