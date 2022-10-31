const express = require("express");
const Faqroutes = express.Router();
var Adminauth_m = require('../../middleware/adminmiddleware/Adminmiddlewareauth');

 var FAQ_C = require('../../controller/admin/FAQ_C');



Faqroutes.post('/FAQINSERT', FAQ_C.create); 
Faqroutes.post('/FAQSHOW', Adminauth_m,FAQ_C.SHOW); 
Faqroutes.post('/FAQDelete',Adminauth_m,FAQ_C.Delete); 
Faqroutes.post('/FAQgetsearchdata',Adminauth_m, FAQ_C.getsearchdata); 
Faqroutes.post('/FAQgetoneid',Adminauth_m, FAQ_C.getoneid); 
Faqroutes.post('/FAQupdate', FAQ_C.update); 

// Faqroutes.post('/viewuserlist' , Adminauth_m,Createuser_C.SHOW);
// Faqroutes.post('/Delete' , Createuser_C.Delete);


module.exports = Faqroutes