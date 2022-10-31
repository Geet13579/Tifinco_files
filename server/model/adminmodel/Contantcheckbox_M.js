const mongoose = require('mongoose');
const Contantcheckbox_M = new mongoose.Schema({
 
    singlemeal: {type: String, default: true },
    // active: {type: Boolean, default: true },
    corporate: {type: String,  default: true },
    addmeals:{type: String,  default: true },
    // active2: {type: Boolean, default: true },

});


const Contantcheckbox_info = mongoose.model('Contantcheckbox_info', Contantcheckbox_M);
module.exports = Contantcheckbox_info;