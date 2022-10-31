const mongoose = require('mongoose');
const K_contactus_MSchema = new mongoose.Schema({
      name:{
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



const contactusinfo = mongoose.model(' Kitchencontactus_info', K_contactus_MSchema);
module.exports = contactusinfo;
