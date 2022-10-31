const mongoose = require('mongoose');
const Corporate_MSchema = new mongoose.Schema({
   corporate_image:{
        type: String
       },
       corporate_image2:
       {
         type:String
       }
    
});
const Corporate_M1 = mongoose.model('corporate_M_info',Corporate_MSchema);
module.exports = Corporate_M1;



// /////////////////////////
// const mongoose = require('mongoose');
// const Corporate_MSchema = new mongoose.Schema({
//    corporate_image:{
//         type: String
//        }
    
// });
// ​
// ​
// ​
// const Corporate_M1 = mongoose.model('corporate_M_info',Corporate_MSchema);
// module.exports = Corporate_M1;