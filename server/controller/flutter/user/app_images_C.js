

let mongoose = require('mongoose'),

  express = require('express'),
  router = express.Router();

// category Model
var Appbar_bgimage_M = require('../../../model/adminmodel/dashboard/app_bgimage_M.js');
var App_splash_M = require('../../../model/adminmodel/dashboard/app_splash_image_M.js');

exports.show_appbar_images = function(req, res) {
  Appbar_bgimage_M.find((error, data) => {
    if (error) {
      res.json({Appbar_bgimage_M:error})
    } else {
      res.json({Appbar_bgimage_M:data})
    }
  })
};

exports.show_splash_images = function(req, res) {
  App_splash_M.find((error, data) => {
    if (error) {
      res.json({App_splash_M:error})
    } else {
      res.json({App_splash_M:data})
    }
  })
};