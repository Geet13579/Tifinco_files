const mongoose = require('mongoose');
const Order_id_M = new mongoose.Schema({
    Order_id: {
        type: String
    },
 

 

});


const Order_id_info = mongoose.model('Order_id_info', Order_id_M);
module.exports = Order_id_info;