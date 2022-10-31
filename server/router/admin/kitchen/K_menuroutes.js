const express = require("express");
const K_menuroutes = express.Router();
var K_menus_C = require('../../../controller/admin/kitchen/K_menus_C');
var Adminauth_m = require('../../../middleware/adminmiddleware/Adminmiddlewareauth');


var Menu_M = require('../../../middleware/adminmiddleware/adminimages/kitchenmiddleware/Menu_middleware');



K_menuroutes.post('/K_menuinsert',Menu_M.single('p_image'), K_menus_C.insertmenu);

K_menuroutes.post('/getmenuuser',Adminauth_m,K_menus_C.find);
// K_menuroutes.post('/lastrow', K_menus_C.lastrow);

K_menuroutes.post('/Todaymenu', K_menus_C.Todaymenu);
// K_menuroutes.post('/countmenu',Adminauth_m,K_menus_C.countmenu);


K_menuroutes.post('/deletemenus',Adminauth_m,K_menus_C.delete_Product);
K_menuroutes.post('/getOnemenus', Adminauth_m,K_menus_C.getOnefood);
K_menuroutes.post('/getsearchmenus', Adminauth_m, K_menus_C.getsearch);
K_menuroutes.post('/getfiltermenus',Adminauth_m,K_menus_C.Filter);




module.exports = K_menuroutes