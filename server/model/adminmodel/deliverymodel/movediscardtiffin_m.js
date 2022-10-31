const mongoose = require('mongoose');
const tiffinSchema = new mongoose.Schema({
  tiffin_no:{
    type: String
   },
   tiffin_cat:{
    type: String
   },
   tiffin_type:{
    type: String
   },
  status: Boolean
}, { timestamps: { 
  } ,


});



const discardtiffin = mongoose.model('discardtiffin_info', tiffinSchema);
module.exports = discardtiffin;
