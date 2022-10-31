const express = require("express");
const userextrafoodRoutes = express.Router();
var Adminauth_m = require('../../middleware/adminmiddleware/Adminmiddlewareauth');

  var UserExtraFood_C = require('../../controller/admin/UserExtraFood_C');
 var userextrafoodmiddleware = require('../../middleware/adminmiddleware/adminimages/userextrafoodmiddleware');



// sliderRoutes.post('/insertslider',slider_mid_image.single('slider_image'), sliders.insertsliders);
userextrafoodRoutes.post('/insert_user_extrafood' ,userextrafoodmiddleware.single('item_image'), UserExtraFood_C.insert_user_extrafood);
userextrafoodRoutes.post('/show_user_extrafood',Adminauth_m,UserExtraFood_C.show_user_extrafood);
userextrafoodRoutes.post('/delete_user_extrafood', Adminauth_m,UserExtraFood_C.delete_user_extrafood);


module.exports = userextrafoodRoutes