const mongoose = require('mongoose');
const appbgImge = new mongoose.Schema({
     image:{
         type: String
         },
      icon:{
         type: String
        },
        gif:{
            type: String
           },

    
});
const appbar_img = mongoose.model('app_splash_info',appbgImge);
module.exports = appbar_img;
