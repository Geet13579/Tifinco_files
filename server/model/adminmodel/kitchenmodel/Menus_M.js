


// const { timeStamp } = require('console');
const mongoose = require('mongoose');
const Menus_M = new mongoose.Schema({
    // p_menu: {
    //     type: String
    // },
    // p_qr1: {
    //     type: String
    // },
    p_foodtype: {
        type: String
    },
    p_foodqr:
    {
        type:String
    },
    p_name:
    {
        type:String
    },
    p_date:
    {
        type:Date
    },
    food_date:
    {
        type:String
    },
    food_rawmaterial:
    {
        type:String
    },
    time : { type : Date, default: Date.now },

  
 
  
});


const K_menus_info= mongoose.model('K_menus_info', Menus_M);
module.exports = K_menus_info ;