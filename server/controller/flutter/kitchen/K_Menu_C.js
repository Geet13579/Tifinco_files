let mongoose = require('mongoose'),

  express = require('express'),
  router = express.Router();

// category Model
var Menus_M = require('../../../model/adminmodel/kitchenmodel/Menus_M');


exports.getmenu = function(req, res) {
    Menus_M.find((error, data) => {
    if (error) {
      res.json({Menus_M:error})
    } else {
      res.json({Menus_M:data})
    }
  })
};