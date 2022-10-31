const express = require("express");
const sliderRoutes = express.Router();
var Adminauth_m = require('../../middleware/adminmiddleware/Adminmiddlewareauth');

 var sliders = require('../../controller/admin/Slider_C');
 var offersliders = require('../../controller/admin/Offers_C');
 var ordersliders = require('../../controller/admin/OrderNowsliderC');
var slider_mid_image = require('../../middleware/adminmiddleware/adminimages/slider_mid_image');
var Orderslider_mid_image = require('../../middleware/adminmiddleware/adminimages/Orderslider_mid_image');
var Offer_mid_image = require('../../middleware/adminmiddleware/adminimages/Offer_mid_image');
// var Sociallink = require('../../controller/admin/');


sliderRoutes.post('/insertslider',slider_mid_image.single('slider_image'), sliders.insertsliders);
sliderRoutes.post('/get_sliders' ,Adminauth_m, sliders.showslider);
sliderRoutes.post('/deleteslider',Adminauth_m, sliders.delete_sliders);
sliderRoutes.post('/inserOffer',Offer_mid_image.single('offerimages'), offersliders.insertOffer);
sliderRoutes.post('/find' ,Adminauth_m, offersliders.find);
sliderRoutes.post('/deleteofferslider',Adminauth_m, offersliders.delete);
sliderRoutes.post('/inseroderslider',Orderslider_mid_image.single('oderimages'), ordersliders.insertOrder);
sliderRoutes.post('/show' ,Adminauth_m, ordersliders.find);
sliderRoutes.post('/deleteorderslider',Adminauth_m, ordersliders.deleteorder);

//dashboardRoutes.post('/get_subscribenowimage',subsimage.single('subs_image'),dsh.get_subscribenowimage);
//slider_mid_image.single('slider_image')

module.exports = sliderRoutes