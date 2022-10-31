const express = require('express');
const router = express.Router();

const allocatetiffin    = require('../delivery/allocatetiffinrouter.js');

const addtiffin    = require('../delivery/deliveryindexrouter.js');
var Login= require('../delivery/Loginroutes.js');

router.use(allocatetiffin);

router.use(addtiffin);
router.use(Login);

module.exports = router;