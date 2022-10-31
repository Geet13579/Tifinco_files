const express = require("express");
const UserRoutes = express.Router();
var Adminauth_m = require('../../../middleware/adminmiddleware/Adminmiddlewareauth');

var User_C = require('../../../controller/admin/Customer/User_C');

var handelUsers_C = require('../../../controller/admin/Customer/handleusers_C.js');


UserRoutes.post('/getuserdata',Adminauth_m,User_C.getuserdata);
UserRoutes.post('/searchcustomer',Adminauth_m,User_C.searchcustomer);
UserRoutes.post('/filtercustomer',Adminauth_m,User_C.filtercustomer);

UserRoutes.post('/testmessage',Adminauth_m,User_C.testmessage);
UserRoutes.post('/forallsendnotification',Adminauth_m,User_C.foralltestmessage);

UserRoutes.post('/getUserplandetail',Adminauth_m,User_C.getUserplandetail);
UserRoutes.post('/getUserplandetail_id',Adminauth_m,User_C.getUserplandetail_id);

UserRoutes.post('/filteruserplan',Adminauth_m,User_C.filteruserplan);
UserRoutes.post('/CountUSER',Adminauth_m,User_C.CountUSER);
UserRoutes.post('/searchuserplan',Adminauth_m,User_C.searchuserplan);
UserRoutes.post('/activeUsers',Adminauth_m,User_C.activeUsers);
UserRoutes.post('/ExpaireUsers',Adminauth_m,User_C.ExpaireUsers);

// UserRoutes.post('/sendemailtocust',User_C.sendemailtocust);
UserRoutes.post('/sendsingleemailtocust',User_C.sendsingleemailtocust);
UserRoutes.post('/sendemailtoMulcust',User_C.sendemailtoMulcust);



UserRoutes.post('/storeusersmgs',handelUsers_C.storeusersmgs);
UserRoutes.post('/showusersmgs',Adminauth_m,handelUsers_C.showusersmgs);


// UserRoutes.post('/storeuserinfo',handelUsers_C.storeusersinfo);
UserRoutes.post('/showuserinfo',Adminauth_m,handelUsers_C.showuserinfo);
UserRoutes.post('/searchusers',Adminauth_m,handelUsers_C.searchusers);
UserRoutes.post('/sendemailtouser',Adminauth_m,handelUsers_C.sendemailtouser);
UserRoutes.post('/sendemailtoMulUser',Adminauth_m,handelUsers_C.sendemailtoMulUser);
UserRoutes.post('/deleteSignleUserComment',Adminauth_m,handelUsers_C.deleteSignleUserComment);
UserRoutes.post('/sendemailForuserComment',handelUsers_C.sendemailForuserComment);
UserRoutes.post('/deletemulusercomment',handelUsers_C.deletemulusercomment);


UserRoutes.post('/storenewsletters',handelUsers_C.storenewsletters);
UserRoutes.post('/shownewsletterlist',handelUsers_C.shownewsletterlist);
UserRoutes.post('/searchnewsletter',handelUsers_C.searchnewsletter);
UserRoutes.post('/sendsingleusernewsletter',handelUsers_C.sendsingleusernewsletter);
UserRoutes.post('/autoGeneratenewsletters',handelUsers_C.autoGeneratenewsletters);
UserRoutes.post('/deletesubscribeuser',handelUsers_C.deletesubscribeuser);
UserRoutes.post('/unsubscribeuser',handelUsers_C.unsubscribeuser);


UserRoutes.post('/sendemailapplink',handelUsers_C.sendemailapplink);
UserRoutes.post('/mobilesms',handelUsers_C.mobilesms);


UserRoutes.post('/livechatapp',handelUsers_C.livechatapp);








module.exports = UserRoutes