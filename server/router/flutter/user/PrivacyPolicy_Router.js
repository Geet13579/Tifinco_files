const express = require("express");
const PrivacypolicyRoutes = express.Router();
// var auth_m = require('../../../middleware/flutter/user/middlewareflutteruser');

// var optionalitem= require('../../../controller/flutter/user/OptionalItem_C.js');

var PrivacyPolicy= require('../../../controller/flutter/user/PrivacyPolicy_C.js');


 PrivacypolicyRoutes.get('/showprivacypolicy',PrivacyPolicy.showPrivacyPolicy);
 PrivacypolicyRoutes.get('/showReturn_Refund_Policy',PrivacyPolicy.showReturn_Refund_Policy);
 PrivacypolicyRoutes.get('/showEndUserLicenseAgreement',PrivacyPolicy.showEndUserLicenseAgreement);
 PrivacypolicyRoutes.get('/showCookiePolicy',PrivacyPolicy.showCookiePolicy);
 PrivacypolicyRoutes.get('/showDesclaimer',PrivacyPolicy.showDesclaimer);
 PrivacypolicyRoutes.get('/showTerms_Conditions',PrivacyPolicy.showTerms_Conditions);
  


module.exports =PrivacypolicyRoutes