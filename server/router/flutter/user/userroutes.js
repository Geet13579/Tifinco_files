const express = require("express");
const UserRoutes = express.Router();
var auth_m = require('../../../middleware/flutter/user/middlewareflutteruser');
// var getmenuprofileimage_mid = require('../../../middleware/adminmiddleware/adminimages/getmenuprofileimage_mid');

var User_C = require('../../../controller/flutter/user/User_C.js');

UserRoutes.post('/storeaddress',auth_m,User_C.storeaddress);
//UserRoutes.post('/insertuserplan',Plan_Detail.insertuserplan);

UserRoutes.post('/placeorder',auth_m,User_C.placeorder);
UserRoutes.post('/show_UserAddress',auth_m,User_C.show_UserAddress);
UserRoutes.post('/showprofile',auth_m,User_C.showprofile);
UserRoutes.post('/updateuseraddr',auth_m,User_C.updateuseraddr);
UserRoutes.post('/updateprofile',auth_m,User_C.updateprofile1)
UserRoutes.post('/plandetail_show',auth_m,User_C.plandetal_show)
UserRoutes.post('/getmenuprofileimageSHOW',auth_m,User_C.getmenuprofileimageSHOW)
UserRoutes.post('/useraddressDelete',auth_m,User_C.useraddressDelete)
UserRoutes.post('/updatename',auth_m,User_C.updatename);
UserRoutes.post('/fatchwallet',auth_m,User_C.fatchwallet);

// UserRoutes.post('/updateuserwallet',User_C.updateuserwallet)

// UserRoutes.post('/getmenuprofileimage',getmenuprofileimage_mid.single('image'),User_C.getmenuprofileimage);

//UserRoutes.post('/',auth_m,User_C.placeorder);

// UserRoutes.post('/getdetails',User_C.getdetails);



module.exports = UserRoutes