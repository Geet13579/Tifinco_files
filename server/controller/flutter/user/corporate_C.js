// Corporate_infos

let mongoose = require('mongoose'),

  express = require('express'),
  router = express.Router();

// category Model
var corporate = require('../../../model/adminmodel/dashboard/corporate_m');


exports.show = function(req, res) {
  corporate.find((error, data) => {
    if (error) {
      res.json({corporate:error})
    } else {
      res.json({corporate:data})
    }
  })
};