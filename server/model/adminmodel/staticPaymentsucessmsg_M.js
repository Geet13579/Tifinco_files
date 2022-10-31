const mongoose = require('mongoose');
const staticPaymentsucessmsg_M = new mongoose.Schema({
    paragraph1: {
        type: String
    },
    paragraph2: {
        type: String
    },
    invitationmsg: {
        type: String
    },
    refrralcode: {
        type: String
    },
    createdAt: {
        type: Date,
        default: Date.now,
      },
 

});


const Paymentsucessmsg_info = mongoose.model('staticPaymentsucessmsg_info', staticPaymentsucessmsg_M);
module.exports = Paymentsucessmsg_info;