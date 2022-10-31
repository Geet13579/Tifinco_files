// newAllocated_tiffin

const mongoose = require('mongoose');
const tiffin_allocated_data = new mongoose.Schema({
//   userid:{
//     type: String,
//    },
   
//    plantype:{
//     type: String,
//    },
  
//    tiffintype:{
//     type: String,
//    },
    
//    extra_item:{
//     type: String,
//    },
//    quantity:
//      {
//         type :String,
//      },

//    sabji:
//    {
//       type: JSON,
//    },
//   sweet_dish:
//   {
//      type: String,
//   },
//    meal_pref:
//   {
//     type: String,
//     require: true
//   },
       
//   tiffin_no:
//  {
//    type: String,
//     require: true
//  },
//  name :{
//   type:String
//    },

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
   //   quantity:
   //   {
   //      type :Array,
   //   },
     sabji:
     {
        type: JSON,
     },
   //  sweet_dish:
   //  {
   //     type: String,
   //  },
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
const allocated_tiffin_info = mongoose.model('Allocated_tiffin_history', tiffin_allocated_data);
module.exports = allocated_tiffin_info;