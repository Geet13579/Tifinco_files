const express = require("express");
const categoryRoutes = express.Router();
var Adminauth_m = require('../../middleware/adminmiddleware/Adminmiddlewareauth');

  var category = require('../../controller/admin/Category_C');
 var category_mid_image = require('../../middleware/adminmiddleware/adminimages/category_mid_image');
 var catCheck = require('../../middleware/adminmiddleware/adminimages/Category_check');
 var Cattext = require('../../middleware/adminmiddleware/adminimages/Cattext');
// var Sociallink = require('../../controller/admin/');


// sliderRoutes.post('/insertslider',slider_mid_image.single('slider_image'), sliders.insertsliders);
categoryRoutes.post('/insert_category' ,category_mid_image.single('category_image'), category.insertCategory);
categoryRoutes.post('/get_category',Adminauth_m,category.showcategory);
categoryRoutes.post('/deletecategory', Adminauth_m,category.delete_category);

//dashboardRoutes.post('/get_subscribenowimage',subsimage.single('subs_image'),dsh.get_subscribenowimage);
//slider_mid_image.single('slider_image')

module.exports = categoryRoutes