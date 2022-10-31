const express = require('express');
const router = express.Router();
const app = express();


var Rating= require('../../../controller/flutter/user/UserRating_C.js');

var auth_m = require('../../../middleware/flutter/user/middlewareflutteruser');

// var auth_m = require('../../../middleware/flutter/user/middlewareflutteruser');
router.post('/insert_rating',auth_m , Rating.insert_rating);

module.exports = router;