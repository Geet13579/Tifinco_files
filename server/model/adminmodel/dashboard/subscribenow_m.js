const mongoose = require('mongoose');
const subscribenowSchema = new mongoose.Schema({
      subs_image:{
        type: String
       }
    
});



const subscribenowinfo = mongoose.model('subscribenow_info', subscribenowSchema);
module.exports = subscribenowinfo;
