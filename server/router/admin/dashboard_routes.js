const express = require("express");
const dashboardRoutes = express.Router();
var dsh = require('../../controller/admin/Dashboard');
// var tiffinPrice = require('../../controller/admin/TiffinPrice_C');
var subsimage = require('../../middleware/adminmiddleware/adminimages/subscribenow_mid_image');


var appbarimg = require('../../middleware/adminmiddleware/adminimages/appbar_mid_image');
var cor_image = require('../../middleware/adminmiddleware/adminimages/Corporate_middleware');
var Adminauth_m = require('../../middleware/adminmiddleware/Adminmiddlewareauth');
var promocode = require('../../controller/admin/Promocode_C');
var getmenuprofileimage_mid = require('../../middleware/adminmiddleware/adminimages/getmenuprofileimage_mid');

dashboardRoutes.post('/contactus', Adminauth_m,dsh.contactus);
dashboardRoutes.post('/get_contactus_info',Adminauth_m, dsh.get_contactus_info);

dashboardRoutes.post('/Sociallink',Adminauth_m,  dsh.SocialUpdate);
dashboardRoutes.post('/get_social_info',Adminauth_m, dsh.get_social_info);

dashboardRoutes.post('/get_subscribenowimage',subsimage.single('subs_image'),dsh.get_subscribenowimage);


dashboardRoutes.post('/get_subscribenow_info', Adminauth_m,dsh.get_subscribenow_info);
dashboardRoutes.post('/get_corporate_image',cor_image.single('corporate_image'),dsh.corporateinsert);
dashboardRoutes.post('/get_corporate_image1',cor_image.single('corporate_image2'),dsh.corporateinsert1);

dashboardRoutes.post('/get_corporate_info', dsh.get_corporate_info);
dashboardRoutes.post('/get_corporate_info1', dsh.get_corporate_info1);

dashboardRoutes.post('/getmenuprofileimageINSERT',getmenuprofileimage_mid.single('image'),dsh.getmenuprofileimageINSERT);
dashboardRoutes.post('/getmenuprofileimageshow', dsh.getmenuprofileimage);

dashboardRoutes.post('/update_TiffinPrice', dsh.update_TiffinPrice);
dashboardRoutes.post('/get_TiffinPrice', dsh.get_TiffinPrice);
dashboardRoutes.post('/delete_TiffinPrice', dsh.delete_TiffinPrice);

dashboardRoutes.post('/insertpromocode', promocode.insertpromocode);
dashboardRoutes.post('/showpromocodelist', promocode.Showpromocodelist);
dashboardRoutes.post('/deletepromocode', promocode.deletepromocode);


// App Background Image


// dashboardRoutes.post('/insert_appbar_bgimg',appbarimg.single('Appbar_bgimage'),dsh.insertImg_For_Appbar);





var multer  = require('multer');
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './public/app_bgimage/')
    },
    filename: function (req, file, cb) {
      cb(null, Date.now()+file.originalname)
    }
  });
 
 var upload = multer({ 
     storage:storage,

  })

  var uploadMultiple = upload.fields([ { name: 'appbar_bgimage' }, { name: 'appbar_icon' }])


  
  dashboardRoutes.post('/insert_appbar_bgimg',uploadMultiple, dsh.insertImg_For_Appbar);

  dashboardRoutes.post('/show_appbarImages',dsh.show_appbarImages);


  dashboardRoutes.post('/update_appbarImages',uploadMultiple,dsh.update_appbarImages);



module.exports = dashboardRoutes