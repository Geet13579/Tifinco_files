const mongoose = require('mongoose');
const tiffinPricemodel = new mongoose.Schema({
    Heatable: {
        type: String
    },
    NonHeatable:
    {
        type: String 
    },
   Tax:
    {
        type: String 
    }    
});


const tiffinPricemodel_infos= mongoose.model('tiffinPrice', tiffinPricemodel);
module.exports = tiffinPricemodel_infos ;