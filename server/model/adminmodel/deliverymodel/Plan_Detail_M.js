const mongoose = require('mongoose');
const PlanSchema = new mongoose.Schema({
      planname:{
        type: String,
        require: true
       },
       priceday:{
        type: String,
        require: true
       },
       pricemonth:{
        type: String,
        require: true
       },
       plantype:{
        type: String,
        require: true
       },
	     image:{
        type: String,
        require: true
       },
       description:{
        type: String,
        require: true
       },
       planitem:{
        type: String,
        require: true
       }
});

const PlanInfo = mongoose.model('plan_info', PlanSchema);
module.exports = PlanInfo;