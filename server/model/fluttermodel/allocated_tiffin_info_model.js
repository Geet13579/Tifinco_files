const mongoose = require('mongoose');
const tiffin_allocated_data = new mongoose.Schema({

   userid:{
      type: String,
     },
    
     plantype:{
      type: String,
     },
    
     tiffintype:{
      type: String,
     },
      
     extra_item:{
      type: Array,
     },

     useraddress: 
     {
       type: JSON,
     },
     sabji:
     {
        type: JSON,
     },
    meal_time:
    {
       type: String,
    },
     meal_pref:
    {
      type: String,
      require: true
    },
         
    tiffin_no:
   {
     type: String,
      require: true
   },
   name :{
        type:String
         },
   time_stamp:{
      type:Date,
   }
      
      
});
const allocated_tiffin_info = mongoose.model('allocated_tiffin_info', tiffin_allocated_data);
module.exports = allocated_tiffin_info;