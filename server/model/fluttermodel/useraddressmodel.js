const mongoose = require('mongoose');
const useraddressmodel = new mongoose.Schema({
    address1: {
        type: String
    },
    address2: {
        type: String
    },
    house_no: {
        type: String
    },
    landmark: {
        type: String
    },
    addresstype: {
        type: String
    },
    lat: {
        type: String
    },
    long: {
        type: String
    },
    userid: {
        type: String
    },

});


const userAddressInfo = mongoose.model('useraddress_info', useraddressmodel);
module.exports = userAddressInfo;