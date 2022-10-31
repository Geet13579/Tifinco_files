const mongoose = require('mongoose');
const promocode = new mongoose.Schema({
    heading: {
        type: String
    },
    promocode: {
        type: String
    },
    description: {
        type: String
    },
    discount: {
        type: String
    },
    upto:
    {
        type:Number
    },
    minimum:
    {
        type:Number
    }
});


const promcode_infos = mongoose.model('promcode_infos', promocode);
module.exports = promcode_infos;