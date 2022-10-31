const mongoose = require('mongoose');
const Contantcheckmeals_M = new mongoose.Schema({
 
   

//     addmeals:
//    {
//     heading :
//     {
//         type:String
//     },
   
//     name:{type: String,default: true} ,
//    }

// //    addmeals: {
// //     type:  JSON,


// //    }  
   

//     // active2: {type: Boolean, default: true },

// }
   addmeals: {
    type:  JSON,
    

   }
   }  
);


const Contantcheckbox_info = mongoose.model('Contantchecboxmeals_info', Contantcheckmeals_M);
module.exports = Contantcheckbox_info;