const express = require("express");
const ComboProd_router = express.Router();
var auth_m = require('../../../middleware/flutter/user/middlewareflutteruser');

 var Comboproduct= require('../../../controller/flutter/user/ComboProduct_C.js');

 ComboProd_router.post('/ShowComboProduct',auth_m,Comboproduct.Showcombo);


module.exports = ComboProd_router