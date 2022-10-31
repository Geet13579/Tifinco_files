const mongoose = require('mongoose');
const Addrawmaterial_M = new mongoose.Schema({
    p_name: {
        type: String
    },
    // p_image: {
    //     type: String
    // },
    p_foodtype: {
        type: String
    },
    p_date: {
        type: Date
    },
    time : { type : Date, default: Date.now },
    // p_price: {
    //     type: String
    // },
    // p_rawmaterial: {
    //     type: String
    // }
  
});


const K_rawmaterial_info= mongoose.model('K_rawmaterial_info', Addrawmaterial_M);
module.exports = K_rawmaterial_info ;