const express = require("express");
const deliveryRoutes = express.Router();

const nodemailer = require("nodemailer");

var addtiffin = require('../../../controller/admin/delivery/Addtiffin_C');

// var addtiffin = require('../../../controller/admin/delivery/Addtiffin_C');

// var tiffinPrice = require('../../../controller/admin/delivery/TiffinPrice_C');

var Adminauth_m = require('../../../middleware/adminmiddleware/Adminmiddlewareauth');

deliveryRoutes.post('/addtiffin', Adminauth_m,addtiffin.insertnewtiffin);

deliveryRoutes.post('/showtiffin', Adminauth_m,addtiffin.showtiffins);
deliveryRoutes.post('/showlasttiffin',addtiffin.showlasttiffinsno);

deliveryRoutes.post('/searchtiffin',Adminauth_m,addtiffin.searchtiffins);

deliveryRoutes.post('/getOnetiffin',Adminauth_m,addtiffin.getOnetiffin);

deliveryRoutes.post('/disscardOnetiffin',Adminauth_m,addtiffin.disscardOnetiffin);

deliveryRoutes.post('/showdiscardtiffin',Adminauth_m,addtiffin.showdiscardtiffin);

// deliveryRoutes.post('/insert_TiffinPrice',tiffinPrice.insert_TiffinPrice);

// deliveryRoutes.post('/get_TiffinPrice',tiffinPrice.get_TiffinPrice);

// deliveryRoutes.post('/delete_TiffinPrice',tiffinPrice.delete_TiffinPrice);

deliveryRoutes.post('/searchdiscardtiffins',Adminauth_m,addtiffin.searchdiscardtiffins);

deliveryRoutes.post('/deleteOnedistiffin',Adminauth_m,addtiffin.deleteOnedistiffin);

deliveryRoutes.post('/deletemanydistiffin',addtiffin.deleteMuldistiffin);

// deliveryRoutes.post('/shortes_path',addtiffin.deleteMuldistiffin);


module.exports = deliveryRoutes