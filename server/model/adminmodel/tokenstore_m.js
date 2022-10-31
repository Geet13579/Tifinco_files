const mongoose = require('mongoose');
const usertoken = new mongoose.Schema({
 
    token: {
        type: String
    },
    email: {
        type: String
    },
    exptime: {
        type: String
    },
   

});




const AdminInfo = mongoose.model('tokenstore', usertoken);
module.exports = AdminInfo;