const express = require('express');
const router = express.Router();
const app = express();
var KitchenRawmaterialroutes = require('../../../router/flutter/kitchen/KitchenRawmaterialroutes.js');
var K_menuroutes = require('../../../router/flutter/kitchen/K_menuroutes.js');
var deliveryStatusRouter = require('../../../router/flutter/kitchen/deliveryStatusRouter.js');

// var plandetailrouteapp = require('../../../router/flutter/user/plandetailrouteapp.js');
// var userroutes= require('../../../router/flutter/user/userroutes.js');

// var auth_c = require('../../../controller/flutter/user/Authuser_C');
// var auth_m = require('../../../middleware/flutter/user/middlewareflutteruser');

// // var auth_m = require('../../../middleware/flutter/user/middlewareflutteruser');
// router.post('/signin', auth_m,auth_c.signin);
// router.post('/verifyOtp', auth_m, auth_c.verifyOtp);
router.use(KitchenRawmaterialroutes);
router.use(K_menuroutes);
router.use(deliveryStatusRouter);
// router.use(plandetailrouteapp);
// router.use(userroutes);

module.exports = router;