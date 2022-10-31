const mongoose = require('mongoose');
const appbgImge = new mongoose.Schema({
   appbar_bgimage:{
        type: String
       },

       appbar_icon:{
         type: String
        },
    
});
const appbar_img = mongoose.model('appbar_bgimages_info',appbgImge);
module.exports = appbar_img;
