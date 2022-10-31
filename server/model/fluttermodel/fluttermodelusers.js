const mongoose = require('mongoose');
// let referralCodeGenerator = require('referral-code-generator')
const userInfoModel = new mongoose.Schema({
    name: {
        type: String
    },
    email: {
        type: String
    },
    mobile: {
        type: String,
        default: ""
    },
    facebookid: {
        type: String
    },
    token: {
        type: String
    },

    profileimage: {
        type: String
    },
    device_token: {
        type: String
    },
    referral:
    {
        type:String
        // default: referralCodeGenerator.alpha('lowercase', 6),
    },
    wallet:{
        type:Number
    }
    
});


const UserInfo = mongoose.model('userinfo', userInfoModel);
module.exports = UserInfo;