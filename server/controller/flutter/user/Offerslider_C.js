let mongoose = require('mongoose'),

  express = require('express'),
  router = express.Router();

// category Model
var Offers_Model = require('../../../model/adminmodel/Offers_Model');


exports.show = function(req, res) {
  Offers_Model.find((error, data) => {
    if (error) {
      res.json({Offers_Model:error})
    } else {
      res.json({Offers_Model:data})
    }
  })
};