const mongoose = require('mongoose');
const plantypemodel = new mongoose.Schema({
    plan_name: {
        type: String
    },
    nonveg_days:{
        type:Number
    },
    plan_vegCount :{
        type:Number
    },
    
    
});


const plantypemodel_infos= mongoose.model('plan_infos', plantypemodel);
module.exports = plantypemodel_infos ;