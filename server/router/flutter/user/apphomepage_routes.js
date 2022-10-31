const express = require("express");
const apphomeRoutes = express.Router();
 var apphomepage = require('../../../controller/flutter/user/AppHome.js');
 var auth_m = require('../../../middleware/flutter/user/middlewareflutteruser');

var slider_C = require('../../../controller/flutter/user/slider_C');
var corporate_C = require('../../../controller/flutter/user/corporate_C');
var subscribenow = require('../../../controller/flutter/user/subscribe_C');
var Offerslider_C = require('../../../controller/flutter/user/Offerslider_C');
var Ordernowslider_C = require('../../../controller/flutter/user/Ordernowslider_C');
var FAQ_C = require('../../../controller/flutter/user/FAQ_C');
var ContantCHECKBOX_C = require('../../../controller/flutter/user/ContantCHECKBOX_C');

apphomeRoutes.post('/get_category' ,auth_m,apphomepage.show_category);
apphomeRoutes.post('/get_productlist' , auth_m,apphomepage.show_products);
apphomeRoutes.post('/foodprefwise_productlist' ,auth_m,apphomepage.foodprefwise_productlist);


apphomeRoutes.post('/categorywise_product' ,auth_m,apphomepage.categorywise_product);
apphomeRoutes.post('/getfood_with_foodpref_and_catgeory',auth_m ,apphomepage.getfood_with_foodpref_and_catgeory);
apphomeRoutes.post('/getproductoffertag',auth_m,apphomepage.getproductoffertag);

apphomeRoutes.post('/productlistfilter',auth_m,apphomepage.productlistfilter);


apphomeRoutes.post('/slider',auth_m, slider_C.show);
apphomeRoutes.post('/corporateorder',auth_m,corporate_C.show);
apphomeRoutes.post('/subscribenow',auth_m,subscribenow.show);
apphomeRoutes.post('/Offerslider',auth_m,Offerslider_C.show);
apphomeRoutes.post('/Ordernowslider_C',auth_m,Ordernowslider_C.show);

apphomeRoutes.post('/FAQSHOW',auth_m,FAQ_C.FAQSHOW);
apphomeRoutes.post('/CONTANTCHECKBOX',auth_m,ContantCHECKBOX_C.CONTANTCHECKBOXSHOW);





module.exports = apphomeRoutes