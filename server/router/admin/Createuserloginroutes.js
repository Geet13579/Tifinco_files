const express = require("express");
const Createuserloginroutes = express.Router();
var Adminauth_m = require('../../middleware/adminmiddleware/Adminmiddlewareauth');

 var Createuser_C = require('../../controller/admin/Createuser_C');
//  var offersliders = require('../../controller/admin/Offers_C');
//  var ordersliders = require('../../controller/admin/OrderNowsliderC');
var Createuser_mid_image = require('../../middleware/adminmiddleware/adminimages/Createuser_mid_image.js');
// var Orderslider_mid_image = require('../../middleware/adminmiddleware/adminimages/Orderslider_mid_image');
// var Offer_mid_image = require('../../middleware/adminmiddleware/adminimages/Offer_mid_image');
// var Sociallink = require('../../controller/admin/');


Createuserloginroutes.post('/Insert',Createuser_mid_image.single('profileImage'), Createuser_C.create); 

Createuserloginroutes.post('/viewuserlist' , Adminauth_m,Createuser_C.SHOW);
Createuserloginroutes.post('/Delete' , Createuser_C.Delete);
// Createuserloginroutes.post('/deleteslider',Adminauth_m, sliders.delete_sliders);
// Createuserloginroutes.post('/inserOffer',Offer_mid_image.single('offerimages'), offersliders.insertOffer);
// Createuserloginroutes.post('/find' ,Adminauth_m, offersliders.find);
// Createuserloginroutes.post('/deleteofferslider',Adminauth_m, offersliders.delete);
// Createuserloginroutes.post('/inseroderslider',Orderslider_mid_image.single('oderimages'), ordersliders.insertOrder);
// Createuserloginroutes.post('/show' ,Adminauth_m, ordersliders.find);
// Createuserloginroutes.post('/deleteorderslider',Adminauth_m, ordersliders.deleteorder);

//dashboardRoutes.post('/get_subscribenowimage',subsimage.single('subs_image'),dsh.get_subscribenowimage);
//slider_mid_image.single('slider_image')

module.exports = Createuserloginroutes