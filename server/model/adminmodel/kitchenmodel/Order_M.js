const { timeStamp } = require('console');
const mongoose = require('mongoose');
const Order_M = new mongoose.Schema({
   Ordername : {
        type: String
    },
    customername: {
        type: String
    },
   address : {
        type: String
    },
    orderstatus: {
        type: String
    },
    DeliveredTime : {
        type: String
    },
    price: {
        type: Number
    }
 
  
});


const k_order_info= mongoose.model('k_order_info', Order_M);
module.exports = k_order_info ;