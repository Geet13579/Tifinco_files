var Jimp = require('jimp');
var fs = require('fs');
// var userInfomodel = require('../../model/adminmodel/Plan_Detail_M');
var usermodel = require('../../../model/fluttermodel/fluttermodelusers');
 

exports.get_userdetail = function(req, res)
 {
  //  res.send("done");
  
    usermodel.find((error, data) => {
      if (error) {
        res.json({usermodel:error})
      } else {
        res.json(data)
      }
    }).sort({_id:-1})
  };

  
