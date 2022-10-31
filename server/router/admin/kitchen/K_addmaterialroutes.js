const express = require("express");
const K_addmaterialroutes = express.Router();
var K_Addmaterial_C = require('../../../controller/admin/kitchen/K_Addmaterial_C');
var Adminauth_m = require('../../../middleware/adminmiddleware/Adminmiddlewareauth');


var addrow = require('../../../middleware/adminmiddleware/adminimages/kitchenmiddleware/Addraw_mid');



// K_addmaterialroutes.post('/K_rawmaterial',addrow.single('p_image'), K_Addmaterial_C.insertmaterial);

K_addmaterialroutes.post('/K_rawmaterial', K_Addmaterial_C.insertmaterial);

K_addmaterialroutes.post('/getuser', Adminauth_m,K_Addmaterial_C.show);

K_addmaterialroutes.post('/lastrow_rawmaterial',Adminauth_m,K_Addmaterial_C.lastrow_rawmaterial);
// K_addmaterialroutes.post('/count',K_Addmaterial_C.count);
K_addmaterialroutes.post('/K_Todaylunch',K_Addmaterial_C.K_Todaylunch);
// K_addmaterialroutes.post('/K_TodayDinner',K_Addmaterial_C.K_TodayDinner);

K_addmaterialroutes.post('/delete_rawmaterial',Adminauth_m,K_Addmaterial_C.delete_FoodProduct);
K_addmaterialroutes.post('/getoneid', Adminauth_m,K_Addmaterial_C.getoneid);
K_addmaterialroutes.post('/getsearch',Adminauth_m,K_Addmaterial_C.getsearchdata);
K_addmaterialroutes.post('/getfilter',Adminauth_m,K_Addmaterial_C.getfilterdata);
K_addmaterialroutes.post('/update',addrow.single('p_image'),K_Addmaterial_C.update);



module.exports = K_addmaterialroutes