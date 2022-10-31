const express = require("express");
const Suggestion_routes = express.Router();
var auth_m = require('../../../middleware/flutter/user/middlewareflutteruser');
var Suggestion_C= require('../../../controller/flutter/user/Suggestion_C.js');

Suggestion_routes.post('/insert_Suggestion',auth_m, Suggestion_C.insert_Suggestion);





module.exports = Suggestion_routes