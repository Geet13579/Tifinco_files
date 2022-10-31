const mongoose = require('mongoose');
const status_model = new mongoose.Schema
({
    userid:
    {
        type: String
    },
    delivery_image: 
    {
        type: String
    },
    // foodTaste_rating:
    // {
    //      type: String
    // },
    
    // feedback:
    // {
    //     type:String
    // },

    
});


const deliveryStatus = mongoose.model('deliveryStatus_info', status_model);
module.exports = deliveryStatus;