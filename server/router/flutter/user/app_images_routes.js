const express = require("express");
const UserRoutes = express.Router();
var auth_m = require('../../../middleware/flutter/user/middlewareflutteruser');
// var getmenuprofileimage_mid = require('../../../middleware/adminmiddleware/adminimages/getmenuprofileimage_mid');

var User_C = require('../../../controller/flutter/user/app_images_C.js');


UserRoutes.post('/show_appbar_images',auth_m,User_C.show_appbar_images);

UserRoutes.post('/show_splash_images',auth_m,User_C.show_splash_images);



module.exports = UserRoutes