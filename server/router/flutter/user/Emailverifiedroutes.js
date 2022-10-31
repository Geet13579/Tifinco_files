const express = require("express");
const Emailverifiedroutes = express.Router();
var auth_m = require('../../../middleware/flutter/user/middlewareflutteruser');
var Emailverified_C= require('../../../controller/flutter/user/Emailverified_C.js');

Emailverifiedroutes.post('/Emailverified_With_Timer', auth_m,Emailverified_C.Emailverified_With_Timer );
Emailverifiedroutes.post('/Emailverified',auth_m,Emailverified_C.Emailverified);
Emailverifiedroutes.post('/mobileverified',auth_m,Emailverified_C.mobileverified);



module.exports = Emailverifiedroutes