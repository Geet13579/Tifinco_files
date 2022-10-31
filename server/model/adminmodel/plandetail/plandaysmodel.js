const mongoose = require('mongoose');
const plandaysmodel = new mongoose.Schema({
    plandays: {
        type: String
    },
});


const plandaysmodel_infos= mongoose.model('plan_days_detail', plandaysmodel);
module.exports = plandaysmodel_infos ;