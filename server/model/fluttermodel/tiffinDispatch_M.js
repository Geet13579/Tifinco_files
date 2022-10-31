const mongoose = require('mongoose');
const status_model = new mongoose.Schema
({
    userid:
    {
        type: String
    },
    dispatch_icon: 
    {
        type: String
    }
    
});


const deliveryStatus = mongoose.model('tiffinDispatch_info', status_model);
module.exports = deliveryStatus;