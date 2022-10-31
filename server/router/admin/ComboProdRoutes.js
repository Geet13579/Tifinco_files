const express = require("express");
const ComboProdRoutes = express.Router();
var Adminauth_m = require('../../middleware/adminmiddleware/Adminmiddlewareauth');

  var ComboProd_C = require('../../controller/admin/ComboProd_C');
 var  upload= require('../../middleware/adminmiddleware/adminimages/ComboProd_mid_image.js');
//  var catCheck = require('../../middleware/adminmiddleware/adminimages/Category_check');
//  var Cattext = require('../../middleware/adminmiddleware/adminimages/Cattext');
// var Sociallink = require('../../controller/admin/');


// sliderRoutes.post('/insertslider',slider_mid_image.single('slider_image'), sliders.insertsliders);
ComboProdRoutes.post('/insert_comboproduct' ,upload.single('p_image') ,ComboProd_C.insertComboProd);
ComboProdRoutes.post('/Show_comboProd',Adminauth_m,ComboProd_C.findComboProd );
ComboProdRoutes.post('/getsearchproduct',Adminauth_m,ComboProd_C.getsearchdata);
ComboProdRoutes.post('/getfilterproduct',Adminauth_m,ComboProd_C.getfilterdata);
ComboProdRoutes.post('/delete_ComboProduct',Adminauth_m,ComboProd_C.delete_ComboProduct);
ComboProdRoutes.post('/updateComboproduct',upload.single('p_image'),ComboProd_C.updateproduct);

ComboProdRoutes.post('/getOneComboProduct',Adminauth_m,ComboProd_C.getOneproduct);

//dashboardRoutes.post('/get_subscribenowimage',subsimage.single('subs_image'),dsh.get_subscribenowimage);
//slider_mid_image.single('slider_image')

module.exports = ComboProdRoutes