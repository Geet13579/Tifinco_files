const mongoose = require('mongoose');
const usersmgs_m = new mongoose.Schema({
    user_name: {
        type: String
    },
    user_email:{
        type: String
    },
    subject:{
        type: String
    },
    comment:{
        type: String
    },
    status: Boolean
}, { timestamps: { 
  } ,
  
});


const handleusersmgs = mongoose.model('usersmgs', usersmgs_m);
module.exports = handleusersmgs;