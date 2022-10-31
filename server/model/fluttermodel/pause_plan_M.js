const mongoose = require('mongoose');
const pause_plan_M = new mongoose.Schema({
    userid: {
        type:String
    },
    starting_date:
    {
        type:String
    },
    ending_date:
    {
        type:String
    },
 
    dayscount:
    {
        type:String
    },
    activation_date:
    {
        type:String
    },
    
    plantype:
    {
        type:String
    },
    meal_time:
    {
        type:String
    },
  
 
 

 

});


const pauseplan_info = mongoose.model('pauseplan_info', pause_plan_M);
module.exports = pauseplan_info;