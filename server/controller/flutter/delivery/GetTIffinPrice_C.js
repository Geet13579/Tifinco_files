// var tiffinprice = require('../../../../model/adminmodel/deliverymodel/Tiffinprice_Model.js');   

var tiffinprice = require('../../../model/adminmodel/tiffinprice_M.js')

exports.get_tiffinprice = function(req,res)
 {
// res.send("heeeeeeeeeeeee");
    tiffinprice.find((error, data) => {
  if (error) {
    res.json({msg:error})
  } else {
    res.json(data)
  }
}).sort({_id:1})

}