const express = require("express");
const Kitchen_routes = express.Router();
var ktn = require('../../../controller/admin/kitchen/K_dashboard_C');
var subcription = require('../../../controller/admin/kitchen/K_subscription_C');
var Adminauth_m = require('../../../middleware/adminmiddleware/Adminmiddlewareauth');



// Kitchen_routes.post('/kitchen_C', Adminauth_m,ktn.k_Contact);
Kitchen_routes.post('/kitchencontactus', ktn.updatecontact);
Kitchen_routes.post('/k_show', ktn.find);
Kitchen_routes.get('/find1', subcription.show);


//for random food generator

Kitchen_routes.post('/getRandomfoodMaterial', ktn.getRandomfoodMaterial);
Kitchen_routes.post('/getRandomfoodMaterial_tommorrow', ktn.getRandomfoodMaterial_tommorrow);
// Kitchen_routes.post('/filterunlikefood', ktn.filterunlikefood);
// -------------------------------today menu--------------------------------------------------------------------
Kitchen_routes.post('/Todaylunchref', ktn.Todaylunchref);
Kitchen_routes.post('/Todaydinnerref', ktn.Todaydinnerref);
Kitchen_routes.post('/Todaylunch', ktn.Todaylunch);
Kitchen_routes.post('/TodayDinner', ktn.TodayDinner);
// ----------------------------------- tomorrow ----------------------------------------------------------
Kitchen_routes.post('/Tomorrowlunch', ktn.Tomorrowlunch);
Kitchen_routes.post('/TomorrowDinner', ktn.TomorrowDinner);
Kitchen_routes.post('/Tomorrowlunchref', ktn.Tomorrowlunchref);
Kitchen_routes.post('/Tomorrowdinnerref', ktn.Tomorrowdinnerref);


Kitchen_routes.post('/UpdateTodaydinner', ktn.UpdateTodaydinner);
Kitchen_routes.post('/UpdateTodaylunch', ktn.UpdateTodaylunch);
//// ########################################## customer count #####################################################
Kitchen_routes.post('/PremiumCustomercountveg', ktn.PremiumCustomercountveg);
Kitchen_routes.post('/PremiumCustomercountnonveg', ktn.PremiumCustomercountnonveg);
Kitchen_routes.post('/EcoCustomercountveg', ktn.EcoCustomercountveg);
Kitchen_routes.post('/EcoCustomercountnonveg', ktn.EcoCustomercountnonveg);
Kitchen_routes.post('/ExcutiveCustomercountveg', ktn.ExcutiveCustomercountveg);
Kitchen_routes.post('/ExcutiveCustomercountnonveg', ktn.ExcutiveCustomercountnonveg);

///////////////----------------------------tiffin count----------------------------------------///////////////////////
Kitchen_routes.post('/Tiffinlunchcount', ktn.Tiffinlunchcount);
Kitchen_routes.post('/Tiffindinnercount', ktn.Tiffindinnercount);

// Kitchen_routes.post('/Tiffinlunchroticount', ktn.Tiffinlunchroticount);
// Kitchen_routes.post('/Tiffindinnerroticount', ktn.Tiffindinnerroticount);


module.exports = Kitchen_routes