let mongoose = require('mongoose'),

  express = require('express'),
  router = express.Router();

// category Model

var Ordernowslider_C = require('../../../model/adminmodel/Orderslider_M');


exports.show = function(req, res) {
    Ordernowslider_C.find((error, data) => {
    if (error) {
      res.json({Ordernowslider_C:error})
    } else {
      res.json({Ordernowslider_C:data})
    }
  }).sort({_id:-1}).limit(4);
};