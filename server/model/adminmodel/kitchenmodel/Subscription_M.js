const mongoose = require('mongoose');
const Subscription_MSchema = new mongoose.Schema({
    foodtype  :{
        type: String
       },
       plan:{
        type: Number
       },
	  images:{
        type: String
       }
    
});



const subscribeinfo = mongoose.model('Subscriptionuser_infos', Subscription_MSchema);
module.exports = subscribeinfo;
