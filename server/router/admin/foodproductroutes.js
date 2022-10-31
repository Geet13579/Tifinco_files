const express = require("express");
const foodProductRoutes = express.Router();

var Adminauth_m = require('../../middleware/adminmiddleware/Adminmiddlewareauth');

  var Foodproduct = require('../../controller/admin/Foodproduct_C');
  var Optionalitem = require('../../controller/admin/OptionalItem_C');
 var foodproduct = require('../../middleware/adminmiddleware/adminimages/foodproduct_m');

 
 //categoryRoutes.post('/insert_category' ,category_mid_image.single('category_image'), category.insertCategory);
 foodProductRoutes.post('/insert_foodproduct' ,foodproduct.single('p_image'), Foodproduct.insertfoodproduct);
// categoryRoutes.get('/get_category',category.showcategory);
foodProductRoutes.post('/Foodproduct',Adminauth_m,Foodproduct.find);
foodProductRoutes.post('/delete_FoodProduct',Adminauth_m,Foodproduct.delete_FoodProduct);
foodProductRoutes.post('/getOneProduct',Adminauth_m,Foodproduct.getOneproduct);
foodProductRoutes.post('/getsearchdata',Foodproduct.getsearchdata);
foodProductRoutes.post('/getfilterdata',Adminauth_m,Foodproduct.getfilterdata);
foodProductRoutes.post('/updateproduct',foodproduct.single('p_image'),Foodproduct.updateproduct);

foodProductRoutes.post('/addoptionalitem',Optionalitem.addoptional);
foodProductRoutes.post('/showoptionalitem',Optionalitem.getOptionalitems);
foodProductRoutes.post('/deleteoptionalitem',Optionalitem.deleteoptionalitems);
foodProductRoutes.post('/updateoptionalitem',Optionalitem.updateoptionalitems);

// categoryRoutes.post('/deletecategory', category.delete_category);

module.exports = foodProductRoutes