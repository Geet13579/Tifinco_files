const { timeStamp } = require('console');
const mongoose = require('mongoose');
const RandomNoG_M = new mongoose.Schema({
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
    meal_time:{
        type:String,
    },
    day:{
        type:String,
    }
  
});



const RandomnoG_info= mongoose.model('RandomnoG_info', RandomNoG_M);
module.exports = RandomnoG_info ;