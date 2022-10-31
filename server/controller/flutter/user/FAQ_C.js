var Jimp = require('jimp');

const FAQ_M = require("../../../model/adminmodel/FAQ_M");









exports.FAQSHOW = function(req, res) {
  
  FAQ_M.find((error, data) => {
      if (error) {
        res.json({FAQ_M:error})
      } else {
        res.json(data)
      }
    }).sort({_id:1})
  };
