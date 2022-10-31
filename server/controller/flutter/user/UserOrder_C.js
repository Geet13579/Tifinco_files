let mongoose = require('mongoose'),

  express = require('express'),
  router = express.Router();

// category Model
var texes = require('../../../model/fluttermodel/userorder_M');
var promocode_m = require('../../../model/adminmodel/dashboard/promocode_m.js');


exports.gettaxes = function(req, res) {

  // res.send("hello")
  texes.find((error, data) => {
    if (error) {
      res.json({userorder_model:error})
    } else {
      res.json(data)
    }
  })
  
};

exports.get_promocodefororders= async function(req,res){

  var data = await promocode_m.find();
  if(data){
    res.send({promocode:data});
  }else{
    res.send({promocode:"error"});
  }

}

