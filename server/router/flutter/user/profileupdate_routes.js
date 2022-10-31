const express = require("express");
const profileupdate_routes = express.Router();
var auth_m = require('../../../middleware/flutter/user/middlewareflutteruser');
// var getmenuprofileimage_mid = require('../../../middleware/adminmiddleware/adminimages/getmenuprofileimage_mid');

var Profile_update_C = require('../../../controller/flutter/user/Profile_update_C.js');

profileupdate_routes.post('/profile_update', Profile_update_C.profile_update);

profileupdate_routes.post('/profile_show',auth_m, Profile_update_C.profile_show);

// profileupdate_routes.post('/updateprofile_image', Profile_update_C.updateprofile);
profileupdate_routes.post('/update',auth_m, Profile_update_C.update);


module.exports = profileupdate_routes