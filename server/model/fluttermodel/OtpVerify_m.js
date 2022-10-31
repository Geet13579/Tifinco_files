const mongoose = require('mongoose');

const varifyotpModel = new mongoose.Schema({
   
    email: {
        type: String
    },
    otp: {
        type: String
    },
    createdAt: {
        type: Date
    },
    expiresAt: {
        type: Date
    },

   
});


const varifyuserotp = mongoose.model('varifyUserOTP', varifyotpModel);
module.exports = varifyuserotp;