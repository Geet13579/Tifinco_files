const mongoose = require('mongoose');
const corporate_orders = new mongoose.Schema({
    institute_name: {
        type: String
    },
    institute_address: {
        type: String
    },
    total_tiffin: {
        type: String
    },
    typeof_tiffin: {
        type: String
    },
    timeof_delivery: {
        type: String
    },
    food_pref: {
        type: String
    },
    food_info: {
        type: JSON
    },
  
});


const corporate_orders_info = mongoose.model('corporate_orders_info', corporate_orders);
module.exports = corporate_orders_info;