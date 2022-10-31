const mongoose = require('mongoose');
const Orderslider_M = new mongoose.Schema({
    odernow_image: {
        type: String
    },
    name:
    {
        type:String
    }
});


const orderslider_info = mongoose.model('orderslider_info', Orderslider_M);
module.exports = orderslider_info;