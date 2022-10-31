
const mongoose = require('mongoose');
const status_model = new mongoose.Schema
({
    userid:
    {
        type: String
    },
    preparing_icon: 
    {
        type: String
    }
    
});


const deliveryStatus = mongoose.model('tiffinPreparing_info', status_model);
module.exports = deliveryStatus;