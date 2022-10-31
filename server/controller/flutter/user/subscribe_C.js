// subscribeinfo_infos

let mongoose = require('mongoose'),

  express = require('express'),
  router = express.Router();

// category Model
var subscribenow_m = require('../../../model/adminmodel/dashboard/subscribenow_m');


exports.show = function(req, res) {
  subscribenow_m.find((error, data) => {
    if (error) {
      res.json({subscribenow_m:error})
    } else {
      res.json({subscribenow_m:data})
    }
  })
};