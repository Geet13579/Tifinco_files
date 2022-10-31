const mongoose = require('mongoose');
const newsletter = new mongoose.Schema({
   
    user_email:{
        type: String
    },
    user_token:{
        type: String
    },
    subcribe:{
        type: String 
    },
   
    status: Boolean
}, { timestamps: { 
  } ,
  
});


const handlenewsletter = mongoose.model('newsletter', newsletter);
module.exports = handlenewsletter;