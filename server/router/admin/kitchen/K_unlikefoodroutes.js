const express = require("express");
const K_unlikefoodroutes = express.Router();
var K_unlikefood_C = require('../../../controller/admin/kitchen/K_unlikefood_C');
var Adminauth_m = require('../../../middleware/adminmiddleware/Adminmiddlewareauth');







K_unlikefoodroutes.post('/addUnlikefood',  K_unlikefood_C.addUnlikefood);

// K_unlikefoodroutes.post('/insertunlikefood',  K_addUnlikefood_C.insertunlikefood);
// K_unlikefoodroutes.post('/Masterlistshow',Adminauth_m, K_Mastermenu_C.Masterlistshow);


// // K_unlikefoodroutes.post('/getmenuuser',Adminauth_m,K_menus_C.find);
// // K_unlikefoodroutes.post('/lastrow',Adminauth_m, K_menus_C.lastrow);
// // K_unlikefoodroutes.post('/countmenu',Adminauth_m,K_menus_C.countmenu);


// K_unlikefoodroutes.post('/delete_mastermenu',Adminauth_m,K_Mastermenu_C.delete_mastermenu);
// // K_unlikefoodroutes.post('/getOnemenus',K_Mastermenu_C.getOnefood);
// K_unlikefoodroutes.post('/getsearchmastermenu',Adminauth_m,K_Mastermenu_C.getsearchmastermenu);
// K_unlikefoodroutes.post('/Filtermenu',Adminauth_m,K_Mastermenu_C.Filtermenu);




module.exports = K_unlikefoodroutes