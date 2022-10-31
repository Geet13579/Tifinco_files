var optionalitem_m = require('../../../model/adminmodel/foodproduct/Optionalitem_M.js');


exports.getOptionalitems = function(req,res){

    // res.send("ok")
    optionalitem_m.find((error, data) => {
            if (error) {
              res.json({plandata:error})
            } else {
              res.json(data)
            }
          }).sort({_id:1});
      
      
      }