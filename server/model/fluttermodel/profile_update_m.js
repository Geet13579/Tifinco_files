const mongoose = require('mongoose');
const profile_update_m = new mongoose.Schema({
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
 
});


const profile_update_M_info = mongoose.model('profile_update_M_info', profile_update_m);
module.exports = profile_update_M_info;
