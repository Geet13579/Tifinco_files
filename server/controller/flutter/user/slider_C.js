// slider_infos

let mongoose = require('mongoose'),

  express = require('express'),
  router = express.Router();

// category Model
var slider = require('../../../model/fluttermodel/slider_model');


exports.show = function(req, res) {
  slider.find((error, data) => {
    if (error) {
      res.json({slider:error})
    } else {
      res.json({slider:data})
    }
  })
};