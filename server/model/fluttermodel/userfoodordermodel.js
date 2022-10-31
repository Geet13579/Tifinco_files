const mongoose = require('mongoose');
const ordermodel = new mongoose.Schema({
    name: {
        type: String
    },
    cust_id: {
        type: String
    },
    pay_id: {
        type: String
    },
    order_id: {
        type: String
    },
    amount: {
        type: String
    },
    status: {
        type: String
    },
    fooditem:{
        type:JSON
    },
    address1:{
        type: String  
    }, 
    address2:{
        type: String
    },
    house_no:{
        type: String
    },
    landmark:{
        type: String
    },
    addresstype:{
        type: String
    },
    lat:{
        type: String
    },
    long:{
        type: String
    },
   


});


const foodorderInfo = mongoose.model('foodorder_info', ordermodel);
module.exports = foodorderInfo;