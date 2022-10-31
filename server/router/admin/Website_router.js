const express = require("express");
const Website_Routes = express.Router();
// var Adminauth_m = require('../../middleware/adminmiddleware/Adminmiddlewareauth');

 var Website_Bg_Image = require('../../controller/admin/Website_image_C');

var website_mid_image = require('../../middleware/adminmiddleware/adminimages/website_mid_image');


Website_Routes.post('/insertWebsite_Bg_Image' ,website_mid_image.single('image'), Website_Bg_Image.insertWebsite_Bg_Image);
// Website_Routes.post('/insertWebsite_Bg_Image', website_mid_image.fields([{
//     name: 'carousel_img1', maxCount: 1
//   }, {
//     name: 'carousel_img2', maxCount: 1
//   },
//   {
//     name: 'slider_image', maxCount: 1
//   }]), Website_Bg_Image.insertWebsite_Bg_Image);

Website_Routes.post('/get_Website_Bg_Image' ,Website_Bg_Image.get_Website_Bg_Image);
Website_Routes.post('/getOneImage',Website_Bg_Image.getOneImage);

// Website_Routes.post('/deleteslider',Adminauth_m, Website_Bg_Image.delete_Website_Bg_Image);

module.exports = Website_Routes