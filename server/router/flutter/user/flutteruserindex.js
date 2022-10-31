const express = require('express');
const router = express.Router();
const app = express();
var apphome_routes = require('../../../router/flutter/user/apphomepage_routes');
var plandetailrouteapp = require('../../../router/flutter/user/plandetailrouteapp.js');

var appImages = require('../../../router/flutter/user/app_images_routes.js');

var Renewplandetailrouteapp = require('../../../router/flutter/user/RenewPlanRoute.js');

var userroutes= require('../../../router/flutter/user/userroutes.js'); 
var ratingRoutes= require('../../../router/flutter/user/userRatingroutes.js'); 
var privacypolicyroutes= require('../../../router/flutter/user/PrivacyPolicy_Router.js'); 
var corporateorder= require('../../../router/flutter/user/corporateorder_router.js');
var ComboProd_router = require('../../../router/flutter/user/ComboProd_router.js')
var userorder= require('../../../router/flutter/user/userorder_routes.js');

var auth_c = require('../../../controller/flutter/user/Authuser_C');
var Preregistrationroutes=require('../../../router/flutter/user/Preregistrationroutes.js')
var auth_m = require('../../../middleware/flutter/user/middlewareflutteruser');
var profileupdate_routes=require('../../../router/flutter/user/profileupdate_routes.js')
var orderroutes= require('../../../router/flutter/user/orderroutes.js');
var deliveryroutes= require('../../../router/flutter/user/Delivery_routes.js');
var suggestionroutes= require('../../../router/flutter/user/suggestion_routes.js');

var food_productroutes= require('../../../router/flutter/user/foodProductRouter.js');

var paymentsuccessmsgroutes= require('../../../router/flutter/user/paymentsuccessmsgroutes.js');
var Emailverifiedroutes= require('../../../router/flutter/user/Emailverifiedroutes.js');
// var auth_m = require('../../../middleware/flutter/user/middlewareflutteruser');
router.post('/signin', auth_m,auth_c.signin);
router.post('/verifyOtp', auth_m, auth_c.verifyOtp);
router.post('/verifyUSer',auth_m, auth_c.verifyUSer);
router.use(apphome_routes);
router.use(plandetailrouteapp);
router.use(Renewplandetailrouteapp);
router.use(ratingRoutes);

router.use(userroutes);
router.use(privacypolicyroutes);
router.use(corporateorder);
router.use(ComboProd_router);
router.use(userorder);
router.use(Preregistrationroutes);
router.use(profileupdate_routes);
router.use(orderroutes);
router.use(deliveryroutes);
router.use(suggestionroutes);
router.use(food_productroutes);
router.use(paymentsuccessmsgroutes);
router.use(Emailverifiedroutes);
router.use(appImages);


module.exports = router;