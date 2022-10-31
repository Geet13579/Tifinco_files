const mongoose = require('mongoose');
const Paymentsucessmsg_M = new mongoose.Schema({
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
      email:{
        type:String
      }

});


const Paymentsucessmsg_info = mongoose.model('Paymentsucessmsg_info', Paymentsucessmsg_M);
module.exports = Paymentsucessmsg_info;