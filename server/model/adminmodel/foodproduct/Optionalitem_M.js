const mongoose = require('mongoose');
const optionalitem = new mongoose.Schema({
    
    tiffintype: {
        type:  String,
    },
    title:{
        type:String
    },
   
    optionals: {
        type:  JSON,

    },
   
});


const optionalitem_infos= mongoose.model('optionalitem_infos', optionalitem);
module.exports = optionalitem_infos ;