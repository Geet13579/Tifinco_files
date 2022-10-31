const mongoose = require('mongoose');
const sessionSchema = new mongoose.Schema({
    userid:{
        type: String
       },
       admintype:{
        type: String
       },
	  session_time:{
        type: String
       },
});



const Session_Info = mongoose.model('session_info', sessionSchema);
module.exports = Session_Info;


