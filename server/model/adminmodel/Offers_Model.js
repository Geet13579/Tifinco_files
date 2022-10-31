const mongoose = require('mongoose');
const offerModel = new mongoose.Schema({
    image_name: {
        type: String
    },
    p_name: {
        type: String
    },
    discount: {
        type: String
    },
    price: {
        type: String
    },
    prevprice:{
        type:String
    }
});


const offer_info = mongoose.model('offer_info', offerModel);
module.exports = offer_info;