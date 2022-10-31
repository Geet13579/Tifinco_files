const mongoose = require('mongoose');
const usersinfo_m = new mongoose.Schema({
    orderId:{
        type:String
    },
    user_name: {
        type: String
    },
    user_email:{
        type: String
    },
    user_number:{
        type: String
    },
    plan_type:{
        type: String
    },
    orderAmount:{
        type:String
    },
    status: Boolean
}, { timestamps: { 
  } ,
});


const handleusersinfo = mongoose.model('usersinfofromweb', usersinfo_m);
module.exports = handleusersinfo;