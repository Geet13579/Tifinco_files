var Jimp = require('jimp');

const Contantcheckbox_M = require("../../../model/adminmodel/Contantcheckbox_M");









exports.CONTANTCHECKBOXSHOW = function(req, res) {
  
  Contantcheckbox_M.find((error, data) => {
      if (error) {
        res.json({Contantcheckbox_M:error})
      } else {
        res.json(data)
      }
    }).sort({_id:1})
  };
