const mongoose = require('mongoose');
const Social_MSchema = new mongoose.Schema({
      facebook:{
        type: String
       },
       instagram:{
        type: String
       },
	  twitter:{
        type: String
       },
       linkedin:{
        type: String
       },
});

const socialinfos = mongoose.model('social_info', Social_MSchema);
module.exports = socialinfos;