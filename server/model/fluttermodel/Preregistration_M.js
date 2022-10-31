const mongoose = require('mongoose');
const Preregistration_M = new mongoose.Schema({
    name: {
        type: String,
        require:["please fill the name"]
    },
    mobile: {
        type: Number,
        require:["please fill the mobile"]
    },
    email: {
        type: String,
        require:["please fill the email"]
    },
    address: {
        type: String,
        require:["please fill the address"]
    },
    whatsapp: {
        type: String,  default: true 
    },
    devicetoken:{
        type:String,
        require:["please fill the devicetoken"]
        
    }
});


const Preregistration_M_info = mongoose.model('Preregistration_M_info', Preregistration_M);
module.exports = Preregistration_M_info;