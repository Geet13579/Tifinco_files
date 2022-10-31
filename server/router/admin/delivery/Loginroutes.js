const express = require("express");
const Loginroutes = express.Router();
var Login_C = require('../../../controller/admin/delivery/Login_C.js');
// var user_Plan_info = require('../../../controller/admin/delivery/UserPlanInfo_C');
var Auth = require('../../../middleware/adminmiddleware/adminimages/Deliverylogin_mid');
var middlewareLogin = require('../../../middleware/adminmiddleware/adminimages/deliveryRegister_Mid.js')
Loginroutes.post('/Login_C',Login_C.login); 



var multer  = require('multer');
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './public/deliveryRegistration/')
    },
    filename: function (req, file, cb) {
      cb(null, Date.now()+file.originalname)
    }
  });
 
 var upload = multer({ 
     storage:storage,

  })

  var uploadMultiple = upload.fields([ { name: 'pan_image' }, { name: 'adhaar_image' }, { name: 'profile_image' }])
Loginroutes.post('/register',uploadMultiple, Login_C.register);





module.exports = Loginroutes