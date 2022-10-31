const mongoose = require('mongoose');
const texes = new mongoose.Schema({
    texesandcharges: {
        type: String
    },
    deliveryfee: {
        type: String
    },
});


const userorder = mongoose.model('userorder_info', texes);
module.exports = userorder;