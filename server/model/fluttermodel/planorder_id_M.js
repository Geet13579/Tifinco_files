const mongoose = require('mongoose');
const planorder_id_M = new mongoose.Schema({
    order_id: {
        type: Number
    },
    cforderid:
    {
        type:String
    }
 

 

});


const plan_Order_id_info = mongoose.model('planorder_id_info', planorder_id_M);
module.exports = plan_Order_id_info;