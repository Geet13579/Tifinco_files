const mongoose = require('mongoose');
const contactusSchema = new mongoose.Schema({
      cname:{
        type: String
       },
       mobile:{
        type: Number
       },
	  email:{
        type: String
       },
       address:{
        type: String
       },
});



const contactusinfo = mongoose.model('contactus_info', contactusSchema);
module.exports = contactusinfo;
