let mongoose = require('mongoose'),

  express = require('express'),
  router = express.Router();

// category Model
var Addrawmaterial_M = require('../../../model/adminmodel/kitchenmodel/Addrawmaterial_M');


exports.getrawmaterial = function(req, res) {
    Addrawmaterial_M.find((error, data) => {
    if (error) {
      res.json({slider:error})
    } else {
      res.json({slider:data})
    }
  })
};