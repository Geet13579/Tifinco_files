const mongoose = require('mongoose');
const DeliveryUserSchema = new mongoose.Schema
({
        userid:
        {
            type: String
        },
       name:
       {
           type: String
       },
       address:
        {
            type: JSON,
        },
       tiffin_no:
        {
            type: String,
        },
        tiffintype:
        {
            type: String,
        },
        meal_time:
        {
            type: String,
        },
        meal_pref:
        {
            type: String,
        },
        delivery_time:
        {
             type:String,
            // default: new Date().toUTCString()  
            // type: String, default: (new Date()).getTime()    
        },
       status:
        {
            type: String,
            // default: null
        },
       mobile:
       {
           type : String
       },
       email:
       {
           type : String
       },

});

const delivery_UserInfo = mongoose.model('Sun_delivery_UserInfo', DeliveryUserSchema);
module.exports = delivery_UserInfo 
