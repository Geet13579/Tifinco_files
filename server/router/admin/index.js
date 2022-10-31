const express = require('express');
const router = express.Router();

const  dashboard_routes  = require('./dashboard_routes.js');
const  Createuserloginroutes  = require('./Createuserloginroutes.js');
const  Faqroutes  = require('./Faqroutes.js');
const  Paymentsuccessmsgroutes  = require('./Paymentsuccessmsgroutes.js');
const  Contantcheckboxroutes  = require('./Contantcheckboxroutes.js');
const  slider_routes  = require('./sliderroutes.js');
const  Website_router  = require('./Website_router.js');
const  category_routes  = require('./categoryRoutes.js');
const foodproduct_routes  = require('./foodproductroutes.js');
const comboProdRoutes = require('./ComboProdRoutes.js')
const plandetail_routes  = require('./plandetailroutes.js');
const userextrafoodroutes  = require('./userextrafoodroutes.js');
const  pamentgetway_routes  = require('./Paymentgetwayroutes.js');
const  userOrder_routes  = require('./userOrder_routes.js');

const Onpageindex = require('./Onepage_R/index.js');


const customerindex = require('./Customer/index.js');
var auth = require('../../controller/admin/Admin_auth');
var profile = require('../../controller/admin/AdminProfile_C');
var dsh = require('../../controller/admin/Dashboard');
// var Createuserloginroutes = require('../../controller/admin/Createuserloginroutes');
var Adminauth_m = require('../../middleware/adminmiddleware/Adminmiddlewareauth');

var upload = require('../../middleware/adminmiddleware/ImageUpload_middleware');
const { appendFile } = require('fs');

const kitchenindex=require('./kitchen/K_indexroutes.js');
const customersupportindex=require('./cust_support/CS_index.js');

const deliveryrouter=require('./delivery/maindeliveryrouter.js');
// const Cust_SupportRouter =require('./cust_support/CS_Router.js');


var forgotpass = require('../../controller/admin/ForgotPass_C.js');

var sendemail = require('../../controller/admin/SendEmail_C.js');


const { route } = require('./dashboard_routes.js');

const chatroutes  = require('./customersupportbotroutes.js');









router.post('/adminauth',auth.signin);


router.post('/sendemail', sendemail.SendEmail);

router.post('/forgotpassword',forgotpass.forgotPassword);

router.post('/linkExpaired',forgotpass.linkExpaired);






router.post('/insert_slider', dsh.slider_insert);

router.post('/profile',Adminauth_m,profile.getProfileData);
router.post('/logout',auth.logout);
router.post('/image_upload',upload.single('image'),dsh.uploadImage);

router.use(Createuserloginroutes);
router.use(dashboard_routes);

router.use(pamentgetway_routes);
router.use(slider_routes);
router.use(Website_router);
router.use(category_routes);
router.use(foodproduct_routes);
router.use(comboProdRoutes);
router.use(plandetail_routes);
router.use(customerindex);
router.use(Onpageindex);

router.use(kitchenindex);
router.use(customersupportindex);
router.use(userextrafoodroutes);
router.use(userOrder_routes);
router.use(Faqroutes);
router.use(Paymentsuccessmsgroutes);
router.use(Contantcheckboxroutes);
// router.use(Cust_SupportRouter);

router.use(chatroutes);


router.use(deliveryrouter);
module.exports = router;