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
       }
});

const addtiffininfo = mongoose.model('addtiffin_infos', tiffinSchema);
module.exports = addtiffininfo;
