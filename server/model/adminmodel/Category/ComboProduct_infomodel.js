const mongoose = require('mongoose');
const comboproductmodel = new mongoose.Schema({
    p_name: {
        type: String
    },
    p_image: {
        type: String
    },
    p_combotype: {
        type: String
    },
    p_category: {
        type: String
    },
    p_price: {
        type: String
    },
    p_description: {
        type: String
    },
    p_rating: {
        type: String
    },
    offer:{
        type:String
    },
    extra:{
        type:String 
    },
    tifinco_special:{
        type:String 
    }
});


const comboproduct_info= mongoose.model('comboproduct_infos', comboproductmodel);
module.exports = comboproduct_info ;