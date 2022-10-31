



const express = require("express");
const chatroutes = express.Router();

var customerchathandle = require('../../controller/admin/custSupportbotChat_C.js');

chatroutes.post('/getsubcriberemail',customerchathandle.finduseredetails);





module.exports = chatroutes