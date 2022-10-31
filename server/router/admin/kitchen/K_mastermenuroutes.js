const express = require("express");
const K_mastermenuroutes = express.Router();
var K_Mastermenu_C = require('../../../controller/admin/kitchen/K_Mastermenu_C');
var Adminauth_m = require('../../../middleware/adminmiddleware/Adminmiddlewareauth');







K_mastermenuroutes.post('/Mastermenu',  K_Mastermenu_C.Mastermenu);

K_mastermenuroutes.post('/insertunlikefood',  K_Mastermenu_C.filterunlikefood);
K_mastermenuroutes.post('/InserRandomfood',  K_Mastermenu_C.InserRandomfood);
K_mastermenuroutes.post('/Masterlistshow',Adminauth_m, K_Mastermenu_C.Masterlistshow);





K_mastermenuroutes.post('/delete_mastermenu',Adminauth_m,K_Mastermenu_C.delete_mastermenu);

K_mastermenuroutes.post('/getsearchmastermenu',Adminauth_m,K_Mastermenu_C.getsearchmastermenu);
K_mastermenuroutes.post('/Filtermenu',Adminauth_m,K_Mastermenu_C.Filtermenu);




module.exports = K_mastermenuroutes