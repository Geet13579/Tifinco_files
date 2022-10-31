const express = require("express");
const Contantcheckboxroutes = express.Router();
var Adminauth_m = require('../../middleware/adminmiddleware/Adminmiddlewareauth');

 var Contantcheckbox_C = require('../../controller/admin/Contantcheckbox_C');



Contantcheckboxroutes.post('/Contactcheckboxinsert', Contantcheckbox_C.create); 
Contantcheckboxroutes.post('/createmeals', Contantcheckbox_C.createmeals); 
Contantcheckboxroutes.post('/Contactcheckboxshow', Adminauth_m,Contantcheckbox_C.SHOW); 
Contantcheckboxroutes.post('/ContactcheckboxDelete',Adminauth_m,Contantcheckbox_C.Delete); 
Contantcheckboxroutes.post('/Contactcheckboxgetsearchdata',Adminauth_m, Contantcheckbox_C.getsearchdata); 
// Contantcheckboxroutes.post('/FAQgetoneid',Adminauth_m, FAQ_C.getoneid); 
// Contantcheckboxroutes.post('/FAQupdate', FAQ_C.update); 

// Contantcheckboxroutes.post('/viewuserlist' , Adminauth_m,Createuser_C.SHOW);
// Contantcheckboxroutes.post('/Delete' , Createuser_C.Delete);


module.exports = Contantcheckboxroutes