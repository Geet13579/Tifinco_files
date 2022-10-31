// let mongoose = require('mongoose'),

  express = require('express'),
  router = express.Router();

var comboprod_model = require('../../../model/adminmodel/Category/ComboProduct_infomodel.js');


exports.Showcombo = function(req, res) 
{
    
    comboprod_model.find((err,data)=>
    {
        if(err)
        {
            res.send({msg:"error"});
        }
        else
        {
            res.send({msg:data});
        }

    });
};