const mongoose = require('mongoose');
const foodproductmodel = new mongoose.Schema({
    p_name: {
        type: String
    },
    p_image: {
        type: String
    },
    p_foodtype: {
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


const foodproduct_info= mongoose.model('foodproduct_infos', foodproductmodel);
module.exports = foodproduct_info ;