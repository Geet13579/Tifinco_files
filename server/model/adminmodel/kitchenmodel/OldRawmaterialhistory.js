const { timeStamp } = require('console');
const mongoose = require('mongoose');
const oldrawmaterialdetail = new mongoose.Schema({
    RM1 : {
        type: String
    },
    RM2 : {
        type: String
    },
    RM3 : {
        type: String
    },
    date_r:{
        type:Date,
    }
    ,
 
  
});



const rawmaterial_history= mongoose.model('rawmaterial_history', oldrawmaterialdetail);
module.exports = rawmaterial_history ;